import React, { useEffect, useState } from "react";
import { View } from "react-native";
import swapper from "./Swapper.styles";
import { IconButton } from "react-native-paper";

type Props = {
    componentsCount: number
    centerComponent: React.JSX.Element,
    childToParent: (id: number) => void,
}

function Swapper({centerComponent, componentsCount, childToParent}: Props): React.JSX.Element {

    const[swapperIterator, setSwapperIterator] = useState<number>(0)

    useEffect(() => {
        setSwapperIterator(0)
        childToParent(0)
    }, [])

    useEffect(() => {
        childToParent(swapperIterator)
    }, [swapperIterator])

    return(
        <View style = {swapper.wrapper}>
            <IconButton icon = "arrow-left" style = {swapper.icon_wrapper} onPress = {() => {
                if(swapperIterator > 0)
                    setSwapperIterator(swapperIterator - 1)
            }}/>

                <View style = {swapper.centerComponent}>
                    {centerComponent}
                </View>

            <IconButton icon = "arrow-right" mode = "outlined" style = {swapper.icon_wrapper} onPress = {() => {
                if(swapperIterator < (componentsCount - 1))
                    setSwapperIterator(swapperIterator + 1)
            }}/>
        </View>
    );
}

export default Swapper