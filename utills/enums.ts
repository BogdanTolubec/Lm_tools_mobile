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
    tier1 = "T1",
    tier2 = "T2",
    tier3 = "T3",
    tier4 = "T4",
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

export enum resourcesTypes {
    food = "food",
    stone = "stone",
    wood = "wood",
    ore = "ore",
    gold = "gold",
    trainingTime = "trainingTime",
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

    //army types icons
    armyIcon = rootAssetsIconsPath + "/army_icon.png",
    infantryIcon = rootAssetsIconsPath + "/infantry_icon.png",
    rangedIcon = rootAssetsIconsPath + "/ranged_icon.png",
    cavalryIcon = rootAssetsIconsPath + "/cavalry_icon.png",
    siegesIcon = rootAssetsIconsPath + "/sieges_icon.png",

    //rss types icons
    foodIcon = rootAssetsIconsPath + "/food_icon.png",
    woodIcon = rootAssetsIconsPath + "/wood_icon.png",
    stoneIcon = rootAssetsIconsPath + "/stone_icon.png",
    oreIcon = rootAssetsIconsPath + "/ore_icon.png",
    goldIcon = rootAssetsIconsPath + "/gold_icon.png",

    menuIcon = rootAssetsIconsPath + "/menu.png",
    questionMarkIcon = rootAssetsIconsPath + "/question_mark.png",
    closeIcon = rootAssetsIconsPath + "/close.png",
    plusIcon = rootAssetsIconsPath + "/plus.png",
    minusIcon = rootAssetsIconsPath + "/minus.png",

    researchesIcon = rootAssetsIconsPath + "/researches.png",
    calculatorIcon = rootAssetsIconsPath + "/calculator.png",
    gearIcon = rootAssetsIconsPath + "/gear.png",

    leftArrowIcon = rootAssetsIconsPath + "/left_arrow.png",
    rightArrowIcon = rootAssetsIconsPath + "/right_arrow.png",

    //speedUpCard
    speedUpIcon = rootAssetsIconsPath + "/speed_up.png",
    speedUpBadgeIcon = rootAssetsIconsPath + "/speed_up_badge.png",
    hourglassIcon = rootAssetsIconsPath + "/hourglass_icon.png",
    
    commonChooseLableIcon = rootAssetsIconsPath + "/common_icon.png",
    uncommonChooseLableIcon = rootAssetsIconsPath + "/uncommon_icon.png",
    rareChooseLableIcon = rootAssetsIconsPath + "/rare_icon.png",
    epicChooseLableIcon = rootAssetsIconsPath + "/epic_icon.png",
    legendaryChooseLableIcon = rootAssetsIconsPath + "/legendary_icon.png",
    mythicChooseLableIcon = rootAssetsIconsPath + "/mythic_icon.png",
    temperedIcon = rootAssetsIconsPath + "/tempered_icon.png"
}