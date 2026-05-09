import React from "react"
import { ActivityIndicator, StyleProp, View } from "react-native"
import { ViewStyle } from "react-native"
import loder_styles from "./Loader.styles"
import { Text } from "react-native-paper"
import { colors } from "../../utills/sharedStyles.styles"


type Props = {
  title?: string
  subtitle?: string
  style?: StyleProp<ViewStyle>
}

function Loader({ title = 'Loading data', subtitle = 'Preparing your set...', style,}: Props): React.JSX.Element {
  return (
    <View style = {[loder_styles.wrapper, style]}>
      <View style = {loder_styles.card}>
        <View style = {loder_styles.topLine} />

        <View style = {loder_styles.iconCircle}>
          <ActivityIndicator
            animating
            size = {34}
            color = {colors.gold}
          />
        </View>

        <Text style={loder_styles.title}>
          {title}
        </Text>

        <Text style={loder_styles.subtitle}>
          {subtitle}
        </Text>

        <View style = {loder_styles.dotsWrapper}>
          <View style = {loder_styles.dot} />
          <View style = {[loder_styles.dot, loder_styles.dotMuted]} />
          <View style = {[loder_styles.dot, loder_styles.dotFaded]} />
        </View>
      </View>
    </View>
  );
}

export default Loader