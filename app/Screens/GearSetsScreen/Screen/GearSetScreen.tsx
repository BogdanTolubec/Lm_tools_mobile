import React, { useEffect, useState } from "react";
import { ImageBackground, View } from "react-native";
import gear_set_screen_styles from "./GearSetScreen.styles";
import shared_styles from "../../../../utills/styles/sharedStyles.styles";
import { ImgPathConsts, pieceTypes } from "../../../../utills/enums";
import { createGearSetPlaceholder, createPiecePlaceholderByType } from "../../../../utills/functions/placeholdersCreationFunctions";
import { gearSet, Piece } from "../../../../utills/types";
import { getDBConnection, getALLGearSets, getAllPiecesByTypeAndRareness, updatePieceInGearSetByIdAndType } from "../../../../utills/functions/db-service";
import Loader from "../../../../Components/Loader/Loader";
import PieceSet from "../Components/PieceSet/PieceSet";
import StatsComponent from "../Components/StatsComponent/StatsComponent";
import { calculateGearSetStats } from "../../../../utills/functions/statsCalculation.functions";
import SelectedPieceComponent from "../Components/SelectedPieceComponent/SelectedPieceComponent";
import DualAnimatedComponent from "../Components/DualAnimatedComponents/DualAnimatedComponents";
import { changePieceInGearSet } from "../../../../utills/functions/utils.functions";

function GearSetScreen(): React.JSX.Element {
    const [isGearSetsLoading, setIsGearSetsloading] = useState<boolean>(false)
    const [isPiecesForCarouselLoading, setIsPiecesForCarouselLoading] = useState<boolean>(false)

    const [gearSetSelected, setGearSetSelected] = useState<gearSet>(createGearSetPlaceholder())
    const [selectedPiece, setSelectedPiece] = useState<Piece>(createPiecePlaceholderByType(pieceTypes.mainHand))
    
    const [allGearSets, setAllGearsSets] = useState<gearSet[]>([])
    const [allPiecesAvailable, setAllpiecesAvailable] = useState<Piece[]>([])


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

    function onPieceInGearSetPressHandler(piece: Piece) {
        setSelectedPiece(piece)
    }

    function onPieceInSetChangeSaveHandler(newPiece: Piece) {
        try{
            const updatePiece = async () =>{
                const db = await getDBConnection()

                await updatePieceInGearSetByIdAndType(db, gearSetSelected.id, newPiece)
            }

            updatePiece().then(() => {
                setSelectedPiece(newPiece)
                setGearSetSelected(changePieceInGearSet(gearSetSelected, newPiece))
            })
        } catch(e){
            throw Error("Piece update failed... " + JSON.stringify(e))
        }
    }

    return(
        <View style = {gear_set_screen_styles.wrapper}>
            {
                isGearSetsLoading ? 
                <Loader/>

                :

                <ImageBackground style = {shared_styles.background_img} source = {{uri: ImgPathConsts.backgroundImage}}>
                    <View style = {gear_set_screen_styles.inner_wrapper}>
                        <View style = {gear_set_screen_styles.stats_component_wrapper} >
                            <StatsComponent statsToDisplay = {calculateGearSetStats(gearSetSelected)}/>
                        </View>

                        <View style = {gear_set_screen_styles.piece_set_and_selected_piece_wrapper}>
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
                                            onPieceInSetChangeSave = {onPieceInSetChangeSaveHandler}/>
                                    }
                                />
                            </View> 
                        </View>
                    </View>
                </ImageBackground>
            }
        </View>
    );
}

export default GearSetScreen