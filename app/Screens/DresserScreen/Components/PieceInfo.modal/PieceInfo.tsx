import React, { useEffect, useState } from "react"
import { View } from "react-native"
import piece_info from "./PieceInfo.styles"
import { IconPathConsts, pieceTypes, rareness } from "../../../../../utills/enums"
import { gearSet,  jewel,  Piece } from "../../../../../utills/types"
import PieceOfSet from "../Piece/Piece"
import StatsList from "../StatsList/StatsList"
import Jewel from "../Jewel/Jewel"
import ModalComponent from "../../../../../Components/ModalComponent/ModalComponent"
import ItemsSelector from "../ItemsSelector.modal/ItemsSelector"
import { getAllJewelsByRareness, getAllPiecesByTypeAndRareness, getDBConnection } from "../../../../../utills/functions/db-service"
import PieceInList from "../PieceInSelectorList/PieceInSelectorList"
import JewelInList from "../JewelInSelectorList/JewelInSelectorList"
import { calculatePieceAndJewelsStats, calculateTempernesStatsByLevel } from "../../../../../utills/functions/statsCalculation.functions"
import ImageInWrapper from "../../../../../Components/ImageInWrapper/ImageInWrapper"
import NumericInput from "../../../../../Components/NumericInput/NumericInput"
import { tempernessLevelsNumber } from "../../../../../utills/consts"
import SubmitButton from "../../../../../Components/SubmitButton/SubmitButton"

type Props = {
    pieceType: pieceTypes,

    gearSetSelected: gearSet,
    isOuterModalVisible: boolean,

    setInnerModalVisible: React.Dispatch<React.SetStateAction<boolean>>,
    setGearSet: React.Dispatch<React.SetStateAction<gearSet>>,
}

