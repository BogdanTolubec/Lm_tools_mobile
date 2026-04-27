import React from "react"
import { Alert, View } from "react-native";
import ElevatedButton from "../../../../../Components/ElevatedButton/ElevatedButton";
import { createGearSet, deleteGearSetById, getDBConnection } from "../../../../../utills/functions/db-service";
import gear_set_menu from "./GearSetMenu.styles";
import { gearSet} from "../../../../../utills/types";
import { colors } from "../../../../../utills/sharedStyles.styles";

type Props = {
    gearSet: gearSet,
    allGearSets: gearSet[],
    changeGearSetsCount: () => void,
}

function GearSetMenu({gearSet, allGearSets, changeGearSetsCount}: Props): React.JSX.Element {

    const onCreateGearSet = async (): Promise<void> => {
        try{
            const db = await getDBConnection() 
            const result = await createGearSet(db)

            changeGearSetsCount()

            if(!result){
                Alert.alert("Cannot create new gear set...")
            }
        }
        catch(e){
            console.log(e)
        }
    }

    const onDeleteGearSet = async (): Promise<void> => {
        try{
            if(allGearSets.length > 1){
                const db = await getDBConnection() 
                const result = await deleteGearSetById(db, gearSet.id)
    
                changeGearSetsCount()
            
                if(!result){
                    Alert.alert("Cannot delete gear set...")
                }
            }

            else Alert.alert("At least one gear set should be avialble")
        }
        catch(e){
            console.log(e)
        }
    }

    return(
        <View style = {gear_set_menu.wrapper}>
            <View style = {gear_set_menu.buttons_wrapper}>

                <View style = {gear_set_menu.button_wrapper}>
                    <ElevatedButton title = "Add new gear set" onPress = {() => {onCreateGearSet()}} colors = {[colors.bgPrimary, colors.surfaceRaised]}/>
                </View>

                <View style = {gear_set_menu.button_wrapper}>
                    <ElevatedButton title = "Delete current gear set" onPress = {() => {onDeleteGearSet()}} colors = {[colors.bgPrimary, colors.surfaceRaised]}/>
                </View>
                
            </View>
        </View>
    );
}

export default GearSetMenu