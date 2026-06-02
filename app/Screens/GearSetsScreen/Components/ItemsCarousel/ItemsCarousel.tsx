import React, { useCallback, useState } from "react"
import { LayoutChangeEvent, View, ViewStyle } from "react-native"
import Carousel from "react-native-reanimated-carousel"

import items_carousel_styles from "./ItemsCarousel.styles"

type CarouselItemProps<ItemType> = {
    item: ItemType
    index: number
}

type Props<ItemType> = {
    itemsArray: ItemType[]
    containerStyle?: ViewStyle
    loop?: boolean
    enabled?: boolean
    windowSize?: number
    children: (props: CarouselItemProps<ItemType>) => React.ReactElement | null
}

function ItemsCarousel<ItemType>({
    itemsArray,
    containerStyle,
    loop = false,
    enabled,
    windowSize,
    children,
}: Props<ItemType>) {
    const [carouselSize, setCarouselSize] = useState({
        width: 0,
        height: 0,
    })

    const handleLayout = useCallback((event: LayoutChangeEvent) => {
        const width = Math.round(event.nativeEvent.layout.width)
        const height = Math.round(event.nativeEvent.layout.height)

        if(width < 20 || height < 20) return

        setCarouselSize((prev) => {
            if(prev.width === width && prev.height === height) {
                return prev
            }

            return {
                width,
                height,
            }
        })
    }, [])

    const renderItem = useCallback(
        ({ item, index }: { item: ItemType; index: number }) => {
            return (
                <View style={items_carousel_styles.slide}>
                    {children({item, index})}
                </View>
            )
        },
        [children]
    )

    const shouldRenderCarousel =
        carouselSize.width > 0 &&
        carouselSize.height > 0 &&
        Array.isArray(itemsArray) &&
        itemsArray.length > 0

    return (
        <View
            style={[items_carousel_styles.wrapper, containerStyle]}
            onLayout={handleLayout}
        >
            {
                shouldRenderCarousel ?
                <Carousel<ItemType>
                    width={carouselSize.width}
                    height={carouselSize.height}
                    data={itemsArray}
                    renderItem={renderItem}
                    loop={loop}
                    autoPlay={false}
                    enabled={enabled ?? itemsArray.length > 1}
                    {...(windowSize !== undefined ? {windowSize} : {})}
                />
                :
                null
            }
        </View>
    )
}

export default ItemsCarousel