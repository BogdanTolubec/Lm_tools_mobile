import { ImgPathConsts, pieceTypes, rareness } from "../enums"
import { gearSet, jewel, Piece } from "../types"

const mainHandPlaceholder: Piece = {
    piece_id: 1,
    name: "placeholder",
    rareness: rareness.common,
    type: pieceTypes.mainHand,
    tempernessLevel: 0,
    imagePath: ImgPathConsts.piecePlaceholderImage,
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
const helmetPlaceholder: Piece = {
    piece_id: 18,
    name: "placeholder",
    rareness: rareness.common,
    type: pieceTypes.helmet,
    tempernessLevel: 0,
    imagePath: ImgPathConsts.piecePlaceholderImage,
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
const platePlaceholder: Piece = {
    piece_id: 32,
    name: "placeholder",
    rareness: rareness.common,
    type: pieceTypes.plate,
    tempernessLevel: 0,
    imagePath: ImgPathConsts.piecePlaceholderImage,
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
const bootsPlaceholder: Piece = {
    piece_id: 46,
    name: "placeholder",
    rareness: rareness.common,
    type: pieceTypes.boots,
    tempernessLevel: 0,
    imagePath: ImgPathConsts.piecePlaceholderImage,
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
const secondHandPlaceholder: Piece = {
    piece_id: 63,
    name: "placeholder",
    rareness: rareness.common,
    type: pieceTypes.secondHand,
    tempernessLevel: 0,
    imagePath: ImgPathConsts.piecePlaceholderImage,
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
const accesorry1Placeholder: Piece = {
    piece_id: 78,
    name: "placeholder",
    rareness: rareness.common,
    type: pieceTypes.accessory1,
    tempernessLevel: 0,
    imagePath: ImgPathConsts.piecePlaceholderImage,
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
const accesorry2Placeholder: Piece = {
    piece_id: 78,
    name: "placeholder",
    rareness: rareness.common,
    type: pieceTypes.accessory2,
    tempernessLevel: 0,
    imagePath: ImgPathConsts.piecePlaceholderImage,
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
const accesorry3Placeholder: Piece = {
    piece_id: 78,
    name: "placeholder",
    rareness: rareness.common,
    type: pieceTypes.accessory3,
    tempernessLevel: 0,
    imagePath: ImgPathConsts.piecePlaceholderImage,
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

export function createPiecePlaceholderByType(type: pieceTypes): Piece{
    switch(type){
        case pieceTypes.mainHand: return mainHandPlaceholder

        case pieceTypes.helmet: return helmetPlaceholder

        case pieceTypes.plate: return platePlaceholder

        case pieceTypes.boots: return bootsPlaceholder

        case pieceTypes.secondHand: return secondHandPlaceholder

        case pieceTypes.accessory1: return accesorry1Placeholder

        case pieceTypes.accessory2: return accesorry2Placeholder

        case pieceTypes.accessory3: return accesorry3Placeholder

        default: return mainHandPlaceholder
    }
}

export function createJewelsOfPiecePlaceholder(): (jewel | undefined)[]{
    return [undefined, undefined, undefined]
}