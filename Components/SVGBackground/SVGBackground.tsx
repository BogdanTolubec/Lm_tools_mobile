import React, { useMemo } from "react"
import { StyleSheet, View } from "react-native"
import Svg, { Defs, LinearGradient, RadialGradient, Stop, Rect } from "react-native-svg"

type Props = {
  radius?: number
}

function SVGBackground({ radius = 24 }: Props) {
  const uid = useMemo(() => Math.random().toString(36).slice(2, 9), [])
  const palette = {
    top: "#132742",
    middle: "#0E1F35",
    bottom: "#091827",
    glow: "#315F96",
  }

  return (
    <View pointerEvents  ="none" style={StyleSheet.absoluteFill}>
      <Svg
        width = "100%"
        height = "100%"
        viewBox = "0 0 100 100"
        preserveAspectRatio = "none"
      >
        <Defs>
          <LinearGradient id={`base-${uid}`} x1 = "0%" y1 = "0%" x2 = "0%" y2 = "100%">
            <Stop offset = "0%" stopColor = {palette.top} />
            <Stop offset = "55%" stopColor = {palette.middle} />
            <Stop offset = "100%" stopColor = {palette.bottom} />
          </LinearGradient>

          <RadialGradient id = {`glow-${uid}`} cx = "50%" cy = "38%" r = "58%">
            <Stop offset="0%" stopColor={palette.glow} stopOpacity="0.15" />
            <Stop offset="60%" stopColor={palette.glow} stopOpacity="0.05" />
            <Stop offset="100%" stopColor={palette.glow} stopOpacity="0" />
          </RadialGradient>

          <RadialGradient id={`edge-${uid}`} cx = "50%" cy="50%" r="78%">
            <Stop offset = "62%" stopColor = "#000000" stopOpacity="0" />
            <Stop offset = "100%" stopColor = "#000000" stopOpacity="0.34" />
          </RadialGradient>

          <LinearGradient id={`shine-${uid}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <Stop offset = "0%" stopColor = "#FFFFFF" stopOpacity="0.05" />
            <Stop offset = "100%" stopColor = "#FFFFFF" stopOpacity="0" />
          </LinearGradient>
        </Defs>

        <Rect
          x="0"
          y="0"
          width="100"
          height="100"
          rx={radius}
          ry={radius}
          fill={`url(#base-${uid})`}
        />

        <Rect
          x="0"
          y="0"
          width="100"
          height="100"
          rx={radius}
          ry={radius}
          fill={`url(#glow-${uid})`}
        />

        <Rect
          x="0"
          y="0"
          width="100"
          height="100"
          rx={radius}
          ry={radius}
          fill={`url(#edge-${uid})`}
        />

        <Rect
          x="0"
          y="0"
          width="100"
          height="18"
          rx={radius}
          ry={radius}
          fill={`url(#shine-${uid})`}
        />
      </Svg>
    </View>
  )
}

export default SVGBackground