import React from "react"
import Animated from "react-native-reanimated"
import { styles } from "../styles"

interface Props {
  rippleColor: string
  opacity: Animated.Value<number> | Animated.Node<number>
  rippleScale: Animated.Node<number>
}

const RippleView = ({
  rippleColor,
  opacity: gestureOpacity,
  rippleScale: gestureRippleAnim,
}: Props) => (
  <Animated.View
    style={[
      styles.ripple,
      {
        backgroundColor: rippleColor,
        opacity: gestureOpacity,
        transform: [{ scale: gestureRippleAnim }],
      },
    ]}
  />
)

export default RippleView
