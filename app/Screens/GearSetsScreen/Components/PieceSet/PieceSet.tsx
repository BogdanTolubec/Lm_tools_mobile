import React from "react";
import { View } from "react-native";
import pieces_set_styles from "./PieceSet.styles";
import { gearSet, PieceInSet } from "../../../../../utills/types";
import PieceComponent from "../PieceComponent/PieceComponent";
import { Surface } from "react-native-paper";
import LinearGradient from "react-native-linear-gradient";
import { createJewelsOfPiecePlaceholder, createPiecePlaceholderByType } from "../../../../../utills/functions/placeholdersCreationFunctions";
import { pieceTypesClient } from "../../../../../utills/enums";

type Props = {
    gearSet: gearSet,
    onPiecePress: (piece: PieceInSet) => void,
}

function PieceSet({gearSet, onPiecePress}: Props): React.JSX.Element {
    return(
        <Surface style = {pieces_set_styles.wrapper}>
            <LinearGradient colors = {["#1b3453", "#254166", "#213b5d" ,"#1b3453"]} style = {pieces_set_styles.linear_gradient}/>
            <View style = {pieces_set_styles.column_wrapper}>
                <PieceComponent 
                    piece = {gearSet.mainHand}
                    pieceType = {pieceTypesClient.mainHand}
                    jewels = {gearSet.mainHand?.jewels || createJewelsOfPiecePlaceholder()} 
                    onPress = {() => onPiecePress(gearSet.mainHand || createPiecePlaceholderByType(pieceTypesClient.mainHand))}/>
                <PieceComponent 
                    piece = {gearSet.helmet}
                    pieceType = {pieceTypesClient.helmet}
                    jewels = {gearSet.helmet?.jewels || createJewelsOfPiecePlaceholder()} 
                    onPress = {() => onPiecePress(gearSet.helmet || createPiecePlaceholderByType(pieceTypesClient.helmet))}/>
                <PieceComponent
                    piece = {gearSet.plate}
                    pieceType = {pieceTypesClient.plate}
                    jewels = {gearSet.plate?.jewels || createJewelsOfPiecePlaceholder()} 
                    onPress = {() => onPiecePress(gearSet.plate || createPiecePlaceholderByType(pieceTypesClient.plate))}/>
                <PieceComponent 
                    piece = {gearSet.boots}
                    pieceType = {pieceTypesClient.boots}
                    jewels = {gearSet.boots?.jewels || createJewelsOfPiecePlaceholder()} 
                    onPress = {() => onPiecePress(gearSet.boots || createPiecePlaceholderByType(pieceTypesClient.boots))}/>
            </View>
            <View style = {pieces_set_styles.column_wrapper}>
                <PieceComponent 
                    piece = {gearSet.secondHand}
                    pieceType = {pieceTypesClient.secondHand}
                    jewels = {gearSet.secondHand?.jewels || createJewelsOfPiecePlaceholder()} 
                    onPress = {() => onPiecePress(gearSet.secondHand || createPiecePlaceholderByType(pieceTypesClient.secondHand))}/>
                <PieceComponent 
                    piece = {gearSet.accessory1}
                    pieceType = {pieceTypesClient.accessory1}
                    jewels = {gearSet.accessory1?.jewels || createJewelsOfPiecePlaceholder()} 
                    onPress = {() => onPiecePress(gearSet.accessory1 || createPiecePlaceholderByType(pieceTypesClient.accessory1))}/>
                <PieceComponent 
                    piece = {gearSet.accessory2} 
                    pieceType = {pieceTypesClient.accessory2}
                    jewels = {gearSet.accessory2?.jewels || createJewelsOfPiecePlaceholder()} 
                    onPress = {() => onPiecePress(gearSet.accessory2 || createPiecePlaceholderByType(pieceTypesClient.accessory2))}/>
                <PieceComponent 
                    piece = {gearSet.accessory3}
                    pieceType = {pieceTypesClient.accessory3}
                    jewels = {gearSet.accessory3?.jewels || createJewelsOfPiecePlaceholder()} 
                    onPress = {() => onPiecePress(gearSet.accessory3 || createPiecePlaceholderByType(pieceTypesClient.accessory3))}/>
            </View>
        </Surface>
    );
}

export default PieceSet