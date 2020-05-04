import React from "react"
import { TextStyle } from "react-native"
import Animated from "react-native-reanimated"

interface Props {
  itemStyle?: TextStyle
  translateX: Animated.Node<number>
  translateY: Animated.Node<number>
  text: string
}
const RevolvingText = ({ itemStyle, translateX, translateY, text }: Props) => (
  <Animated.Text
    style={[
      itemStyle,
      {
        transform: [{ translateX, translateY }],
      },
    ]}>
    {text}
  </Animated.Text>
)

export default RevolvingText
