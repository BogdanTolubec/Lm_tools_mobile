import { statsObject, tempernessStatsAddByLevels } from "../consts";
import { gearSet, jewel, Piece, stats, statsShowInfo } from "../types";

export function calculateGearSetStats(gearSet: gearSet | undefined): stats{

    let calculatedStats: stats = {
        armyAtk: 0,
        armyHp: 0,
        armyDeff: 0,

        infantryAtk: 0,
        infantryHp: 0,
        infantryDeff: 0,
        
        rangedAtk: 0,
        rangedHp: 0,
        rangedDeff: 0,

        cavalryAtk: 0,
        cavalryHp: 0,
        cavalryDeff: 0,
    }

    if(!gearSet)
        return calculatedStats

    const allPieces: Array<Piece | undefined> = [gearSet.mainHand, gearSet.helmet, gearSet.plate, gearSet.boots,
        gearSet.secondHand, gearSet.accessory1, gearSet.accessory2, gearSet.accessory3] // to avoid id and title props

    allPieces.forEach((piece) => {
        calculatedStats = addStats(calculatedStats, calculatePieceAndJewelsStats(piece?.stats, piece?.jewels)) // adding stats one by one by each piece in set
    })

    return calculatedStats
}

function addStats(stats1: stats | undefined, stats2: stats | undefined): stats{ //adds to objects type 'stats' and returns a new object type 'stats'
    
    if(!stats1 && stats2)
        return stats2

    else if(!stats2 && stats1)
        return stats1

    else if(stats1 && stats2){
        return {
            armyAtk: (stats1.armyAtk ? stats1.armyAtk : 0) + (stats2.armyAtk ? stats2.armyAtk : 0),
            armyHp: (stats1.armyHp ? stats1.armyHp : 0) + (stats2.armyHp ? stats2.armyHp : 0),
            armyDeff: (stats1.armyDeff ? stats1.armyDeff : 0) + (stats2.armyDeff ? stats2.armyDeff : 0),

            infantryAtk: (stats1.infantryAtk ? stats1.infantryAtk : 0) + (stats2.infantryAtk ? stats2.infantryAtk : 0),
            infantryHp: (stats1.infantryHp ? stats1.infantryHp : 0) + (stats2.infantryHp ? stats2.infantryHp : 0),
            infantryDeff: (stats1.infantryDeff ? stats1.infantryDeff : 0) + (stats2.infantryDeff ? stats2.infantryDeff : 0),
            
            rangedAtk: (stats1.rangedAtk ? stats1.rangedAtk : 0) + (stats2.rangedAtk ? stats2.rangedAtk : 0),
            rangedHp: (stats1.rangedHp ? stats1.rangedHp: 0) + (stats2.rangedHp ? stats2.rangedHp : 0),
            rangedDeff: (stats1.rangedDeff ? stats1.rangedDeff : 0) + (stats2.rangedDeff ? stats2.rangedDeff: 0),

            cavalryAtk: (stats1.cavalryAtk ? stats1.cavalryAtk : 0) + (stats2.cavalryAtk ? stats2.cavalryAtk : 0),
            cavalryHp: (stats1.cavalryHp ? stats1.cavalryHp : 0) + (stats2.cavalryHp ? stats2.cavalryHp : 0),
            cavalryDeff: (stats1.cavalryDeff ? stats1.cavalryDeff : 0) + (stats2.cavalryDeff ? stats2.cavalryDeff : 0),
        }
    }

    else
    return {
        armyAtk: 0,
        armyHp: 0,
        armyDeff: 0,

        infantryAtk: 0,
        infantryHp: 0,
        infantryDeff: 0,
        
        rangedAtk: 0,
        rangedHp: 0,
        rangedDeff: 0,

        cavalryAtk: 0,
        cavalryHp: 0,
        cavalryDeff: 0,
    }
}

export function convertStatsIntoStatsShowInfo(stat: stats | undefined): statsShowInfo[]{ // converts in format for ui
    if(!stat) return statsObject

    const statsAsArray: [string, number | null][] = Object.entries(stat) // statsAsArray[number of stat][0 is text, 1 is stat]

    statsAsArray.sort((a, b) => {

        if(a[0] > b[0]) return 1

        if(a[0] < b[0]) return -1

        else return 0
    })

    const statsShowInfoResult: statsShowInfo[] = statsObject.sort((a, b) => {

            if(a.text > b.text) return 1

            if(a.text < b.text) return -1

            else return 0
    })

    for(let i = 0; i < statsShowInfoResult.length; i++){
        statsShowInfoResult[i].stat = (statsAsArray[i][1] || 0)
    }

    return statsShowInfoResult
}

export function calculatePieceAndJewelsStats(pieceStats: stats | undefined, jewels: Array<jewel | undefined> | undefined): stats { //calculates stats by piece and it's jewels
    let calculatedStats: stats = {
        armyAtk: 0,
        armyHp: 0,
        armyDeff: 0,

        infantryAtk: 0,
        infantryHp: 0,
        infantryDeff: 0,
        
        rangedAtk: 0,
        rangedHp: 0,
        rangedDeff: 0,

        cavalryAtk: 0,
        cavalryHp: 0,
        cavalryDeff: 0,
    }

    if(pieceStats){
        calculatedStats = addStats(calculatedStats, pieceStats)
        
        if(jewels){
            for(let i = 0; i < jewels.length; i++){
                if(jewels[i]){
                    calculatedStats = addStats(calculatedStats, jewels[i]?.stats)
                }
            }
        }
    }

    return calculatedStats
}

export function calculateTempernesStatsByLevel(pieceStats: stats, tempernessLevel: number): stats{
    let keyOfPieceStats: keyof typeof pieceStats
    let newPieceStats: stats = {
        armyAtk: 0,
        armyHp: 0,
        armyDeff: 0,
    
        infantryAtk: 0,
        infantryHp: 0,
        infantryDeff: 0,
        
        rangedAtk: 0,
        rangedHp: 0,
        rangedDeff: 0,
    
        cavalryAtk: 0,
        cavalryHp: 0,
        cavalryDeff: 0,
    }

    for(keyOfPieceStats in pieceStats){
        if(pieceStats[keyOfPieceStats] !== null){
            newPieceStats[keyOfPieceStats] = Number((Math.round(
                Number(pieceStats[keyOfPieceStats]) * (1 + tempernessStatsAddByLevels[tempernessLevel - 1])
                    * 100) / 100).toFixed(2)) 
        }
    }

    return newPieceStats
}