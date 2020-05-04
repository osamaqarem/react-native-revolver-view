import React, { useState } from "react"
import { Button, View, TextInput } from "react-native"
import RevolverView from "react-native-revolver-view"

const items = ["All", "Videos", "Images", "News"]
const colors = [
  { rippleColor: "#FFCA27", iconColor: "lightblue", itemColor: "lightblue" },
  { rippleColor: "#ff83c6", iconColor: "#9c005e", itemColor: "#9c005e" },
  { rippleColor: "#beb3ff", iconColor: "#5c569f", itemColor: "#5c569f" },
  { rippleColor: "#ff75a2", iconColor: "#d14274", itemColor: "#d14274" },
]
const App = () => {
  const [rippleConfig, setRippleConfig] = useState({
    rippleColor: colors[0].rippleColor,
    iconColor: colors[0].iconColor,
    itemColor: colors[0].itemColor,
    activeIndex: 0,
  })

  const setActiveIndex = (newIndex: number) =>
    setRippleConfig((state) => ({
      ...state,
      activeIndex: newIndex,
      rippleColor: colors[newIndex].rippleColor,
      iconColor: colors[newIndex].iconColor,
      itemColor: colors[newIndex].itemColor,
    }))

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
        rippleActiveOpacity={0.5}
        activeIndex={rippleConfig.activeIndex}
        onChangeIndex={setActiveIndex}
        rippleColor={rippleConfig.rippleColor}
        itemColor={rippleConfig.itemColor}
        rotatingComponent={<SearchIcon iconColor={rippleConfig.iconColor} />}
        containerStyle={{
          width: "50%",
        }}
        itemStyle={{
          letterSpacing: 0.4,
        }}>
        <TextInput
          style={{
            flex: 1,
            marginLeft: 100,
            marginRight: 10,
          }}
        />
      </RevolverView>
      <View style={{ marginTop: 100 }} />
      <Button title="Index 0" onPress={() => setActiveIndex(0)} />
      <View style={{ marginTop: 10 }} />
      <Button title="Index 1" onPress={() => setActiveIndex(1)} />
      <View style={{ marginTop: 10 }} />
      <Button title="Index 2" onPress={() => setActiveIndex(2)} />
      <View style={{ marginTop: 10 }} />
      <Button title="Index 3" onPress={() => setActiveIndex(3)} />
    </View>
  )
}

export default App
