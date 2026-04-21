import { ImgPathConsts, rareness } from "../enums";

export function setGearImageBackgroundByRareness(currentRareness: rareness | undefined): string {
    switch (currentRareness){
        case rareness.common: return ImgPathConsts.commonPieceBackgroundImage
        case rareness.uncommon: return ImgPathConsts.uncommonPieceBackgroundImage
        case rareness.rare: return ImgPathConsts.rarePieceBackgroundImage
        case rareness.epic: return ImgPathConsts.epicPieceBackgroundImage
        case rareness.legendary: return ImgPathConsts.legendaryPieceBackgroundImage
        case rareness.mythic: return ImgPathConsts.mythicPieceBackgroundImage
        case rareness.tempered: return ImgPathConsts.mythicPieceBackgroundImage
        default: {return ImgPathConsts.commonPieceBackgroundImage}
    }
}