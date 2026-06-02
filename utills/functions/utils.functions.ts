import { ImgPathConsts, pieceTypes } from "../enums";
import { gearSet, Piece } from "../types";

export function changePieceInGearSet(gearSet: gearSet, piece: Piece): gearSet{
    switch(piece.type){
        case pieceTypes.mainHand : return {...gearSet, mainHand: piece}
        case pieceTypes.helmet : return {...gearSet, helmet: piece}
        case pieceTypes.plate : return {...gearSet, plate: piece}
        case pieceTypes.boots : return {...gearSet, boots: piece}
        case pieceTypes.secondHand : return {...gearSet, secondHand: piece}
        case pieceTypes.accessory1 : return {...gearSet, accessory1: piece}
        case pieceTypes.accessory2 : return {...gearSet, accessory2: piece}
        case pieceTypes.accessory3 : return {...gearSet, accessory3: piece}
        default: return {...gearSet, mainHand: piece}
    }
}

export function choosePieceImageByType(pieceType: pieceTypes): string{
    switch(pieceType){
        case pieceTypes.mainHand : return ImgPathConsts.mainHandPlaceholderImage
        case pieceTypes.helmet : return ImgPathConsts.helmetPlaceholderImage
        case pieceTypes.plate : return ImgPathConsts.platePlaceholderImage
        case pieceTypes.boots : return ImgPathConsts.bootsPlaceholderImage
        case pieceTypes.secondHand : return ImgPathConsts.secondHandPlaceholderImage
        case pieceTypes.accessory1 : return ImgPathConsts.accesoryPlaceholderImage
        case pieceTypes.accessory2 : return ImgPathConsts.accesoryPlaceholderImage
        case pieceTypes.accessory3 : return ImgPathConsts.accesoryPlaceholderImage
        default: return ImgPathConsts.mainHandPlaceholderImage
    }
}