import React from "react"
import Animated from "react-native-reanimated"
import { styles } from "../styles"
import { ViewStyle } from "react-native"

interface Props {
  opacity: Animated.Value<number> | Animated.Node<number>
  rippleScale: Animated.Node<number>
  rippleStyle?: ViewStyle
}

const RippleView = ({
  opacity: gestureOpacity,
  rippleScale: gestureRippleAnim,
  rippleStyle,
}: Props) => (
  <Animated.View
    style={[
      styles.ripple,
      {
        opacity: gestureOpacity,
        transform: [{ scale: gestureRippleAnim }],
      },
      rippleStyle,
    ]}
  />
)

export default RippleView
