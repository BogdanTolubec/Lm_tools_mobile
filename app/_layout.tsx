/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import TabLayout from "./(tabs)/_layout";
import { MD3DarkTheme, PaperProvider } from "react-native-paper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style = {{flex: 1}}>
      <SafeAreaProvider>
        <PaperProvider theme = {MD3DarkTheme}>
          <SafeAreaView style = {{flex: 1}}>
            <TabLayout/>
          </SafeAreaView>
        </PaperProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>

  );
}

export default App;