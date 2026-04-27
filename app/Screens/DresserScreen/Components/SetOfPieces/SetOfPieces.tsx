import React from "react";
import { Alert, Image, Text, View } from "react-native";
import set_of_pieces from "./SetOfPiece.styles";
import { gearSet, Piece} from "../../../../../utills/types";
import { IconPathConsts, ImgPathConsts, pieceTypes } from "../../../../../utills/enums";
import MenuIcon from "../../../../../Components/MenuIcon/MenuIcon";
import { gearSetPlaceHolder } from "../../../../../utills/consts";
import PieceOfSet from "../Piece/Piece";
import ImageInWrapper from "../../../../../Components/ImageInWrapper/ImageInWrapper";
import JewelsInPiece from "../JewelsInPiece/JewelsInPiece";
import ElevatedButton from "../../../../../Components/ElevatedButton/ElevatedButton";
import { getDBConnection, updateGearSet } from "../../../../../utills/functions/db-service";
import { colors } from "../../../../../utills/sharedStyles.styles";

type Props = {
    title: string | null,
    gearSet: gearSet,
    onPieceSelected: (piece: Piece | undefined, pieceType: pieceTypes) => void,
    onMenuClicked: () => void,
    onTitleClicked: () => void,
    onQuestionMarkClicked: () => void,
}

function SetOfPieces ({gearSet, title, onPieceSelected, onMenuClicked, onTitleClicked, onQuestionMarkClicked}: Props): React.JSX.Element {

    if(gearSet === undefined)  gearSet = gearSetPlaceHolder

    const onSaveChanges = async (): Promise<void> => {
        try{
            const db = await getDBConnection() 
            const result = await updateGearSet(db, gearSet, title)

            if(!result){
                Alert.alert("Oops! An error occured!")
            }
        }
        catch(e){
            console.log(e)
        }
    }
    
    return(
        <View style = {set_of_pieces.wrapper}>
            <View style = {set_of_pieces.gear_box}>

                <View style = {set_of_pieces.first_row}>
                    <MenuIcon onPress = {() => onMenuClicked()}/>

                    <Text style = {set_of_pieces.title} onPress = {() => onTitleClicked()}> 
                       {title == null ? ("Set " + gearSet.id, gearSet.title = "Set " + gearSet.id) : title} 
                    </Text>

                    <ImageInWrapper wrapperStyles = {set_of_pieces.stats_icon} imageSource = {IconPathConsts.questionMarkIcon}
                    onPress = {() => onQuestionMarkClicked()}/>
                </View>

                <View style = {set_of_pieces.start_of_set}>
                    <View style = {set_of_pieces.piece_wrapper}>
                        <PieceOfSet piece = {gearSet.mainHand}
                        onPress = {() => onPieceSelected(gearSet?.mainHand, pieceTypes.mainHand)} 
                        jewels = {<JewelsInPiece jewels = {gearSet?.mainHand?.jewels}/>}/>
                    </View>

                    <View style = {set_of_pieces.piece_wrapper}>
                        <PieceOfSet piece = {gearSet.secondHand}
                        onPress = {() => onPieceSelected(gearSet?.secondHand, pieceTypes.secondHand)} 
                        jewels = {<JewelsInPiece jewels = {gearSet?.secondHand?.jewels}/>}/>
                    </View>
                </View>

                <View style = {set_of_pieces.center_of_set_wrapper}>

                    <View style = {set_of_pieces.center_of_set}>
                        <View style = {set_of_pieces.piece_wrapper}>      
                            <PieceOfSet piece = {gearSet.helmet}
                            onPress = {() => onPieceSelected(gearSet?.helmet, pieceTypes.helmet)} 
                            jewels = {<JewelsInPiece jewels = {gearSet?.helmet?.jewels}/>}/>
                        </View>

                        <View style = {set_of_pieces.piece_wrapper}>
                            <PieceOfSet piece = {gearSet.accessory1}
                            onPress = {() => onPieceSelected(gearSet?.accessory1, pieceTypes.accessory1)} 
                            jewels = {<JewelsInPiece jewels = {gearSet?.accessory1?.jewels}/>}/>
                        </View>
                    </View>

                    <View style = {set_of_pieces.center_of_set}>
                        <View style = {set_of_pieces.piece_wrapper}>
                            <PieceOfSet piece = {gearSet.plate}
                            onPress = {() => onPieceSelected(gearSet?.plate, pieceTypes.plate)} 
                            jewels = {<JewelsInPiece jewels = {gearSet?.plate?.jewels}/>}/>
                        </View>

                        <View style = {set_of_pieces.piece_wrapper}>
                            <PieceOfSet piece = {gearSet.accessory2}
                            onPress = {() => onPieceSelected(gearSet?.accessory2, pieceTypes.accessory2)} 
                            jewels = {<JewelsInPiece jewels = {gearSet?.accessory2?.jewels}/>}/>
                        </View>
                    </View>

                </View>
                
                    <View style = {set_of_pieces.end_of_set}>
                        <View style = {set_of_pieces.piece_wrapper}>
                            <PieceOfSet piece = {gearSet.boots}
                            onPress = {() => onPieceSelected(gearSet?.boots, pieceTypes.boots)} 
                            jewels = {<JewelsInPiece jewels = {gearSet?.boots?.jewels}/>}/>
                        </View>

                        <View style = {set_of_pieces.piece_wrapper}>
                            <PieceOfSet piece = {gearSet.accessory3}
                            onPress = {() => onPieceSelected(gearSet?.accessory3, pieceTypes.accessory3)} 
                            jewels = {<JewelsInPiece jewels = {gearSet?.accessory3?.jewels}/>}/>
                        </View>
                    </View>

                    <View style = {set_of_pieces.button_wrapper}>
                        <ElevatedButton title = "Save" onPress = {() => {onSaveChanges()}} colors = {[colors.bgPrimary, colors.surfaceRaised]}/>
                    </View>

                </View>
            </View>
    );
}

export default SetOfPieces