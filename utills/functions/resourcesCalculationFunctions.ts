import { trainingCalculatorMode } from "../../app/Screens/TrainingCalculatorScreen/Components/ModeSwitch/ModeSwitch"
import { calculationDataT1, calculationDataT2, calculationDataT3, calculationDataT4 } from "../consts"

import { armyTiers, armyTypes } from "../enums"
import { calculationData } from "../types"
import { daysToSeconds } from "./timeConvertFunctions"

export enum  resultCardsTypes {
    food = "food",
    stone = "stone",
    wood = "wood",
    ore = "ore",
    gold = "gold",
    trainingTime = "trainingTime",
    armyCount = "armyCount",
}

export type trainingCalculationParams = {
  speedUpsCountInDays?: number,
  armyCount?: number,
  trainingSpeed: number,
  subsidy: number,
  armyType: armyTypes,
  tier: armyTiers,
}

const tierDataArray: Record<armyTiers, calculationData> = {
  [armyTiers.tier1]: calculationDataT1,
  [armyTiers.tier2]: calculationDataT2,
  [armyTiers.tier3]: calculationDataT3,
  [armyTiers.tier4]: calculationDataT4,
}

function createEmptyResults(mode: trainingCalculatorMode): Record<string, number> {
  if(mode === trainingCalculatorMode.armyCount)
    return {
      [resultCardsTypes.food]: 0,
      [resultCardsTypes.stone]: 0,
      [resultCardsTypes.wood]: 0,
      [resultCardsTypes.ore]: 0,
      [resultCardsTypes.gold]: 0,
      [resultCardsTypes.trainingTime]: 0,
    }

  else
    return{
      [resultCardsTypes.food]: 0,
      [resultCardsTypes.stone]: 0,
      [resultCardsTypes.wood]: 0,
      [resultCardsTypes.ore]: 0,
      [resultCardsTypes.gold]: 0,
      "armyCount": 0,
  }
}

function getArmyTypeRss(data: calculationData, armyType: armyTypes): number[] {
  switch (armyType) {
    case armyTypes.infantry:
      return data.infantryRss;
    case armyTypes.ranged:
      return data.rangedRss;
    case armyTypes.cavalry:
      return data.cavalryRss;
    case armyTypes.siege:
      return data.siegeRss;
    default:
      return data.infantryRss;
  }
}

export function validateTrainingCalculationParams( {trainingSpeed, subsidy, armyCount, speedUpsCountInDays}: 
  trainingCalculationParams): string | null {

  if (armyCount && armyCount < 0) return "Army count must be a positive value"
  if(speedUpsCountInDays && speedUpsCountInDays < 0) "Speed ups count must be a positive value"
  if (trainingSpeed < 0) return "Training speed must be more than 0"
  if (subsidy < 0 || subsidy > 40) return "Subsidy must be between 0 and 40"

  return null
}

export function calculateTrainingResultsByArmyCount( {armyCount, trainingSpeed, subsidy, armyType, tier, }: trainingCalculationParams
    , mode: trainingCalculatorMode) : Record<string, number> {
    
    if(!armyCount || !trainingSpeed || !subsidy || !armyType || !tier) return createEmptyResults(mode)

    const selectedTierData: calculationData = tierDataArray[tier]
    const armyTypeRss: number[] = getArmyTypeRss(selectedTierData, armyType)
    const subsidyMultiplier: number = 1 - subsidy / 100

    const results = createEmptyResults(mode)

    results[resultCardsTypes.food] = armyCount * armyTypeRss[0] * subsidyMultiplier
    results[resultCardsTypes.stone] = armyCount * armyTypeRss[1] * subsidyMultiplier
    results[resultCardsTypes.wood] = armyCount * armyTypeRss[2] * subsidyMultiplier
    results[resultCardsTypes.ore] = armyCount * armyTypeRss[3] * subsidyMultiplier
    results[resultCardsTypes.gold] = armyCount * armyTypeRss[4] * subsidyMultiplier
    results[resultCardsTypes.trainingTime] = (armyCount * selectedTierData.secondsTrainingSpeed) / (1 + trainingSpeed / 100)

    return results
}

export function calculateTrainingResultsBySpeedUps( {speedUpsCountInDays, trainingSpeed, subsidy, armyType, tier }: trainingCalculationParams,
    mode: trainingCalculatorMode) : Record<string, number> {
    
    if(!speedUpsCountInDays || !trainingSpeed || !subsidy || !armyType || !tier) return createEmptyResults(mode)

    const selectedTierData: calculationData = tierDataArray[tier]
    const armyTypeRss: number[] = getArmyTypeRss(selectedTierData, armyType)
    const subsidyMultiplier: number = 1 - subsidy / 100
    const armyCount: number = daysToSeconds(speedUpsCountInDays) / selectedTierData.secondsTrainingSpeed * (1 + trainingSpeed / 100)
    console.log("army count: " + armyCount)

    const results = createEmptyResults(mode)

    results[resultCardsTypes.food] = armyCount * armyTypeRss[0] * subsidyMultiplier
    results[resultCardsTypes.stone] = armyCount * armyTypeRss[1] * subsidyMultiplier
    results[resultCardsTypes.wood] = armyCount * armyTypeRss[2] * subsidyMultiplier
    results[resultCardsTypes.ore] = armyCount * armyTypeRss[3] * subsidyMultiplier
    results[resultCardsTypes.gold] = armyCount * armyTypeRss[4] * subsidyMultiplier
    results[resultCardsTypes.armyCount] = armyCount

    return results
}