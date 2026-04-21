import React from "react";
import { View } from "react-native";
import home from "./ResearchesToolsScreen.styles";
import ErrorScreen from "../../ErrorScreen/ErrorScreen";

function ResearchesToolsScreen(): React.JSX.Element {
    
    return(
        <View style = {home.wrapper}>
            <ErrorScreen/>
        </View>
    );
}

export default ResearchesToolsScreen;