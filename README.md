# Revolver View

[![NPM Badge](https://img.shields.io/npm/v/react-native-revolver-view)](https://www.npmjs.com/package/react-native-revolver-view)

<p align="center" >
  <img
    width="400px"
    height="400px"
    src="https://github.com/osamaq/react-native-revolver-view/raw/master/docs/assets/semicircle.gif"
    alt="Demo 1"
  />
  <img
    width="400px"
    height="400px"
    src="https://github.com/osamaq/react-native-revolver-view/raw/master/docs/assets/input.gif"
    alt="Demo 2"
  />
</p>

A revolving picker view.

> Inspired by the work of [Oleg Frolov](https://dribbble.com/Volorf) — [Search icon interaction II](https://dribbble.com/shots/4638987-Search-icon-interaction-II).

## Installation

```
$ npm install react-native-revolver-view
```

```
$ yarn add react-native-revolver-view
```

Additional dependencies:

```
$ npm install react-native-reanimated react-native-gesture-handler @react-native-community/masked-view react-native-svg
```

```
$ yarn add react-native-reanimated react-native-gesture-handler @react-native-community/masked-view react-native-svg
```

> RN < 0.60 users need to perform linking.

iOS step only:

```
$ npx pod-install ios
```

For `react-native-gesture-handler`, Andorid needs some [additional steps](https://software-mansion.github.io/react-native-gesture-handler/docs/getting-started.html#android).

Finalize the installation of `react-native-gesture-handler` by adding the following to the top of [`index.js`](https://github.com/osamaq/react-native-revolver-view/blob/d036cef09770245633596301394b2b10a2500fb6/example/index.js#L1) (must be at the **top**):

`import 'react-native-gesture-handler'`

## Usage

```jsx
import RevolverView, { SearchIcon } from "react-native-revolver-view"

const items = ["All", "Videos", "Images", "News"]

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleNewIndex = newIndex => setActiveIndex(newIndex)

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFCA27",
      }}>
      <RevolverView
        items={items}
        activeIndex={activeIndex}
        onChangeIndex={handleNewIndex}
        rotatingComponent={<SearchIcon iconColor="#DDD9CB" />}
        containerStyle={{
          width: "50%",
        }}
      />
      <View style={{ marginTop: 50 }} />
      <Button title="Set to index 2" onPress={() => handleNewIndex(2)} />
    </View>
  )
}
```

For more advanced usage, check out this [example](https://github.com/osamaq/react-native-revolver-view/blob/master/example/App.tsx).

## Props

<table>
  <tr>
    <th>Item in Gif</th>
    <th>Prop</th>
    <th>Gif</th>
  </tr>
  <tr>
    <td>White container</td>
    <td>containerStyle</td>
        <td
  rowspan="4"
  ><img src="https://github.com/osamaq/react-native-revolver-view/raw/master/docs/assets/wow.gif" title="Demo 3"></td>
  </tr>
  <tr>
    <td>wow</td>
    <td>rotatingComponent</td>
  </tr>
  <tr>
    <td>'what is going on'</td>
    <td>items</td>
  </tr>
  <tr>
    <td>'Flexible' button</td>
    <td>children</td>
  </tr>
</table>

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
   * Rotating component container style.
   * This is the container that applies the rotation transform.
   * @default
   * {
   *    position: "absolute",
   *    left: 10,
   *    justifyContent: "center",
   *    zIndex: 1
   *    transform: [{rotate: Animated.Node<number> }]
   * }
   */
  rotatingComponentStyle?: ViewStyle
  /**
   * Ripple style.
   * @default
   *{
   *    position: "absolute",
   *    top: 8,
   *    left: 8,
   *    width: 22,
   *    height: 22,
   *    borderRadius: 20,
   *    backgroundColor: "#000",
   *    opacity: Animated.Node<number>,
   *    transform: [{ scale: Animated.Node<number> }],
   * }
   */
  rippleStyle?: ViewStyle
  /**
   * Ripple maximum opacity.
   * @default
   * 0.05
   */
  rippleActiveOpacity?: number
  /**
   * React children components.
   * Positioned to the right of the revolving text.
   */
  children?: ReactChild
}
```

```ts
interface SearchIconProps {
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
```

## License

MIT
