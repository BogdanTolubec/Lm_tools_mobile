import { pieceTypesDb, pieceTypesClient, rareness } from "./enums"

export type RawPiece = {
    piece_id: number,
    name: string,

    rareness: rareness,
    tempernessLevel: number,

    type: pieceTypesDb,
    imagePath: string,

    jewels: (jewel | undefined)[],

    stats: stats,
}

export type PieceInSet = {
    piece_id: number,
    name: string,

    rareness: rareness,
    tempernessLevel: number,

    type: pieceTypesClient,
    imagePath: string,

    jewels: (jewel | undefined)[],

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
    mainHand: PieceInSet | undefined,
    helmet: PieceInSet | undefined,
    plate: PieceInSet | undefined,
    boots: PieceInSet | undefined,
    secondHand: PieceInSet | undefined,
    accessory1: PieceInSet | undefined,
    accessory2: PieceInSet | undefined,
    accessory3: PieceInSet | undefined,
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