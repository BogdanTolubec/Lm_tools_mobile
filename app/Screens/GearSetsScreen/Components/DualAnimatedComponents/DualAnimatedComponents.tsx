import React, { ReactNode, useRef } from "react"
import { Pressable, View } from "react-native"
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated"
import { scheduleOnRN } from "react-native-worklets"
import { Text } from "react-native-paper"
import dual_animated_component_styles from "./DualAnimatedComponents.styles"
import { useAppDimensions } from "../../../../../utills/styles/dimensions"

type Props = {
    leftComponent: (actions: {
        closeLeftPanel: () => void
    }) => ReactNode

    rightComponent: ReactNode,
}

enum AnimationPhases {
    leftClosed = 1,
    rightClosed = 2,
    leftOpening = 3,
    rightOpening = 4,
}

function DualAnimatedComponent({leftComponent, rightComponent}: Props): React.JSX.Element {
    const { widthInPercentsToPixels } = useAppDimensions()

    const animationPhaseRef = useRef<AnimationPhases>(AnimationPhases.rightClosed)

    const leftComponentWidth = useSharedValue(widthInPercentsToPixels(80))
    const rightComponentWidth = useSharedValue(widthInPercentsToPixels(0))

    const setAnimationPhase = (phase: AnimationPhases) => {
        animationPhaseRef.current = phase
    }

    const finishAnimation = (expectedPhase: AnimationPhases, finalPhase: AnimationPhases, finished: boolean) => {
        if(!finished) return
        if(animationPhaseRef.current !== expectedPhase) return

        setAnimationPhase(finalPhase)
    }

    const openLeftPanel = () => {
        if(
            animationPhaseRef.current === AnimationPhases.leftOpening ||
            animationPhaseRef.current === AnimationPhases.rightOpening ||
            animationPhaseRef.current === AnimationPhases.rightClosed
        ) 
        return

        setAnimationPhase(AnimationPhases.leftOpening)

        rightComponentWidth.value = withTiming(widthInPercentsToPixels(0), {duration: 300,easing: Easing.out(Easing.cubic),})

        leftComponentWidth.value = withTiming(widthInPercentsToPixels(80), {
            duration: 300,
            easing: Easing.bounce,
        }, (finished) => {
            scheduleOnRN(
                finishAnimation,
                AnimationPhases.leftOpening,
                AnimationPhases.rightClosed,
                Boolean(finished)
            )
        })
    }

    const closeLeftPanel = () => {
        if(
            animationPhaseRef.current === AnimationPhases.leftOpening ||
            animationPhaseRef.current === AnimationPhases.rightOpening ||
            animationPhaseRef.current === AnimationPhases.leftClosed
        ) return

        setAnimationPhase(AnimationPhases.rightOpening)

        rightComponentWidth.value = withTiming(widthInPercentsToPixels(75), {duration: 300, easing: Easing.out(Easing.cubic),})

        leftComponentWidth.value = withTiming(widthInPercentsToPixels(5), {
            duration: 300,
            easing: Easing.out(Easing.cubic),
        }, (finished) => {
            scheduleOnRN(
                finishAnimation,
                AnimationPhases.rightOpening,
                AnimationPhases.leftClosed,
                Boolean(finished)
            )
        })
    }

    const leftPartAnimatedStyle = useAnimatedStyle(() => {
        return {width: leftComponentWidth.value}
    })

    const rightPartAnimatedStyle = useAnimatedStyle(() => {
        return {width: rightComponentWidth.value}
    })

    return(
        <View style={dual_animated_component_styles.wrapper}>
            <Animated.View style={[dual_animated_component_styles.left_part_wrapper, leftPartAnimatedStyle]}>
                <View style={dual_animated_component_styles.left_component_wrapper}>
                    {leftComponent({closeLeftPanel})}
                </View>

                <Pressable style={dual_animated_component_styles.arrow_wrapper} onPress={openLeftPanel}>
                    <Text style={dual_animated_component_styles.text}> {">"} </Text>
                </Pressable>
            </Animated.View>

            <Animated.View style={[dual_animated_component_styles.right_part_wrapper, rightPartAnimatedStyle]}>
                <View style={dual_animated_component_styles.right_component_wrapper}>
                    {rightComponent}
                </View>
            </Animated.View>
        </View>
    )
}

export default DualAnimatedComponent