import React, { useEffect, useState } from "react";
import { Piece } from "../../../../../utills/types";
import { Surface, Text } from "react-native-paper";
import PieceComponent from "../PieceComponent/PieceComponent";
import selected_piece_styles from "./SelectedPieceComponent.styles";
import LinearGradient from "react-native-linear-gradient";
import { View } from "react-native";
import ItemsCarousel from "../ItemsCarousel/ItemsCarousel";
import Slider from "@react-native-community/slider";
import { tempernessStatsAddByLevels } from "../../../../../utills/consts";
import { rareness } from "../../../../../utills/enums";
import Loader from "../../../../../Components/Loader/Loader";
import ElevatedButton from "../../../../../Components/ElevatedButton/ElevatedButton";
import { colors } from "../../../../../utills/styles/sharedStyles.styles";

type Props = {
    selectedPiece: Piece,
    allPiecesArray: Array<Piece>,
    isPiecesLoading: boolean,
    onPieceInSetChangeSave: (newPiece: Piece) => void,
}

function SelectedPieceComponent({selectedPiece, allPiecesArray, isPiecesLoading, onPieceInSetChangeSave}: Props): React.JSX.Element {

    const [pieceInComponent, setPieceInComponent] = useState<Piece>(selectedPiece)
    const [piecesInCarouselRareness, setPiecesInCarouselRareness] = useState<rareness>(selectedPiece.rareness)

    useEffect(() => {
        setPieceInComponent(selectedPiece)
        setPiecesInCarouselRareness(selectedPiece.rareness)
    }, [selectedPiece])

    return(
        <Surface style = {selected_piece_styles.wrapper}>
            <LinearGradient colors = {["#1b3453", "#254166", "#1b3453"]} 
                style = {selected_piece_styles.linearGradient}/>
            {
                isPiecesLoading ?
                <Loader/>
                :
                <View style = {selected_piece_styles.content_wrapper}>
                    <View style = {selected_piece_styles.selected_piece_wrapper}>
                        <PieceComponent piece = {pieceInComponent} pieceType = {selectedPiece.type}/>
                    </View>

                    <View style = {selected_piece_styles.slider}>
                        <Text style = {selected_piece_styles.temperness_level_text}> {pieceInComponent.tempernessLevel || 0} </Text>
                        <Slider 
                            style = {{flex: 1}}
                            minimumValue = {1}
                            maximumValue = {tempernessStatsAddByLevels.length}
                            step = {1}
                            disabled = {
                                piecesInCarouselRareness == rareness.common || 
                                piecesInCarouselRareness == rareness.uncommon ||
                                piecesInCarouselRareness == rareness.rare ||
                                piecesInCarouselRareness == rareness.epic ||
                                piecesInCarouselRareness == rareness.legendary
                            }
                            onValueChange = {(value) => {
                                setPieceInComponent({...pieceInComponent, tempernessLevel: value})
                            }}
                    />
                    </View>

                    <View style = {selected_piece_styles.carousel}>
                        <ItemsCarousel<Piece> itemsArray = {allPiecesArray}  containerStyle = {{flex: 1}}>
                            {({item}) => 
                            <View style = {{height: 80, width: 80}}>
                                <PieceComponent piece = {item} 
                                    onPress = {() => setPieceInComponent({
                                        ...pieceInComponent,
                                        piece_id: item.piece_id,
                                        name: item.name,
                                        imagePath: item.imagePath,
                                        rareness: item.rareness,
                                        tempernessLevel: 0,
                                        stats: item.stats,
                                        })}
                                    pieceType = {selectedPiece.type}/>
                            </View>}
                        </ItemsCarousel>                    
                    </View>

                    

                    <View style = {selected_piece_styles.save_button}>
                        <ElevatedButton 
                            onPress = {() => onPieceInSetChangeSave(pieceInComponent)} 
                            colors = {[colors.bgPrimary, colors.surfaceRaised]}
                            title = "Save"/>
                    </View>
                </View>
            }
        </Surface>
    );
}

export default SelectedPieceComponent