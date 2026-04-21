import React, { useCallback, useEffect, useState } from "react";
import { ImageBackground, View } from "react-native";
import dresser_screen from "./DresserScreen.styles";
import { ImgPathConsts, pieceTypes } from "../../../../utills/enums";
import SetOfPieces from "../Components/SetOfPieces/SetOfPieces";
import { getALLGearSets, getDBConnection} from "../../../../utills/functions/db-service";
import Swapper from "../../../../Components/Swapper/Swapper";
import { gearSet, Piece} from "../../../../utills/types";
import ModalComponent from "../../../../Components/ModalComponent/ModalComponent";
import GearSetMenu from "../Components/GearSetMenu.modal/GearSetMenu";
import { gearSetPlaceHolder } from "../../../../utills/consts";
import GearSetTitleChangeComponent from "../Components/GearSetTitleChange.modal/GearSetTitleChangeComponent";
import PieceInfo from "../Components/PieceInfo.modal/PieceInfo";
import GearSetStatsList from "../Components/GearSetStatsList.modal/GearSetStatsList";
import { SafeAreaView } from "react-native-safe-area-context";

function DresserScreen(): React.JSX.Element{

    const [currentGearSet, setCurrentGearSet] = useState<gearSet>(gearSetPlaceHolder)
    const [allGearSets, setAllGearsSets] = useState<gearSet[]>([])
    const [gearSetCount, setGearSetCount] = useState<number>(allGearSets.length)

    const [isPieceInfoModalActive, setIsPieceInfoModalActive] = useState<boolean>(false)
    const [isPieceInfoInnerModalActive, setIsPieceInfoInnerModalActive] = useState<boolean>(false)

    const [isMenuModalActive, setIsMenuModalActive] = useState<boolean>(false)
    const [isChangeTitleModalVisible, setIsChangeTitleModalVisible] = useState<boolean>(false)
    const [isGearSetStatsListModalActive, setIsGearSetStatsListModalActive] = useState<boolean>(false)

    const [currentPieceSelected, setCurrentPieceSelected] = useState<Piece | undefined>()
    const [selectedPieceType, setSelectedPieceType] = useState<pieceTypes>(pieceTypes.mainHand)

    const onGearSetSwap = (id: number): void => {
        setCurrentGearSet(allGearSets[id])
    }

    function onPieceSelected(piece: Piece | undefined, pieceType: pieceTypes): void {
        setIsPieceInfoModalActive(!isPieceInfoModalActive)
        setCurrentPieceSelected(piece)
        setSelectedPieceType(pieceType)
    }

    function onMenuClicked(): void {
        setIsMenuModalActive(!isMenuModalActive)
    }

    function onTitleClicked(): void {
        setIsChangeTitleModalVisible(!isChangeTitleModalVisible)
    }

    function onQuestionMarkClicked(): void {
        setIsGearSetStatsListModalActive(!isGearSetStatsListModalActive)
    }

    function onGearSetCreate(): void{
        setGearSetCount(gearSetCount + 1)
    }

    const loadGearSetsCallback = useCallback(async () => {
        try{
            const db = await getDBConnection()
            await getALLGearSets(db).then((data: gearSet[]) =>{
                setAllGearsSets(data)
                setCurrentGearSet(data[0])
            })
        }
        catch(e){
            console.error(e)
        }
    }, [])

    useEffect(() => {
        loadGearSetsCallback()
    }, [loadGearSetsCallback, gearSetCount])

    useEffect(() => { // update all gear sets after updating current gear set
        let newGearSets: gearSet[] = []
        allGearSets.forEach((gearSet) => {
            if(currentGearSet.id === gearSet.id)
                newGearSets.push(currentGearSet)
            else
                newGearSets.push(gearSet)
        })

        setAllGearsSets(newGearSets)
    }, [currentGearSet])
    
    return(
                <ImageBackground style = {dresser_screen.backgroundImg} source = {{uri: ImgPathConsts.backgroundImage}} resizeMode = "cover">
                    <View style = {dresser_screen.wrapper}>
                        <ModalComponent visible = {isPieceInfoModalActive} setVisible = {setIsPieceInfoModalActive} children = {
                            <PieceInfo gearSetSelected = {currentGearSet} 
                                isOuterModalVisible = {isPieceInfoModalActive} pieceType = {selectedPieceType}
                                setInnerModalVisible = {setIsPieceInfoInnerModalActive} setGearSet = {setCurrentGearSet}/>
                        } isInnerModalActive = {isPieceInfoInnerModalActive}/>


                        <ModalComponent visible = {isMenuModalActive} setVisible = {setIsMenuModalActive} children={
                            <GearSetMenu gearSet = {currentGearSet} allGearSets = {allGearSets}
                                changeGearSetsCount = {onGearSetCreate}/>
                        }/>

                        <ModalComponent visible = {isChangeTitleModalVisible} setVisible = {setIsChangeTitleModalVisible} 
                            children = {
                                <GearSetTitleChangeComponent gearSet = {currentGearSet} setGearSet = {setCurrentGearSet}/>
                        }/>

                        <ModalComponent visible = {isGearSetStatsListModalActive} setVisible = {setIsGearSetStatsListModalActive}
                            children = {
                                <GearSetStatsList gearSet = {currentGearSet}/>
                        }/>
                        
                        <Swapper centerComponent = {
                            <SetOfPieces gearSet = {currentGearSet} title =  {currentGearSet?.title} 
                                onPieceSelected = {onPieceSelected} onMenuClicked = {onMenuClicked} onTitleClicked = {onTitleClicked}
                                onQuestionMarkClicked = {onQuestionMarkClicked}/>
                        }       componentsCount = {allGearSets.length} childToParent = {onGearSetSwap}/>
                    </View>   
                </ImageBackground>
    );
}

export default DresserScreen