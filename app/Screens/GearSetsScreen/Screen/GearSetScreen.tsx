import React, { useCallback, useEffect, useState } from "react";
import { ImageBackground, View } from "react-native";
import gear_set_screen_styles from "./GearSetScreen.styles";
import shared_styles from "../../../../utills/sharedStyles.styles";
import { ImgPathConsts } from "../../../../utills/enums";
import PieceComponent from "../Components/PieceComponent/PieceComponent";
import { gearSetPlaceHolder } from "../../../../utills/consts";
import { gearSet } from "../../../../utills/types";
import { getDBConnection, getALLGearSets } from "../../../../utills/functions/db-service";
import Loader from "../../../../Components/Loader/Loader";
import PieceSet from "../Components/PieceSet/PieceSet";

function GearSetScreen(): React.JSX.Element {

    const [isLoading, setIsloading] = useState<boolean>(false)
    const [currentGearSet, setCurrentGearSet] = useState<gearSet>(gearSetPlaceHolder)
    const [allGearSets, setAllGearsSets] = useState<gearSet[]>([])

    useEffect(() => {
        const getAllSets = async () => {
            try{
                setIsloading(true)

                const db = await getDBConnection()

                await getALLGearSets(db).then((data: gearSet[]) => {
                    setAllGearsSets(data)
                    setCurrentGearSet(data[0])
                }).finally( () => setIsloading(false))
            }
            catch(e){
                console.error(e)
            }
        }
        getAllSets()
    }, [])

    return(
        <View style = {gear_set_screen_styles.wrapper}>
            {
                isLoading ? <Loader/> 
                :
                <ImageBackground style = {shared_styles.background_img} source = {{uri: ImgPathConsts.backgroundImage}}>
                    <View style = {{height: "60%", width: "50%"}}>
                        <PieceSet gearSet = {currentGearSet}/>
                    </View>
                </ImageBackground>
            }
        </View>
    );
}

export default GearSetScreen