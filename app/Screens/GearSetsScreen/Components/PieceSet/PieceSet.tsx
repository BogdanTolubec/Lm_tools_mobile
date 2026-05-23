import React from "react";
import { View } from "react-native";
import pieces_set_styles from "./PieceSet.styles";
import { gearSet, Piece } from "../../../../../utills/types";
import PieceComponent from "../PieceComponent/PieceComponent";
import { Surface } from "react-native-paper";
import LinearGradient from "react-native-linear-gradient";
import { createJewelsOfPiecePlaceholder, createPiecePlaceholderByType } from "../../../../../utills/functions/placeholdersCreationFunctions";
import { pieceTypes } from "../../../../../utills/enums";

type Props = {
    gearSet: gearSet,
    onPiecePress: (piece: Piece) => void,
}

function PieceSet({gearSet, onPiecePress}: Props): React.JSX.Element {
    return(
        <Surface style = {pieces_set_styles.wrapper}>
            <LinearGradient colors = {["#1b3453", "#254166", "#213b5d" ,"#1b3453"]} style = {pieces_set_styles.linear_gradient}/>
            <View style = {pieces_set_styles.column_wrapper}>
                <PieceComponent 
                    piece = {gearSet.mainHand} 
                    jewels = {gearSet.mainHand?.jewels || createJewelsOfPiecePlaceholder()} 
                    onPress = {() => onPiecePress(gearSet.mainHand || createPiecePlaceholderByType(pieceTypes.mainHand))}/>
                <PieceComponent 
                    piece = {gearSet.helmet} 
                    jewels = {gearSet.helmet?.jewels || createJewelsOfPiecePlaceholder()} 
                    onPress = {() => onPiecePress(gearSet.helmet || createPiecePlaceholderByType(pieceTypes.helmet))}/>
                <PieceComponent
                    piece = {gearSet.plate} 
                    jewels = {gearSet.plate?.jewels || createJewelsOfPiecePlaceholder()} 
                    onPress = {() => onPiecePress(gearSet.plate || createPiecePlaceholderByType(pieceTypes.plate))}/>
                <PieceComponent 
                    piece = {gearSet.boots} 
                    jewels = {gearSet.boots?.jewels || createJewelsOfPiecePlaceholder()} 
                    onPress = {() => onPiecePress(gearSet.boots || createPiecePlaceholderByType(pieceTypes.boots))}/>
            </View>
            <View style = {pieces_set_styles.column_wrapper}>
                <PieceComponent 
                    piece = {gearSet.secondHand} 
                    jewels = {gearSet.secondHand?.jewels || createJewelsOfPiecePlaceholder()} 
                    onPress = {() => onPiecePress(gearSet.secondHand || createPiecePlaceholderByType(pieceTypes.secondHand))}/>
                <PieceComponent 
                    piece = {gearSet.accessory1} 
                    jewels = {gearSet.accessory1?.jewels || createJewelsOfPiecePlaceholder()} 
                    onPress = {() => onPiecePress(gearSet.accessory1 || createPiecePlaceholderByType(pieceTypes.accessory1))}/>
                <PieceComponent 
                    piece = {gearSet.accessory2} 
                    jewels = {gearSet.accessory2?.jewels || createJewelsOfPiecePlaceholder()} 
                    onPress = {() => onPiecePress(gearSet.accessory2 || createPiecePlaceholderByType(pieceTypes.accessory2))}/>
                <PieceComponent 
                    piece = {gearSet.accessory3} 
                    jewels = {gearSet.accessory3?.jewels || createJewelsOfPiecePlaceholder()} 
                    onPress = {() => onPiecePress(gearSet.accessory3 || createPiecePlaceholderByType(pieceTypes.accessory3))}/>
            </View>
        </Surface>
    );
}

export default PieceSet