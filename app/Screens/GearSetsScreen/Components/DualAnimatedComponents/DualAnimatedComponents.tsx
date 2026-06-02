import React, { ReactNode, useState } from "react"
import { Pressable, View } from "react-native"
import { MotiView } from "moti"
import { Easing } from "react-native-reanimated"
import { Text } from "react-native-paper"
import dual_animated_component_styles from "./DualAnimatedComponents.styles"
import { useAppDimensions } from "../../../../../utills/styles/dimensions"

type Props = {
    leftComponent: (actions: {
        closeLeftPanel: () => void
    }) => ReactNode

    rightComponent: ReactNode
}

type Panel = "left" | "right"

function DualAnimatedComponent({leftComponent, rightComponent}: Props): React.JSX.Element {
    const { widthInPercentsToPixels } = useAppDimensions()

    const arrowWidth = 30
    const leftOpenedWidth = widthInPercentsToPixels(80)
    const leftClosedWidth = 0
    const rightOpenedWidth = widthInPercentsToPixels(75)
    const rightClosedWidth = 0

    const [openedPanel, setOpenedPanel] = useState<Panel>("left")
    const [renderedPanel, setRenderedPanel] = useState<Panel>("left")
    const [isAnimating, setIsAnimating] = useState(false)

    const leftWidth = openedPanel === "left" ? leftOpenedWidth : leftClosedWidth
    const rightWidth = openedPanel === "right" ? rightOpenedWidth : rightClosedWidth

    const transition = {
        type: "timing" as const,
        duration: 1500,
        easing: Easing.out(Easing.cubic),
    }

    function openPanel(panel: Panel) {
        if(isAnimating || openedPanel === panel) return

        setRenderedPanel(panel)
        setIsAnimating(true)
        setOpenedPanel(panel)
    }

    function openLeftPanel() {
        openPanel("left")
    }

    function closeLeftPanel() {
        openPanel("right")
    }

    function onWidthAnimationEnd(key: string, finished: boolean) {
        if(key !== "width" || !finished || !isAnimating) return

        setIsAnimating(false)
    }

    return(
        <View style = {dual_animated_component_styles.wrapper}>
            <MotiView
                style = {[dual_animated_component_styles.left_part_wrapper, {width: leftWidth}]}
                animate = {{width: leftWidth}}
                transition = {transition}
                onDidAnimate = {onWidthAnimationEnd}
            >
                <View
                    pointerEvents = {renderedPanel === "left" && !isAnimating ? "auto" : "none"}
                    style = {[dual_animated_component_styles.left_component_wrapper, {width: leftOpenedWidth}]}
                >
                    {renderedPanel === "left" ? leftComponent({closeLeftPanel}) : null}
                </View>
            </MotiView>

            <MotiView
                style = {[dual_animated_component_styles.right_part_wrapper, {width: rightWidth}]}
                animate = {{width: rightWidth}}
                transition = {transition}
            >
                <Pressable
                    style = {dual_animated_component_styles.arrow_wrapper}
                    onPress = {openLeftPanel}
                    disabled = {openedPanel === "left" || isAnimating}
                >
                    <Text style = {dual_animated_component_styles.text}> {"<"} </Text>
                </Pressable>
                <View
                    pointerEvents = {renderedPanel === "right" && !isAnimating ? "auto" : "none"}
                    style = {[dual_animated_component_styles.right_component_wrapper, {width: rightOpenedWidth - arrowWidth}]}
                >
                    {renderedPanel === "right" ? rightComponent : null}
                </View>
            </MotiView>
        </View>
    )
}

export default DualAnimatedComponent