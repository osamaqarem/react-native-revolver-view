import React, { useState } from "react"
import { Button, Text, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import RevolverView from "react-native-revolver-view"

const items = ["what", "is", "going", "on 🔥"]
const colors = [
  { rippleColor: "#FFCA27", iconColor: "lightblue", itemColor: "lightblue" },
  { rippleColor: "#ff83c6", iconColor: "#9c005e", itemColor: "#9c005e" },
  { rippleColor: "#beb3ff", iconColor: "#5c569f", itemColor: "#5c569f" },
  { rippleColor: "#ff75a2", iconColor: "#d14274", itemColor: "crimson" },
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
        rotatingComponent={
          <Text style={{ fontSize: 8, letterSpacing: 0.4, color: "black" }}>
            WOW
          </Text>
        }
        containerStyle={{
          width: "50%",
          transform: [{ scale: 1.5 }],
        }}
        itemStyle={{
          letterSpacing: 0.4,
        }}>
        <TouchableOpacity
          style={{
            width: "50%",
            height: "70%",
            borderRadius: 6,
            marginLeft: 60,
            marginRight: 20,
            backgroundColor: "#FFCA27",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Text style={{ fontSize: 12, letterSpacing: 0.4, color: "white" }}>
            Flexible
          </Text>
        </TouchableOpacity>
      </RevolverView>
      <View style={{ marginTop: 50 }} />
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

const SemiCircle = ({ color }: { color: string }) => (
  <View
    style={{
      padding: 10,
    }}>
    <View
      style={{
        top: 0,
        left: 0,
        position: "absolute",
        width: 10,
        height: 10,
        overflow: "hidden",
        bottom: 5,
      }}>
      <View
        style={{
          top: 0,
          left: 0,
          position: "absolute",
          width: 20,
          height: 20,
          borderRadius: 10,
          backgroundColor: color,
        }}
      />
    </View>
  </View>
)

export default App
