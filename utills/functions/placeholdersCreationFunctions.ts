import { ImgPathConsts, pieceTypesClient, rareness } from "../enums"
import { gearSet, jewel, PieceInSet } from "../types"

const mainHandPlaceholder: PieceInSet = {
    piece_id: 1,
    name: "placeholder",
    rareness: rareness.common,
    type: pieceTypesClient.mainHand,
    tempernessLevel: 0,
    imagePath: ImgPathConsts.mainHandPlaceholderImage,
    jewels: [,,],
    stats: {
        armyAtk: 0,
        armyDeff: 0,
        armyHp: 0,
        infantryAtk: 0,
        infantryDeff: 0,
        infantryHp: 0,
        rangedAtk: 0,
        rangedDeff: 0,
        rangedHp: 0,
        cavalryAtk: 0,
        cavalryDeff: 0,
        cavalryHp: 0,
    }
}
const helmetPlaceholder: PieceInSet = {
    piece_id: 18,
    name: "placeholder",
    rareness: rareness.common,
    type: pieceTypesClient.helmet,
    tempernessLevel: 0,
    imagePath: ImgPathConsts.helmetPlaceholderImage,
    jewels: [,,],
    stats: {
        armyAtk: 0,
        armyDeff: 0,
        armyHp: 0,
        infantryAtk: 0,
        infantryDeff: 0,
        infantryHp: 0,
        rangedAtk: 0,
        rangedDeff: 0,
        rangedHp: 0,
        cavalryAtk: 0,
        cavalryDeff: 0,
        cavalryHp: 0,
    }
}
const platePlaceholder: PieceInSet = {
    piece_id: 32,
    name: "placeholder",
    rareness: rareness.common,
    type: pieceTypesClient.plate,
    tempernessLevel: 0,
    imagePath: ImgPathConsts.platePlaceholderImage,
    jewels: [,,],
    stats: {
        armyAtk: 0,
        armyDeff: 0,
        armyHp: 0,
        infantryAtk: 0,
        infantryDeff: 0,
        infantryHp: 0,
        rangedAtk: 0,
        rangedDeff: 0,
        rangedHp: 0,
        cavalryAtk: 0,
        cavalryDeff: 0,
        cavalryHp: 0,
    }
}
const bootsPlaceholder: PieceInSet = {
    piece_id: 46,
    name: "placeholder",
    rareness: rareness.common,
    type: pieceTypesClient.boots,
    tempernessLevel: 0,
    imagePath: ImgPathConsts.bootsPlaceholderImage,
    jewels: [,,],
    stats: {
        armyAtk: 0,
        armyDeff: 0,
        armyHp: 0,
        infantryAtk: 0,
        infantryDeff: 0,
        infantryHp: 0,
        rangedAtk: 0,
        rangedDeff: 0,
        rangedHp: 0,
        cavalryAtk: 0,
        cavalryDeff: 0,
        cavalryHp: 0,
    }
}
const secondHandPlaceholder: PieceInSet = {
    piece_id: 63,
    name: "placeholder",
    rareness: rareness.common,
    type: pieceTypesClient.secondHand,
    tempernessLevel: 0,
    imagePath: ImgPathConsts.secondHandPlaceholderImage,
    jewels: [,,],
    stats: {
        armyAtk: 0,
        armyDeff: 0,
        armyHp: 0,
        infantryAtk: 0,
        infantryDeff: 0,
        infantryHp: 0,
        rangedAtk: 0,
        rangedDeff: 0,
        rangedHp: 0,
        cavalryAtk: 0,
        cavalryDeff: 0,
        cavalryHp: 0,
    }
}
const accesorry1Placeholder: PieceInSet = {
    piece_id: 78,
    name: "placeholder",
    rareness: rareness.common,
    type: pieceTypesClient.accessory1,
    tempernessLevel: 0,
    imagePath: ImgPathConsts.accesoryPlaceholderImage,
    jewels: [,,],
    stats: {
        armyAtk: 0,
        armyDeff: 0,
        armyHp: 0,
        infantryAtk: 0,
        infantryDeff: 0,
        infantryHp: 0,
        rangedAtk: 0,
        rangedDeff: 0,
        rangedHp: 0,
        cavalryAtk: 0,
        cavalryDeff: 0,
        cavalryHp: 0,
    }
}
const accesorry2Placeholder: PieceInSet = {
    piece_id: 78,
    name: "placeholder",
    rareness: rareness.common,
    type: pieceTypesClient.accessory2,
    tempernessLevel: 0,
    imagePath: ImgPathConsts.accesoryPlaceholderImage,
    jewels: [,,],
    stats: {
        armyAtk: 0,
        armyDeff: 0,
        armyHp: 0,
        infantryAtk: 0,
        infantryDeff: 0,
        infantryHp: 0,
        rangedAtk: 0,
        rangedDeff: 0,
        rangedHp: 0,
        cavalryAtk: 0,
        cavalryDeff: 0,
        cavalryHp: 0,
    }
}
const accesorry3Placeholder: PieceInSet = {
    piece_id: 78,
    name: "placeholder",
    rareness: rareness.common,
    type: pieceTypesClient.accessory3,
    tempernessLevel: 0,
    imagePath: ImgPathConsts.accesoryPlaceholderImage,
    jewels: [,,],
    stats: {
        armyAtk: 0,
        armyDeff: 0,
        armyHp: 0,
        infantryAtk: 0,
        infantryDeff: 0,
        infantryHp: 0,
        rangedAtk: 0,
        rangedDeff: 0,
        rangedHp: 0,
        cavalryAtk: 0,
        cavalryDeff: 0,
        cavalryHp: 0,
    }
}

export function createGearSetPlaceholder(): gearSet {
    return {
        id: 1,
        title: "MIX",
        mainHand: mainHandPlaceholder,
        helmet: helmetPlaceholder,
        plate: platePlaceholder,
        boots: bootsPlaceholder,
        secondHand: secondHandPlaceholder,
        accessory1: accesorry1Placeholder,
        accessory2: accesorry2Placeholder,
        accessory3: accesorry3Placeholder,
    }
}

export function createPiecePlaceholderByType(type: pieceTypesClient): PieceInSet{
    switch(type){
        case pieceTypesClient.mainHand: return mainHandPlaceholder

        case pieceTypesClient.helmet: return helmetPlaceholder

        case pieceTypesClient.plate: return platePlaceholder

        case pieceTypesClient.boots: return bootsPlaceholder

        case pieceTypesClient.secondHand: return secondHandPlaceholder

        case pieceTypesClient.accessory1: return accesorry1Placeholder

        case pieceTypesClient.accessory2: return accesorry2Placeholder

        case pieceTypesClient.accessory3: return accesorry3Placeholder

        default: return mainHandPlaceholder
    }
}

export function createJewelsOfPiecePlaceholder(): (jewel | undefined)[]{
    return [undefined, undefined, undefined]
}