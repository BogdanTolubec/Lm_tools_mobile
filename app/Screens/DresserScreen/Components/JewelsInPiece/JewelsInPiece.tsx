import React from "react";
import { ImageBackground, View } from "react-native";
import { ImgPathConsts } from "../../../../../utills/enums";
import { jewel } from "../../../../../utills/types";
import shared_styles from "../../../../../utills/sharedStyles.styles";
import jewels_in_piece from "./JewelsInPiece.styles";
import Jewel from "../Jewel/Jewel";

type Props = {
    jewels: Array<jewel | undefined> | undefined,
}

function JewelsInPiece({jewels}: Props): React.JSX.Element {

    if(jewels){ return(
        <View style = {jewels_in_piece.wrapper}>
            {   
                jewels.map((jewel, index) => 
                {
                    return(
                        <View key = {index} style = {jewels_in_piece.jewel_wrapper}>
                            <Jewel jewel = {jewel}/>
                        </View>
                    )
                }  
                )
            }
        </View>
    )}

    else{
        return(
            <View style = {jewels_in_piece.wrapper}>
                <View style = {jewels_in_piece.jewel_wrapper}>
                    <ImageBackground source = {{uri: ImgPathConsts.jewelsPlaceHolderImage}} style = {shared_styles.img_in_view}/>
                </View>
                
                <View style = {jewels_in_piece.jewel_wrapper}>
                    <ImageBackground source = {{uri: ImgPathConsts.jewelsPlaceHolderImage}} style = {shared_styles.img_in_view}/>
                </View>

                <View style = {jewels_in_piece.jewel_wrapper}>
                    <ImageBackground source = {{uri: ImgPathConsts.jewelsPlaceHolderImage}} style = {shared_styles.img_in_view}/>
                </View>
            </View>
    )}
}

export default JewelsInPiece