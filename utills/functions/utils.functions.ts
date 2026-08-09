import { ImgPathConsts, pieceTypesClient, pieceTypesDb } from "../enums";
import { gearSet, PieceInSet, RawPiece } from "../types";

export function convertPieceTypesClientsToPieceTypesDb(pieceType: pieceTypesClient | pieceTypesDb): pieceTypesDb{
    switch(pieceType){
        case(pieceTypesClient.mainHand): return pieceTypesDb.mainHand
        case(pieceTypesClient.helmet): return pieceTypesDb.helmet
        case(pieceTypesClient.plate): return pieceTypesDb.plate
        case(pieceTypesClient.boots): return pieceTypesDb.boots
        case(pieceTypesClient.secondHand): return pieceTypesDb.secondHand
        case(pieceTypesClient.accessory1): return pieceTypesDb.accessory
        case(pieceTypesClient.accessory2): return pieceTypesDb.accessory
        case(pieceTypesClient.accessory3): return pieceTypesDb.accessory
        default: return pieceTypesDb.mainHand
    }
}

export function convertRawPieceToPieceInSet(piece: RawPiece | undefined, type: pieceTypesClient): PieceInSet | undefined{
    if(!piece) return undefined
    return {
        ...piece,
        type: type,
    }
}

export function changePieceInGearSet(gearSet: gearSet, piece: PieceInSet): gearSet{
    switch(piece.type){
        case pieceTypesClient.mainHand : return {...gearSet, mainHand: piece}
        case pieceTypesClient.helmet : return {...gearSet, helmet: piece}
        case pieceTypesClient.plate : return {...gearSet, plate: piece}
        case pieceTypesClient.boots : return {...gearSet, boots: piece}
        case pieceTypesClient.secondHand : return {...gearSet, secondHand: piece}
        case pieceTypesClient.accessory1 : return {...gearSet, accessory1: piece}
        case pieceTypesClient.accessory2 : return {...gearSet, accessory2: piece}
        case pieceTypesClient.accessory3 : return {...gearSet, accessory3: piece}
        default: return {...gearSet, mainHand: piece}
    }
}

export function choosePieceImageByType(pieceType: pieceTypesClient): string{
    switch(pieceType){
        case pieceTypesClient.mainHand : return ImgPathConsts.mainHandPlaceholderImage
        case pieceTypesClient.helmet : return ImgPathConsts.helmetPlaceholderImage
        case pieceTypesClient.plate : return ImgPathConsts.platePlaceholderImage
        case pieceTypesClient.boots : return ImgPathConsts.bootsPlaceholderImage
        case pieceTypesClient.secondHand : return ImgPathConsts.secondHandPlaceholderImage
        case pieceTypesClient.accessory1 : return ImgPathConsts.accesoryPlaceholderImage
        case pieceTypesClient.accessory2 : return ImgPathConsts.accesoryPlaceholderImage
        case pieceTypesClient.accessory3 : return ImgPathConsts.accesoryPlaceholderImage
        default: return ImgPathConsts.mainHandPlaceholderImage
    }
}