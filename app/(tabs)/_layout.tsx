import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { IconPathConsts, ScreensEnum } from '../../utills/enums';
import TrainingCalculatorScreen from '../Screens/TrainingCalculatorScreen/Screen/TrainingCalculatorScreen';
import DresserScreen from '../Screens/DresserScreen/Screen/DresserScreen';
import TabIcon from './TabIcon/TabIcon';
import SpeedUpsCalculatorScreen from '../Screens/SpeedUpsCalculatorScreen/Screen/SpeedUpsCalculatorScreen';
import ResearchesToolsScreen from '../Screens/ResearchesToolsScreen/Screen/ResearchesToolsScreen';

function TabLayout(): React.JSX.Element {

  const Tab = createBottomTabNavigator();

  return (
    <>
        <NavigationContainer>
            <Tab.Navigator screenOptions = {{
                tabBarActiveTintColor: "#FFA001",
                tabBarInactiveTintColor: "#CDCDE0",
                tabBarShowLabel: false,
                tabBarStyle: {
                backgroundColor: "#161622",
                borderTopWidth: 1,
                borderTopColor: "#232533",
                height: 50,
                display: "flex",
                justifyContent: 'center',
                paddingTop: 18,
          },
        }}>
                <Tab.Screen name = {ScreensEnum.dresser} component = {DresserScreen} options = {
                    {
                        title: "Dresser",
                        headerShown: false,
                        tabBarIcon: ({color, focused}) => {
                            return (
                                <TabIcon 
                                icon = {IconPathConsts.gearIcon}
                                color = {color}
                                name = {""}
                                focused = {focused}/>
                            )
                        }
                    }
                }/>

                <Tab.Screen name = {ScreensEnum.trainingCalculator} component = {TrainingCalculatorScreen} options = {
                    {
                        title: "Calculator",
                        headerShown: false,
                        tabBarIcon: ({color, focused}) => {
                            return (
                                <TabIcon 
                                icon = {IconPathConsts.calculatorIcon}
                                color = {color}
                                name = {""}
                                focused = {focused}/>
                            )
                        }
                    }
                }/>

                <Tab.Screen name = {ScreensEnum.speedUpsCalculator} component = {SpeedUpsCalculatorScreen} options = {
                    {
                        title: "Speeds calculator",
                        headerShown: false,
                        tabBarIcon: ({color, focused}) => {
                            return (
                                <TabIcon 
                                icon = {IconPathConsts.speedUpIcon}
                                color = {color}
                                name = {""}
                                focused = {focused}/>
                            )
                        }
                    }
                }/>

                <Tab.Screen name = {ScreensEnum.home} component = {ResearchesToolsScreen} options = {
                    {
                        title: "Researches tools",
                        headerShown: false,
                        tabBarIcon: ({color, focused}) => {
                            return (
                                <TabIcon 
                                icon = {IconPathConsts.researchesIcon}
                                color = {color}
                                name = {""}
                                focused = {focused}/>
                            )
                        }
                    }
                }/>

            </Tab.Navigator>
        </NavigationContainer>
    </>
  )
}

export default TabLayout