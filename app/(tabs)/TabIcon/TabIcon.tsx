import React from "react"
import { ColorValue, Image, ImageSourcePropType, Text, View } from "react-native";
import tab_icon from "./TabIconStyles";

type Props = {
  icon: string,
  color: ColorValue | undefined, 
  name: string, 
  focused: boolean 
}

function TabIcon ({ icon, color, name, focused}: Props): React.JSX.Element {

    return (
      <View style = {tab_icon.wrapper}>
        <Image
          source={{uri: icon}}
          resizeMode="contain"
          tintColor={color}
          style = {tab_icon.img}
        />
        <Text
          style={{ color: color, textAlign: "center" }}
        >
          {name}
        </Text>
      </View>
    );
  };

export default TabIcon