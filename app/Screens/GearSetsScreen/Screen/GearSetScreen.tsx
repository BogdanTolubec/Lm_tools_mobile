import React, { useEffect, useState } from "react";
import { ImageBackground, View } from "react-native";
import gear_set_screen_styles from "./GearSetScreen.styles";
import shared_styles from "../../../../utills/styles/sharedStyles.styles";
import { ImgPathConsts, pieceTypesClient, rareness } from "../../../../utills/enums";
import { createGearSetPlaceholder, createJewelPlaceholderByRareness, createJewelsOfPiecePlaceholder, createPiecePlaceholderByType } from "../../../../utills/functions/placeholdersCreationFunctions";
import { gearSet, jewel, PieceInSet, RawPiece } from "../../../../utills/types";
import { getDBConnection, getALLGearSets, getAllPiecesByTypeAndRareness, updatePieceInGearSetByIdAndType, getAllJewelsByRareness } from "../../../../utills/functions/db-service";
import Loader from "../../../../Components/Loader/Loader";
import PieceSet from "../Components/PieceSet/PieceSet";
import StatsComponent from "../Components/StatsComponent/StatsComponent";
import { calculateGearSetStats } from "../../../../utills/functions/statsCalculation.functions";
import SelectedPieceComponent from "../Components/SelectedPieceComponent/SelectedPieceComponent";
import { changePieceInGearSet } from "../../../../utills/functions/utils.functions";
import ItemsCarousel from "../Components/ItemsCarousel/ItemsCarousel";
import JewelsInSelectedPiece from "../Components/JewelsInSelectedPieceComponent/JewelsInSelectedPieceComponent";

function GearSetScreen(): React.JSX.Element {
    //loading consts
    const [isGearSetsLoading, setIsGearSetsloading] = useState<boolean>(false)
    const [isPiecesForCarouselLoading, setIsPiecesForCarouselLoading] = useState<boolean>(false)
    const [isJewelsForCarouselLoading, setIsJewelsForCarouselLoading] = useState<boolean>(false)

    //selected objects consts
    const [gearSetSelected, setGearSetSelected] = useState<gearSet>(createGearSetPlaceholder())
    const [selectedPiece, setSelectedPiece] = useState<PieceInSet>(createPiecePlaceholderByType(pieceTypesClient.mainHand))
    const [selectedJewel, setSelectedJewel] = useState<jewel>(createJewelPlaceholderByRareness(rareness.common))
    
    //some pull from db consts
    const [allGearSets, setAllGearsSets] = useState<gearSet[]>([])
    const [piecesForCarousel, setPiecesForCarousel] = useState<RawPiece[]>([])
    const [jewelsForCarousel, setJewelsForCarousel] = useState<jewel[]>([])

    //carousel rareness consts
    const [carouselPiecesRareness, setCarouselPiecesRareness] = useState<rareness>(selectedPiece.rareness)
    const [carouselJewelsRareness, setCarouselJewelRareness] = useState<rareness>(selectedJewel.rareness)

    const carouselItems: React.JSX.Element[] = [
    <PieceSet
        gearSet = {gearSetSelected} 
        onPiecePress = {(piece) => {
            onPieceInGearSetPressHandler(piece)
    }}/>,

    <SelectedPieceComponent
        selectedPiece = {selectedPiece} 
        allPiecesByTypeArray = {piecesForCarousel}
        isPiecesLoading = {isPiecesForCarouselLoading}
        carouselPiecesRareness = {carouselPiecesRareness}
        onPieceInSetChangeSave = {onPieceInSetChangeSaveHandler}
        onChooseRarenessLabelPressHandler = {onChoosePiecesRarenessLabelPressHandler}
    />,

    <JewelsInSelectedPiece
        currentSelectedjewel = {selectedJewel}
        selectedPieceJewels = {selectedPiece.jewels}
        jewelsForCarousel = {jewelsForCarousel}
        onChooseRarenessLabelPressHandler = {onChooseJewelsRarenesslabelPressHandler}
        onJewelInPiecePressHandler = {onJewelInPiecePressHandler}
        onJewelInCarouselPresshandler = {onJewelInCarouselPressHandler}
    />
    ]

    useEffect(() => { //getting all gear sets from DB
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

    useEffect(() => { //getting all pieces by rareness from DB
        setIsPiecesForCarouselLoading(true)

        const getPiecesForCarousel = async () =>{
            try{
                const db = await getDBConnection()

                await getAllPiecesByTypeAndRareness(db, selectedPiece?.type, carouselPiecesRareness).then((data: RawPiece[]) => {
                    setPiecesForCarousel(data)
                })
            } catch(e){
                console.error(e)
            }
        }

        getPiecesForCarousel().finally(() => setIsPiecesForCarouselLoading(false))
        
    }, [selectedPiece, carouselPiecesRareness])

    useEffect(() => { //getting all jewels by rareness from Db
        setIsJewelsForCarouselLoading(true)

        const getJewelsForCarousel = async () => {
            try{
                const db = await getDBConnection()

                await getAllJewelsByRareness(db, carouselJewelsRareness).then((data: jewel[]) => {
                    setJewelsForCarousel(data)
                })
            } catch(e){
                console.error(e)
            }
        }

        getJewelsForCarousel().finally(() => setIsJewelsForCarouselLoading(false))
    },[selectedJewel, carouselJewelsRareness])

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

    function onPieceInGearSetPressHandler(piece: PieceInSet) {
        setSelectedPiece(piece)
    }

    function onChoosePiecesRarenessLabelPressHandler(rareness: rareness){
        setCarouselPiecesRareness(rareness)
    }

    function onChooseJewelsRarenesslabelPressHandler(rareness: rareness){
        setCarouselJewelRareness(rareness)
    }

    function onJewelInPiecePressHandler(jewel: (jewel | undefined)){
        if(jewel) setSelectedJewel(jewel)
    }

    function onJewelInCarouselPressHandler(newJewelsInPiece: (jewel | undefined)[]){
        if(newJewelsInPiece)
        setSelectedPiece({
            ...selectedPiece,
            jewels: newJewelsInPiece,
        })
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
                            <View style = {{height: "100%", width: "100%"}}>
                                <ItemsCarousel<React.JSX.Element>
                                    itemsArray = {carouselItems}>
                                    {
                                        ({item}) => 
                                            <View style = {{height: "100%", width: "80%"}}>
                                                {item}
                                            </View>
                                    }
                                </ItemsCarousel>
                            </View> 
                        </View>
                    </View>
                </ImageBackground>
            }
        </View>
    );
}

export default GearSetScreen