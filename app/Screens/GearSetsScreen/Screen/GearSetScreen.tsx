import React, { useEffect, useState } from "react";
import { ImageBackground, View } from "react-native";
import gear_set_screen_styles from "./GearSetScreen.styles";
import shared_styles from "../../../../utills/styles/sharedStyles.styles";
import { ImgPathConsts, pieceTypesClient, rareness } from "../../../../utills/enums";
import { createGearSetPlaceholder, createPiecePlaceholderByType } from "../../../../utills/functions/placeholdersCreationFunctions";
import { gearSet, PieceInSet, RawPiece } from "../../../../utills/types";
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
    const [selectedPiece, setSelectedPiece] = useState<PieceInSet>(createPiecePlaceholderByType(pieceTypesClient.mainHand))
    
    const [allGearSets, setAllGearsSets] = useState<gearSet[]>([])

    const [piecesForCarousel, setPiecesForCarousel] = useState<RawPiece[]>([])
    const [carouselPiecesRareness, setCarouselPiecesRareness] = useState<rareness>(selectedPiece.rareness)


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

                await getAllPiecesByTypeAndRareness(db, selectedPiece?.type, carouselPiecesRareness).then((data: RawPiece[]) => {
                    setPiecesForCarousel(data)
                })
            } catch(e){
                console.error(e)
            }
        }

        getAllPieces().finally(() => setIsPiecesForCarouselLoading(false))
        
    }, [selectedPiece, carouselPiecesRareness])

    function onPieceInGearSetPressHandler(piece: PieceInSet) {
        setSelectedPiece(piece)
    }

    function onChooseRarenessLabelPressHandler(rareness: rareness){
        setCarouselPiecesRareness(rareness)
    }

    function onPieceInSetChangeSaveHandler(newPiece: PieceInSet) {
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
                                            allPiecesArray = {piecesForCarousel}
                                            isPiecesLoading = {isPiecesForCarouselLoading}
                                            carouselPiecesRareness = {carouselPiecesRareness}
                                            onPieceInSetChangeSave = {onPieceInSetChangeSaveHandler}
                                            onChooseRarenessLabelPressHandler = {onChooseRarenessLabelPressHandler}/>
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