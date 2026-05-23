import React, { useEffect, useState } from "react";
import { ImageBackground, Pressable, View } from "react-native";
import gear_set_screen_styles from "./GearSetScreen.styles";
import shared_styles from "../../../../utills/styles/sharedStyles.styles";
import { ImgPathConsts, pieceTypes } from "../../../../utills/enums";
import { createGearSetPlaceholder, createPiecePlaceholderByType } from "../../../../utills/functions/placeholdersCreationFunctions";
import { gearSet, Piece } from "../../../../utills/types";
import { getDBConnection, getALLGearSets, getAllPiecesByTypeAndRareness } from "../../../../utills/functions/db-service";
import Loader from "../../../../Components/Loader/Loader";
import PieceSet from "../Components/PieceSet/PieceSet";
import StatsComponent from "../Components/StatsComponent/StatsComponent";
import { calculateGearSetStats } from "../../../../utills/functions/statsCalculation.functions";
import SelectedPieceComponent from "../Components/SelectedPieceComponent/SelectedPieceComponent";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import { useAppDimensions } from "../../../../utills/styles/dimensions";
import DualAnimatedComponent from "../Components/DualAnimatedComponents/DualAnimatedComponents";
import { Text } from "react-native-paper";

function GearSetScreen(): React.JSX.Element {
    const { widthInPercentsToPixels, heightInPercentToPixels } = useAppDimensions()

    const [isGearSetsLoading, setIsGearSetsloading] = useState<boolean>(false)
    const [isPiecesForCarouselLoading, setIsPiecesForCarouselLoading] = useState<boolean>(false)

    const [gearSetSelected, setGearSetSelected] = useState<gearSet>(createGearSetPlaceholder())
    const [selectedPiece, setSelectedPiece] = useState<Piece>(createPiecePlaceholderByType(pieceTypes.mainHand))
    
    const [allGearSets, setAllGearsSets] = useState<gearSet[]>([])
    const [allPiecesAvailable, setAllpiecesAvailable] = useState<Piece[]>([])
    const [isStatsMinimized, setIsStatsMinimized] = useState<boolean>(false)

    const statsComponentHeight = useSharedValue(heightInPercentToPixels(30))
    const gearSetAndSelectedPieceComponentHeight = useSharedValue(heightInPercentToPixels(68))

    const statsComponentAnimatedStyle = useAnimatedStyle(() => {
        return {
            height: statsComponentHeight.value,
        }
    })

    const gearSetAndSelectedPieceAnimatedStyle = useAnimatedStyle(() => {
        return {
            height: gearSetAndSelectedPieceComponentHeight.value,
        }
    })

    useEffect(() => {
        setIsGearSetsloading(true)

        const getAllSets = async () => {
            try{
                const db = await getDBConnection()

                await getALLGearSets(db).then((data: gearSet[]) => {
                    setAllGearsSets(data)
                    setGearSetSelected(data[0])
                })
            }
            catch(e){
                console.error(e)
            }
        }

        getAllSets().finally(() => setIsGearSetsloading(false))
    }, [])

    useEffect(() => {
        setIsPiecesForCarouselLoading(true)

        const getAllPieces = async () =>{
            try{
                const db = await getDBConnection()

                await getAllPiecesByTypeAndRareness(db, selectedPiece?.type, selectedPiece?.rareness).then((data: Piece[]) => {
                    setAllpiecesAvailable(data)
                })
            } catch(e){
                console.error(e)
            }
        }

        getAllPieces().finally(() => setIsPiecesForCarouselLoading(false))
        
    }, [selectedPiece])

    function onGearSetStatsPressHandler() {
        const changedIsStatsminimized = !isStatsMinimized
        setIsStatsMinimized(changedIsStatsminimized)

        statsComponentHeight.value = withSpring(heightInPercentToPixels(changedIsStatsminimized ? 8 : 30))
        gearSetAndSelectedPieceComponentHeight.value = withSpring(heightInPercentToPixels(changedIsStatsminimized ? 90 : 68))
    }

    function onPieceInGearSetPressHandler(piece: Piece) {
        setSelectedPiece(piece)
    }

    function onPieceInCarouselPressHandler(piece: Piece) {
        setSelectedPiece(piece)
    }

    return(
        <View style = {gear_set_screen_styles.wrapper}>
            {
                isGearSetsLoading ? 
                <Loader/>

                :

                <ImageBackground style = {shared_styles.background_img} source = {{uri: ImgPathConsts.backgroundImage}}>
                    <View style = {gear_set_screen_styles.inner_wrapper}>
                        <Animated.View style = {[
                            gear_set_screen_styles.stats_component_wrapper_full, statsComponentAnimatedStyle
                            ]} >
                            <Pressable style = {{flex: 1}} onPress = {() => onGearSetStatsPressHandler()}>
                                <StatsComponent statsToDisplay = {calculateGearSetStats(gearSetSelected)}/>
                            </Pressable>
                        </Animated.View>

                        <Animated.View style = {[
                                gear_set_screen_styles.piece_set_and_selected_piece_wrapper, gearSetAndSelectedPieceAnimatedStyle
                            ]}>
                            <View style = {{flex: 1}}>                   
                                <DualAnimatedComponent 
                                    leftComponent = { ({closeLeftPanel}) =>
                                        <PieceSet 
                                            gearSet = {gearSetSelected} 
                                            onPiecePress = {(piece) => {
                                                onPieceInGearSetPressHandler(piece)
                                                closeLeftPanel()
                                            }}/>
                                    }

                                    rightComponent = {
                                        <SelectedPieceComponent 
                                            selectedPiece = {selectedPiece} 
                                            allPiecesArray = {allPiecesAvailable}
                                            isPiecesLoading = {isPiecesForCarouselLoading}
                                            onPieceInCarouselPress = {onPieceInCarouselPressHandler}/>
                                    }
                                />
                            </View> 
                        </Animated.View>
                    </View>
                </ImageBackground>
            }
        </View>
    );
}

export default GearSetScreen