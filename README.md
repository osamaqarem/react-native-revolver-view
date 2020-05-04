# Revolver View

[![NPM Badge](https://img.shields.io/npm/v/react-native-revolver-view)](https://www.npmjs.com/package/react-native-revolver-view)

A revolving picker view.

> Inspired by the work of [Oleg Frolov](https://dribbble.com/Volorf) — [Search icon interaction II](https://dribbble.com/shots/4638987-Search-icon-interaction-II).

## Installation

```
$ npm install react-native-revolver-view
# or
$ yarn add react-native-revolver-view
```

Follow the installation instructions for each of the following libraries:

<!-- - [react-native-reanimated](https://github.com/software-mansion/react-native-reanimated)
- [react-native-gesture-handler](https://github.com/software-mansion/react-native-gesture-handler)
- [react-native-svg](https://github.com/react-native-community/react-native-svg)
- [react-native-masked-view](https://github.com/react-native-community/react-native-masked-view) -->

`yarn add react-native-reanimated react-native-gesture-handler @react-native-community/masked-view react-native-svg`

`npx pod-install ios`

## Usage

## Props

```tsx
interface RevolverViewProps {
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
   * Similarly to a TextInput's onChangeText,
   * onChangeIndex's handler should update the current active index state to @param newIndex.
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
```

## License

MIT
