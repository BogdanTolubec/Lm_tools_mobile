import React, { useEffect, useState } from "react";
import { PieceInSet, RawPiece } from "../../../../../utills/types";
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
import ChooseRarenessLabels from "../ChooseRarenessLabels/ChooseRarenessLabels";
import { convertRawPieceToPieceInSet } from "../../../../../utills/functions/utils.functions";
import { FullHeightScrollView } from "../../../../../Components/ScrollView/ScrollView";
import JewelsOfPiece from "../JewelsOfPieceComponent/JewelsOfPieceComponent";

type Props = {
    selectedPiece: PieceInSet,
    allPiecesArray: Array<RawPiece>,
    isPiecesLoading: boolean,
    carouselPiecesRareness: rareness,
    onPieceInSetChangeSave: (newPiece: PieceInSet) => void,
    onChooseRarenessLabelPressHandler: (rareness: rareness) => void,
}

function SelectedPieceComponent({
    selectedPiece, 
    allPiecesArray, 
    isPiecesLoading, 
    carouselPiecesRareness, 
    onPieceInSetChangeSave,
    onChooseRarenessLabelPressHandler}: Props): React.JSX.Element {

    const [pieceInComponent, setPieceInComponent] = useState<PieceInSet>(selectedPiece)

    useEffect(() => {
        setPieceInComponent(selectedPiece)
    }, [selectedPiece])

    return(
        <FullHeightScrollView>
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
                                minimumValue = {0}
                                maximumValue = {tempernessStatsAddByLevels.length}
                                step = {1}
                                disabled = {
                                    carouselPiecesRareness == rareness.common || 
                                    carouselPiecesRareness == rareness.uncommon ||
                                    carouselPiecesRareness == rareness.rare ||
                                    carouselPiecesRareness == rareness.epic ||
                                    carouselPiecesRareness == rareness.legendary
                                }
                                onValueChange = {(value) => {
                                    setPieceInComponent({...pieceInComponent, tempernessLevel: value})
                                }}
                        />
                        </View>

                        <View style = {selected_piece_styles.carousel}>
                            <ItemsCarousel<RawPiece> itemsArray = {allPiecesArray}  containerStyle = {{flex: 1}}>
                                {({item}) =>
                                <View style = {{flex: 1}}>
                                    <Text style = {{alignSelf: "center", fontWeight: "900"}}>{item.name}</Text>
                                    <View style = {{height: 80, width: 80}}>
                                        <PieceComponent piece = {convertRawPieceToPieceInSet(item, selectedPiece.type)} 
                                            onPress = {() => setPieceInComponent(
                                                {
                                                    ...pieceInComponent,
                                                    piece_id: item.piece_id,
                                                    name: item.name,
                                                    imagePath: item.imagePath,
                                                    rareness: item.rareness,
                                                    tempernessLevel: 0,
                                                    stats: item.stats,
                                                })}
                                                pieceType = {selectedPiece.type}/>
                                    </View>
                                </View>
                                }
                            </ItemsCarousel>                    
                        </View>

                        <View style = {selected_piece_styles.choose_rareness_labels_wrapper}>
                            <ChooseRarenessLabels onChooseRarenessLabelPress = {onChooseRarenessLabelPressHandler}/>
                        </View>

                        <View>
                            {/*<View style = {selected_piece_styles.jewels_wrapper}>
                                    <JewelsOfPiece jewels = {selectedPiece.jewels}/>
                                </View>

                                <View style = {selected_piece_styles.choose_rareness_labels_wrapper}>
                                    <ChooseRarenessLabels onChooseRarenessLabelPress = {onChooseRarenessLabelPressHandler}/>
                                </View>*/
                            }
                        </View>

                        <View style = {selected_piece_styles.save_button}>
                            <ElevatedButton 
                                onPress = {() => onPieceInSetChangeSave(pieceInComponent)} 
                                colors = {[colors.bgPrimary, colors.surfaceRaised]}
                                title = "Save"
                            />
                        </View>
                    </View>
                }
            </Surface>
        </FullHeightScrollView>
    );
}

export default SelectedPieceComponent