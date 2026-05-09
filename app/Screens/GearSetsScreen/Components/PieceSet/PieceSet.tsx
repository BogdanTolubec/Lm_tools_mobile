import React from "react";
import { View } from "react-native";
import pieces_set_styles from "./PieceSet.styles";
import { gearSet } from "../../../../../utills/types";
import PieceComponent from "../PieceComponent/PieceComponent";
import SVGBackground from "../../../../../Components/SVGBackground/SVGBackground";
import { Surface } from "react-native-paper";
import LinearGradient from "react-native-linear-gradient";

type Props = {
    gearSet: gearSet,
}

function PieceSet({gearSet}: Props): React.JSX.Element {
    return(
        <Surface style = {pieces_set_styles.wrapper}>
            <LinearGradient colors = {["#1b3453", "#254166", "#213b5d" ,"#1b3453"]} style = {pieces_set_styles.linear_gradient}/>
            <View style = {pieces_set_styles.column_wrapper}>
                <PieceComponent piece = {gearSet.mainHand} jewels = {gearSet.mainHand?.jewels}/>
                <PieceComponent piece = {gearSet.helmet} jewels = {gearSet.helmet?.jewels}/>
                <PieceComponent piece = {gearSet.plate} jewels = {gearSet.plate?.jewels}/>
                <PieceComponent piece = {gearSet.boots} jewels = {gearSet.boots?.jewels}/>
            </View>
            <View style = {pieces_set_styles.column_wrapper}>
                <PieceComponent piece = {gearSet.secondHand} jewels = {gearSet.secondHand?.jewels}/>
                <PieceComponent piece = {gearSet.accessory1} jewels = {gearSet.accessory1?.jewels}/>
                <PieceComponent piece = {gearSet.accessory2} jewels = {gearSet.accessory2?.jewels}/>
                <PieceComponent piece = {gearSet.accessory3} jewels = {gearSet.accessory3?.jewels}/>
            </View>
        </Surface>
    );
}

export default PieceSet