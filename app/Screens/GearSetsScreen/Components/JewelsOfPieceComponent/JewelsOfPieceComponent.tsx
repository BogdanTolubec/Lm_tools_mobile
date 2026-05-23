import React from "react"
import { jewel } from "../../../../../utills/types"
import { View } from "react-native";
import JewelComponent from "../JewelComponent/JewelComponent";
import jewels_of_piece_styles from "./JewelsOfPieceComponent.styles";

type Props = {
    jewels: (jewel | undefined)[],
    onJewelPress?: (jewel: jewel | undefined) => void
}

function JewelsOfPiece ({jewels, onJewelPress}: Props): React.JSX.Element {

    return(
        <View style = {jewels_of_piece_styles.wrapper}>
            {   
                jewels.map((jewel, index) => 
                    {
                        return(
                            <View key = {index} style = {jewels_of_piece_styles.jewel_wrapper}>
                                <JewelComponent jewel = {jewel} onPress = {(jewel) => {
                                        onJewelPress ?
                                        onJewelPress(jewel)
                                        :
                                        1
                                    }}/>
                            </View>
                        )
                    }  
                )
            }
        </View> 
    );
}

export default JewelsOfPiece