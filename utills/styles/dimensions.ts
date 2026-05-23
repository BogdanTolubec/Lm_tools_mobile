import { useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const navbarHeight = 68

export function useAppDimensions() {
  const { width, height, fontScale, scale } = useWindowDimensions()

  const insets = useSafeAreaInsets()

  const safeWidth = width - (insets.left + insets.right)
  const safeHeight = height - (insets.bottom + insets.top + navbarHeight)

  return {
    screenWidth: safeWidth,
    screenHeight: safeHeight,
    fontScale,
    scale,

    widthInPercentsToPixels: (percent: number) => (safeWidth * percent) / 100,
    heightInPercentToPixels: (percent: number) => (safeHeight * percent) / 100,
  }
}