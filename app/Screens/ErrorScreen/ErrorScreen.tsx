import React from "react";
import { Text, View } from "react-native";
import error_page from "./ErrorScreen.styles";
import { SafeAreaView } from "react-native-safe-area-context";

function ErrorScreen (): React.JSX.Element {
    return(
        <View style = {error_page.not_found}>
            <View style = {error_page.center_block}>
                <View style = {error_page.status}>
                    <Text style = {error_page.text_404}>
                        4<Text style = {error_page.span}>0</Text>4
                    </Text>
                </View>
                <Text style = {error_page.text}> 
                    Screen not found...
                </Text>
            </View>
        </View>
    );
}

export default ErrorScreen