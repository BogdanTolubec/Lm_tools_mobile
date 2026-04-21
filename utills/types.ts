import { pieceTypes, rareness } from "./enums"

export type Piece = {
    piece_id: number,
    name: string,

    rareness: rareness,
    tempernessLevel: number,

    type: pieceTypes,
    imagePath: string,

    jewels: Array<jewel | undefined>,

    stats: stats,
}

export type stats = {
    armyAtk: number | null,
    armyHp: number | null,
    armyDeff: number | null,

    infantryAtk: number | null,
    infantryHp: number | null,
    infantryDeff: number | null,
    
    rangedAtk: number | null,
    rangedHp: number | null,
    rangedDeff: number | null,

    cavalryAtk: number | null,
    cavalryHp: number | null,
    cavalryDeff: number | null,
}

export type gearSet = {
    id: number,
    title: string | null,
    mainHand: Piece | undefined,
    helmet: Piece | undefined,
    plate: Piece | undefined,
    boots: Piece | undefined,
    secondHand: Piece | undefined,
    accessory1: Piece | undefined,
    accessory2: Piece | undefined,
    accessory3: Piece | undefined,
}

export type jewel = {
    jewel_id: number,
    name: string,
    rareness: rareness,
    imagePath: string,
    stats: stats,
}

export type calculationData = {
    infantryRss: number[],
    rangedRss: number[],
    cavalryRss: number[],
    siegeRss: number[],

    secondsTrainingSpeed: number,
}

export type statsShowInfo = {
    text: string,
    stat: number
}