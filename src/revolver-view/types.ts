import { ReactChild } from "react"
import { TextStyle, ViewStyle } from "react-native"
import { SpringParams } from "react-native-redash"

/**
 * Default icon rotation spring animation params.
 */
export type SpringConfig = Pick<SpringParams, "velocity" | "config">

export interface RevolverViewProps {
    /**
     * Array of items to display and iterate over.
     */
    items: string[]
    /**
     * Current active item.
     */
    activeIndex: number
    /**
     * Called as a result of the tap gesture on the icon.
     * Changed index is passed as an argument to the callback handler.
     */
    onChangeIndex: (newIndex: number) => void
    /**
     * Styles for the root view container.
     * @default
     * {
     *    width: '100%',
     *    height: 40,
     *    borderRadius: 8,
     *    backgroundColor: "white",
     *    flexDirection: "row",
     *    alignItems: "center",
     *    justifyContent: "center",
     * }
     */
    containerStyle?: ViewStyle
    /**
     * Item text color.
     * @default
     * "#DDD9CB"
     */
    itemColor?: string
    /**
     * Item text style.
     * If you would like to change the text color,
     * you have to use itemColor prop due to MaskedView usage. 
     */
    itemStyle?: TextStyle
    /**
     * Passed component will be rotated as part of the animation. 
     * @default 
     * <SearchIcon iconColor="#DDD9CB" />
     */
    rotatingComponent?: React.ReactElement<any>
    /**
     * Ripple maximum opacity.
     * @default 
     * 0.05
     */
    rippleActiveOpacity?: number
    /**
     * Ripple color.
     * @default
     * "#000"
     */
    rippleColor?: string
    /**
     * React children components.
     * Positioned to the right of the revolving text.
     */
    children?: ReactChild
}

export interface SearchIconProps {
    /**
     * Icon color.
     */
    iconColor: string
    /**
     * Icon width and height.
     * @default
     * 20
     */
    iconSize?: number
}