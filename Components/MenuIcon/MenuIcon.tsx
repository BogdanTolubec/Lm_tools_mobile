import React from "react"
import { ImageBackground, TouchableOpacity} from "react-native"
import menu_icon from "./MenuIcon.styles";
import { IconPathConsts } from "../../utills/enums";

type Props = {
    onPress: () => void
}

function MenuIcon({onPress}: Props): React.JSX.Element {
    return(
        <TouchableOpacity style = {menu_icon.wrapper} onPress = {onPress}>
            <ImageBackground source = {{uri: IconPathConsts.menuIcon}} style = {menu_icon.img_background}/>
        </TouchableOpacity>
    );
}

export default MenuIcon