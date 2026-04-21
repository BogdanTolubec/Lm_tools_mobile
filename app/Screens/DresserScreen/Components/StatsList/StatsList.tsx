import React, { useEffect, useState } from "react"
import { stats, statsShowInfo} from "../../../../../utills/types"
import { Text, View } from "react-native";
import stats_list from "./StatsList.styles";
import shared_styles from "../../../../../utills/sharedStyles.styles";

type Props = {
    statsToShow: stats | undefined,
}

function StatsList({statsToShow}: Props): React.JSX.Element {

    const [listData, setListData] = useState<statsShowInfo[]>([])

    useEffect(() => {  
        setListData([
            {text: "Army atk:", stat: statsToShow?.armyAtk || 0}, 
            {text: "Army hp:", stat: statsToShow?.armyHp || 0},
            {text: "Army deff:", stat: statsToShow?.armyDeff || 0}, 
            {text: "Infantry atk: ", stat: statsToShow?.infantryAtk || 0},
            {text: "Infantry hp: ", stat: statsToShow?.infantryHp || 0}, 
            {text: "Infantry deff: ", stat: statsToShow?.infantryDeff || 0},
            {text: "Ranged atk: ", stat: statsToShow?.rangedAtk || 0}, 
            {text: "Ranged hp: ", stat: statsToShow?.rangedHp || 0},
            {text: "Ranged deff: ", stat: statsToShow?.rangedDeff || 0}, 
            {text: "Cavalry atk: ", stat: statsToShow?.cavalryAtk || 0},
            {text: "Cavalry hp: ", stat: statsToShow?.cavalryHp || 0}, 
            {text:"Cavalry deff: ", stat: statsToShow?.cavalryDeff || 0}
        ])
    }, [statsToShow])

    return(
        <View>
            {
            listData.map((item, index) => {
                if(item.stat !== 0)
                {
                return(
                    <View key = {index} style = {stats_list.stat_wrapper}>
                        <Text style = {shared_styles.stats_text}> {item.text}: </Text>
                        <Text style = {shared_styles.stats_text}>{item.stat}</Text>
                    </View>
                )
                }

                else{
                    return(<View key = {index}></View>)
                }
            })
            }
        </View>
    );
}

export default StatsList