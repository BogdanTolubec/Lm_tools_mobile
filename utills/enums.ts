import React from "react";

export enum ScreensEnum {
    home = "HomeScreen",
    trainingCalculator = "TrainingCalculatorScreen",
    dresser = "DresserScreen",
    speedUpsCalculator = "SpeedUpsCalculatorScreen",
}

export enum tableNames {
    pieces = "Pieces",
    piece_rareness_stats = "Piece_rareness_stats",

    jewels = "Jewels",
    jewels_rareness_stats = "Jewels_rareness_stats",
    jewels_by_piece = "Jewels_by_piece",
    jewels_set =  "Jewels_set",

    stats = "Stats",

    gear_sets = "Gear_Sets",
    gear_set_pieces_rareness = "Gear_set_pieces_rareness",

    temperness_levels_set = "Temperness_levels_set"
}

export enum rareness {
    common = "common",
    uncommon = "uncommon",
    rare = "rare",
    epic = "epic",
    legendary = "legendary",
    mythic = "mythic",
    tempered = "tempered"
}

export enum armyTypes {
    infantry = "infantry",
    ranged = "ranged",
    cavalry = "cavalry",
    siege = "siege",
}

export enum armyTiers {
    tier1 = "t1",
    tier2 = "t2",
    tier3 = "t3",
    tier4 = "t4",
    tier5 = "t5",
}

export enum pieceTypes {
    mainHand = "mainHand",
    helmet = "helmet",
    plate = "plate",
    boots = "boots",
    secondHand = "secondHand",
    accessory = "accessory",
    accessory1 = "accessory1",
    accessory2 = "accessory2",
    accessory3 = "accessory3",
}

//paths consts
export enum ImgPathConsts{
    rootAssetsImgPath = "asset:/img",

    emptyImage = rootAssetsImgPath + "/utills/gears/empty_image.png",

    //backgrounds
    backgroundImage = rootAssetsImgPath + "/utills/backgrounds/screens/background_image_speed_ups.png",
    speedUpCardBackground = rootAssetsImgPath + "/utills/backgrounds/components/background_image_speed_ups.png",

    commonPieceBackgroundImage = rootAssetsImgPath + "/utills/gears/common_piece_background.jpg",
    uncommonPieceBackgroundImage = rootAssetsImgPath + "/utills/gears/uncommon_piece_background.jpg",
    rarePieceBackgroundImage = rootAssetsImgPath + "/utills/gears/rare_piece_background.jpg",
    epicPieceBackgroundImage = rootAssetsImgPath + "/utills/gears/epic_piece_background.jpg",
    legendaryPieceBackgroundImage = rootAssetsImgPath + "/utills/gears/legendary_piece_background.jpg",
    mythicPieceBackgroundImage = rootAssetsImgPath + "/utills/gears/mythic_piece_background.jpg",
    temperedPieceBackgroundImage = rootAssetsImgPath + "/utills/gears/tempered_piece_background.jpg",
    
    placeholderImage = rootAssetsImgPath + "/utills/no_image_placeholder.jpg",
    jewelsPlaceHolderImage = rootAssetsImgPath + "/utills/no_juewels_placeholder.jpg",
    piecePlaceholderImage = rootAssetsImgPath + "/utills/no_piece_placeholder.jpg",
}

export enum IconPathConsts{
    rootAssetsIconsPath = "asset:/img/Icons",

    menuIcon = rootAssetsIconsPath + "/menu.png",
    questionMarkIcon = rootAssetsIconsPath + "/question_mark.png",
    closeIcon = rootAssetsIconsPath + "/close.png",

    researchesIcon = rootAssetsIconsPath + "/researches.png",
    calculatorIcon = rootAssetsIconsPath + "/calculator.png",
    gearIcon = rootAssetsIconsPath + "/gear.png",

    leftArrowIcon = rootAssetsIconsPath + "/left_arrow.png",
    rightArrowIcon = rootAssetsIconsPath + "/right_arrow.png",

    //speedUpCard
    speedUpIcon = rootAssetsIconsPath + "/speed_up.png",
    
    commonChooseLableIcon = rootAssetsIconsPath + "/common_icon.png",
    uncommonChooseLableIcon = rootAssetsIconsPath + "/uncommon_icon.png",
    rareChooseLableIcon = rootAssetsIconsPath + "/rare_icon.png",
    epicChooseLableIcon = rootAssetsIconsPath + "/epic_icon.png",
    legendaryChooseLableIcon = rootAssetsIconsPath + "/legendary_icon.png",
    mythicChooseLableIcon = rootAssetsIconsPath + "/mythic_icon.png",
    temperedIcon = rootAssetsIconsPath + "/tempered_icon.png"
}