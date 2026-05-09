import React from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Defs, LinearGradient, Stop, Rect, Path } from "react-native-svg";

type Props = {
  radius?: number
}

function GoldFrame({ radius = 20 }: Props) {
  return (
    <View pointerEvents="none" style={{...StyleSheet.absoluteFill, zIndex: 2, pointerEvents: "none"}}>
      <Svg width = "100%" height = "100%" viewBox = "0 0 100 100" preserveAspectRatio = "none">
        <Defs>
          <LinearGradient id="goldStroke" x1="0%" y1="0%" x2="100%" y2="0%">
            <Stop offset="0%" stopColor="#8E6328" />
            <Stop offset="12%" stopColor="#C9933E" />
            <Stop offset="28%" stopColor="#F3D38A" />
            <Stop offset="50%" stopColor="#B67C32" />
            <Stop offset="72%" stopColor="#F0C97B" />
            <Stop offset="88%" stopColor="#C9933E" />
            <Stop offset="100%" stopColor="#8E6328" />
          </LinearGradient>

          <LinearGradient id="innerGold" x1="0%" y1="0%" x2="0%" y2="100%">
            <Stop offset="0%" stopColor="rgba(255,236,182,0.45)" />
            <Stop offset="100%" stopColor="rgba(120,78,25,0.18)" />
          </LinearGradient>
        </Defs>

        {/* Внешняя основная рамка */}
        <Rect
          x="1.2"
          y="1.2"
          width="97.6"
          height="97.6"
          rx={radius}
          ry={radius}
          fill="transparent"
          stroke="url(#goldStroke)"
          strokeWidth="1.6"
        />
      </Svg>
    </View>
  );
}

export default GoldFrame