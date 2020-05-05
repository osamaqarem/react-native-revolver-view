import React from "react"
import Svg, { Circle, Rect } from "react-native-svg"
import { SearchIconProps } from "../types"

/**
 * Width and height of the icon.
 * Considered for ripple view style and text rotation animation.
 */
export const ICON_SIZE = 20

export function SearchIcon({
  iconColor,
  iconSize = ICON_SIZE,
}: SearchIconProps) {
  return (
    <Svg width={iconSize} height={iconSize} viewBox="0 0 28 28" fill="none">
      <Circle cx={12} cy={12} r={10.5} stroke={iconColor} strokeWidth={3} />
      <Rect
        x={18.065}
        y={19.986}
        width={2.922}
        height={10.054}
        rx={1.461}
        transform="rotate(-44.617 18.065 19.986)"
        fill={iconColor}
      />
    </Svg>
  )
}

export default SearchIcon
