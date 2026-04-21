import React from "react";
import { Text, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import submit_button from "./SubmitButton.styles";
import { Button } from "react-native-paper";

type Props = {
    onPress: (() => void) | undefined,
    title: string
}

function SubmitButton( {onPress, title}: Props ): React.JSX.Element {

    return(
        <Button onPress = {onPress} mode = "contained" buttonColor = "grey">
            <Text style = {submit_button.text}> {title} </Text>
        </Button>
    );
}

export default SubmitButton