function PieceInfo({pieceType, gearSetSelected, isOuterModalVisible, setInnerModalVisible, setGearSet}: Props): React.JSX.Element {

    const [isItemSelectorModalActive, setIsItemSelectorModalActive] = useState<boolean>(false)

    const [pieceToChange, setPieceToChange] = useState<Piece | undefined>()
    const [jewelSelected, setJewelSelected] = useState<jewel | undefined>(undefined)
    const [selectedJewelInPieceId, setSelectedJewelsInPieceId] = useState<number>(0)

    const [itemsList, setItemsList] = useState<React.JSX.Element[] | React.JSX.Element>(<></>)
    const [rarenessData, setRarenessData] = useState<Array<{rareness: rareness, iconPath: string}>>([])

    const [currentItemType, setCurrentItemType] = useState<"piece" | "jewel">("piece")

    const [tempernessLevel, setTempernessLevel] = useState<number>(0)

    function onPieceSelection(): void{
        setRarenessData([
                {rareness: rareness.common, iconPath: IconPathConsts.commonChooseLableIcon}, 
                {rareness: rareness.uncommon, iconPath: IconPathConsts.uncommonChooseLableIcon}, 
                {rareness: rareness.rare, iconPath: IconPathConsts.rareChooseLableIcon}, 
                {rareness: rareness.epic, iconPath: IconPathConsts.epicChooseLableIcon}, 
                {rareness: rareness.legendary, iconPath: IconPathConsts.legendaryChooseLableIcon},
                {rareness: rareness.mythic, iconPath: IconPathConsts.mythicChooseLableIcon}]
        )
        
        setCurrentItemType("piece")
        onChooseRarenessLabelPress("piece", pieceToChange?.rareness || rareness.common, pieceToChange, undefined, pieceType, undefined )  // undefined is important :)
        setIsItemSelectorModalActive(!isItemSelectorModalActive)
    }

    function onJewelSelection(jewel: jewel | undefined, jewelInPieceId: number): void{
            setJewelSelected(jewel) //selected jewel save
            setSelectedJewelsInPieceId(jewelInPieceId)

            setRarenessData([
                {rareness: rareness.common, iconPath: IconPathConsts.commonChooseLableIcon}, 
                {rareness: rareness.uncommon, iconPath: IconPathConsts.uncommonChooseLableIcon}, 
                {rareness: rareness.rare, iconPath: IconPathConsts.rareChooseLableIcon}, 
                {rareness: rareness.epic, iconPath: IconPathConsts.epicChooseLableIcon}, 
                {rareness: rareness.legendary, iconPath: IconPathConsts.legendaryChooseLableIcon}]
            ) // rareness for choose labels

            setCurrentItemType("jewel")
            onChooseRarenessLabelPress("jewel", jewel?.rareness || rareness.common, pieceToChange, jewelInPieceId, undefined, jewel) // undefined in the end is important :)
            setIsItemSelectorModalActive(!isItemSelectorModalActive)
    }

    function onTempernessLevelSelection(): void {
        if(gearSetSelected && pieceToChange){
            let keyOfUpdatedGearSet: keyof typeof gearSetSelected
            let updatedGearSet: gearSet = {
                ...gearSetSelected
            }
            let updatedPiece: Piece | undefined

            for(keyOfUpdatedGearSet in updatedGearSet){
                if(!updatedGearSet[keyOfUpdatedGearSet]) continue

                if(pieceType === keyOfUpdatedGearSet && pieceToChange){
                    updatedPiece = {
                        ...pieceToChange,
                        tempernessLevel: tempernessLevel,
                    }
                    updatedGearSet[keyOfUpdatedGearSet] = updatedPiece
                    setPieceToChange(updatedPiece)
                    setGearSet(updatedGearSet)
                    break
                }
            }
        }
    }

    function onPieceInListPress(selectedPiece: Piece | undefined): void {
        setPieceToChange(selectedPiece)
    }

    async function getPiecesList(pieceType: pieceTypes, currentRarenessSelected: rareness): Promise<Piece[]> {
        try{
            const db = await getDBConnection()
            return await getAllPiecesByTypeAndRareness(db, pieceType, currentRarenessSelected)

        } catch(e){
            console.log("On piece in PieceInfo selection error: " + JSON.stringify(e))
            return []
        }
    }

    async function getJewelsList(currentRarenessSelected: rareness, jewelSelected: jewel | undefined): Promise<jewel[]> {
        try{
            const db = await getDBConnection()

            const allJewelsList: jewel[] = await getAllJewelsByRareness(db, currentRarenessSelected)
            let jewelsFiltredList: jewel[] = []
            const pieceJewelsId: Array<number | undefined> = [pieceToChange?.jewels[0]?.jewel_id, 
            pieceToChange?.jewels[1]?.jewel_id, pieceToChange?.jewels[2]?.jewel_id]

            for (let i = 0; i < allJewelsList.length; i++) {
                if(!pieceJewelsId.includes(allJewelsList[i].jewel_id) || allJewelsList[i].jewel_id === jewelSelected?.jewel_id){
                    jewelsFiltredList.push(allJewelsList[i])
                }
            }

            return jewelsFiltredList

        } catch(e){
            console.log("On jewel in PieceInfo selection error: " + JSON.stringify(e))
            return []
        }
    }

    async function onChooseRarenessLabelPress(itemType: "piece" | "jewel", currentRareness: rareness, 
        pieceSelected: Piece | undefined, selectedJewelInPieceId?: number,
        pieceType?: pieceTypes, jewelSelected?: jewel | undefined ): Promise<void>{

        if(itemType === "piece" && pieceType){
                
            const piecesByTypeAndRareness = await getPiecesList(pieceType, currentRareness)
    
            setItemsList(
                piecesByTypeAndRareness.map((piece, index) => 
                    <PieceInList key = {index} piece = {piece} pieceType = {pieceType} gearSet = {gearSetSelected} 
                        onPress = {onPieceInListPress} setGearSet = {setGearSet}/>
                )
            )
        }

        if(itemType === "jewel" && selectedJewelInPieceId !== undefined){
            try{
                const jewelsByTypeAndRareness = await getJewelsList(currentRareness, jewelSelected)
    
                setItemsList(
                    jewelsByTypeAndRareness.map((listJewel, index) => 
                        <JewelInList key = {index} selectedJewelInPieceId = {selectedJewelInPieceId} piece = {pieceSelected} 
                            listJewel = {listJewel} setGearSet = {setGearSet} setJewelSelected = {setJewelSelected}
                            gearSet = {gearSetSelected}/>
                    )
                )
    
            } catch(e){
                console.log("On jewel in PieceInfo selection error: " + JSON.stringify(e))
            }
        }
    }

    useEffect(() => {
        let keyOfUpdatedGearSet: keyof typeof gearSetSelected
        let updatedGearSet: gearSet = {
            ...gearSetSelected
        }

        for(keyOfUpdatedGearSet in updatedGearSet){
            if(pieceType === keyOfUpdatedGearSet){
                setPieceToChange(updatedGearSet[keyOfUpdatedGearSet])
            }
            
        }
    }, [gearSetSelected, pieceType])

    useEffect(() => {
        if(!isOuterModalVisible) setIsItemSelectorModalActive(false) // close inner modal if outer modal is closed (may be now I don't need it...)

        setInnerModalVisible(isItemSelectorModalActive) // send to dresser screen checking predicat on clothing outer modal
    }, [isItemSelectorModalActive ,isOuterModalVisible])

    return(
        <View style = {piece_info.wrapper}>

            <View style = {piece_info.piece_attributes_wrapper}>

                <View style = {piece_info.gear_and_jewels_row}>

                    <View style = {piece_info.piece_img_wrapper}>
                        <PieceOfSet piece = { pieceToChange } 
                            onPress = {() => {onPieceSelection()}}/>
                    </View>
            
                    <View style = {piece_info.jewels_wrapper}>
                        {
                            pieceToChange?.jewels.map((jewel, index) => 
                                {
                                    return(
                                        <View key = { index } style = {piece_info.jewel_wrapper}>
                                            <Jewel jewel = {jewel} onPress = {
                                                    () => {onJewelSelection(jewel, index)}
                                                }/>
                                        </View>
                                    )
                                }
                            )
                        }
                    </View>

                </View>
                
                {   
                    (pieceToChange?.rareness === rareness.tempered || pieceToChange?.rareness === rareness.mythic) ?
                        <View style = {piece_info.temper_section_wrapper}>
                            <ImageInWrapper imageSource = {IconPathConsts.temperedIcon} wrapperStyles = {piece_info.temper_icon_wrapper}/>

                            <NumericInput minValue = {0} maxValue = {tempernessLevelsNumber}
                                placeholder = {pieceToChange.tempernessLevel?.toString()} styles = {piece_info.temper_level_input}
                                setParentElementState = {setTempernessLevel}/>
                            
                            <View style = {piece_info.temper_submit_button}>
                                <SubmitButton title = "Set" onPress = {onTempernessLevelSelection}/>
                            </View>
                        </View> :
                    
                    <View style = {piece_info.temper_section_wrapper}/>
                }

            </View>

            <View style = {piece_info.stats_wrapper}>
                <StatsList statsToShow = {
                    (pieceToChange && pieceToChange.tempernessLevel >= 1) ? 
                    calculatePieceAndJewelsStats(
                        calculateTempernesStatsByLevel(pieceToChange.stats, pieceToChange.tempernessLevel), pieceToChange.jewels
                    )
                    : calculatePieceAndJewelsStats(pieceToChange?.stats, pieceToChange?.jewels)
                }/>  
            </View>

            <ModalComponent visible = {isItemSelectorModalActive} setVisible = {setIsItemSelectorModalActive} children={
                <ItemsSelector itemType = {currentItemType} itemsList = {itemsList} rarenessData = {rarenessData} 
                    pieceSelected = {pieceToChange} pieceType = {pieceType} jewelSelected = {jewelSelected} 
                    selectedjewelInPieceId = {selectedJewelInPieceId} onChooseRarenessLabelPress = {onChooseRarenessLabelPress}/>
            }/>   
        </View>
    )
}

export default PieceInfo