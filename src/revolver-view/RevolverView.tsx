import MaskedView from "@react-native-community/masked-view"
import React, { useRef } from "react"
import { View } from "react-native"
import { State, TapGestureHandler } from "react-native-gesture-handler"
import Animated, {
  call,
  cond,
  Easing,
  eq,
  Extrapolate,
  greaterThan,
  interpolate,
  multiply,
  neq,
  or,
  set,
  sub,
  useCode,
} from "react-native-reanimated"
import {
  bin,
  onGestureEvent,
  polar2Cartesian,
  spring,
  useValues,
  withTimingTransition,
} from "react-native-redash"
import RevolvingText from "./components/RevolvingText"
import RippleView from "./components/RippleView"
import SearchIcon, { ICON_SIZE } from "./components/SearchIcon"
import { defaultSpringConfig, rippleAnimeParams } from "./config"
import { useDebounce } from "./hooks/useDebounce"
import { styles } from "./styles"
import { RevolverViewProps } from "./types"

const RevolverView = ({
  items,
  activeIndex,
  onChangeIndex,
  containerStyle,
  itemStyle,
  rotatingComponent = <SearchIcon iconColor="#DDD9CB" />,
  rippleActiveOpacity = 0.05,
  rippleColor = "#000",
  itemColor = "#DDD9CB",
  children,
}: RevolverViewProps) => {
  const prevIndex = useRef(activeIndex)
  const debouncedValues = useDebounce(
    { itemText: items[activeIndex], itemColor: itemColor },
    200,
  )

  const [
    gestureRipple,
    gestureOpacityAnim,
    gestureState,
    rotationAnim,
    translateX,
    translateY,
    thetaRadians,
  ] = useValues([rippleAnimeParams.medium, 0, State.UNDETERMINED, 0, 0, 0, 0])
  const gestureHandler = onGestureEvent({ state: gestureState })

  const lastToFirst =
    prevIndex.current === items.length - 1 && activeIndex === 0
  // ensure the rotation goes clockwise instead of counter clockwise when going from the last item to the first item
  const nextIndex = lastToFirst ? prevIndex.current + 1 : activeIndex

  // Icon Rotation
  useCode(
    () => [
      cond(neq(prevIndex.current, activeIndex), [
        set(thetaRadians, 2 * Math.PI),
        set(
          rotationAnim,
          spring({
            from: prevIndex.current,
            to: nextIndex,
            ...defaultSpringConfig,
          }),
        ),
        // stop the animation
        call([], () => (prevIndex.current = activeIndex)),
      ]),
    ],
    [activeIndex],
  )

  // fix for case when ripple goes from large to small rather than from small to large.
  const [smallIndex, bigIndex, rippleScaleOne, rippleScaleTwo] =
    prevIndex.current > nextIndex
      ? [
          nextIndex,
          prevIndex.current,
          rippleAnimeParams.large,
          rippleAnimeParams.small,
        ]
      : [
          prevIndex.current,
          nextIndex,
          rippleAnimeParams.small,
          rippleAnimeParams.large,
        ]

  // Ripple 1
  const rippleAnim = rotationAnim.interpolate({
    inputRange: [smallIndex, bigIndex],
    outputRange: [rippleScaleOne, rippleScaleTwo],
    extrapolate: Extrapolate.CLAMP,
  })

  // Ripple 2
  const gestureRippleAnim = withTimingTransition(gestureRipple, {
    duration: 100,
  })

  // make sure opacity is set to 0 for default state (activeIndex = prevIndex)
  const opacity = activeIndex === prevIndex.current ? 0 : rippleActiveOpacity
  const opacityAnim = interpolate(rippleAnim, {
    inputRange: [rippleAnimeParams.small, rippleAnimeParams.large],
    outputRange: [opacity, 0],
    extrapolate: Extrapolate.CLAMP,
  })

  // Revolving text
  const revoloutionRadians = cond(
    neq(prevIndex.current, activeIndex),
    withTimingTransition(
      cond(
        or(bin(lastToFirst), greaterThan(activeIndex, prevIndex.current)),
        thetaRadians,
        sub(0, thetaRadians),
      ),
      {
        duration: 600,
        easing: Easing.in(Easing.bezier(0.93, 0.01, 0.2, 1.18)),
      },
    ),
    0,
  )

  const vector = polar2Cartesian({
    radius: ICON_SIZE * 3,
    theta: revoloutionRadians,
  })

  useCode(
    () => [
      set(translateX, vector.x),
      set(translateY, vector.y),
      cond(eq(vector.x, 60), [
        cond(eq(gestureState, State.BEGAN), [
          set(gestureOpacityAnim, rippleActiveOpacity),
          set(gestureRipple, rippleAnimeParams.small),
        ]),
        cond(eq(gestureState, State.END), [
          set(gestureOpacityAnim, 0),
          set(gestureRipple, rippleAnimeParams.medium),
          call([], () =>
            onChangeIndex(
              activeIndex === items.length - 1 ? 0 : activeIndex + 1,
            ),
          ),
          set(gestureState, State.UNDETERMINED),
        ]),
      ]),
    ],
    [gestureState, onChangeIndex, gestureState, gestureRipple],
  )

  return (
    <View style={[styles.container, containerStyle]}>
      <MaskedView
        style={styles.maskedViewContainer}
        maskElement={
          <View style={styles.maskedView}>
            <RevolvingText
              itemStyle={itemStyle}
              translateX={translateX}
              translateY={translateY}
              text={debouncedValues.itemText}
            />
          </View>
        }>
        <View
          style={[
            styles.mask,
            {
              backgroundColor: debouncedValues.itemColor,
            },
          ]}
        />
      </MaskedView>
      {children}
      <TapGestureHandler {...gestureHandler} maxDurationMs={100000}>
        <Animated.View
          style={[
            styles.iconContainer,
            {
              transform: [
                {
                  rotate: multiply((Math.PI * 2) / items.length, rotationAnim),
                },
              ],
            },
          ]}>
          {rotatingComponent}
        </Animated.View>
      </TapGestureHandler>
      <RippleView
        rippleColor={rippleColor}
        opacity={opacityAnim}
        rippleScale={rippleAnim}
      />
      <RippleView
        rippleColor={rippleColor}
        opacity={gestureOpacityAnim}
        rippleScale={gestureRippleAnim}
      />
    </View>
  )
}

export default RevolverView
