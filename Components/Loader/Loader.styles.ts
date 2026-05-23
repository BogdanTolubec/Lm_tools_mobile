import { StyleSheet } from "react-native";
import { colors } from "../../utills/styles/sharedStyles.styles";

const loder_styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.bgPrimary,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },

  card: {
    width: '100%',
    maxWidth: 320,
    minHeight: 190,
    borderRadius: 22,
    backgroundColor: "#0B1724",
    borderWidth: 1,
    borderColor: colors.borderSoft,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 28,
    paddingHorizontal: 22,
    overflow: 'hidden',

    shadowColor: '#000',
    shadowOpacity: 0.35,
    shadowRadius: 16,
    shadowOffset: {
      width: 0,
      height: 8,
    },

    elevation: 8,
  },

  topLine: {
    position: 'absolute',
    top: 0,
    left: 28,
    right: 28,
    height: 1,
    backgroundColor: colors.gold,
    opacity: 0.45,
  },

  iconCircle: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: '#102235',
    borderWidth: 1,
    borderColor: 'rgba(216, 168, 58, 0.35)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18,
  },

  title: {
    color: colors.textPrimary,
    fontSize: 18,
    fontWeight: '800',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    textAlign: 'center',
  },

  subtitle: {
    marginTop: 8,
    color: colors.textMuted,
    fontSize: 13,
    fontWeight: '500',
    textAlign: 'center',
  },

  dotsWrapper: {
    flexDirection: 'row',
    gap: 7,
    marginTop: 18,
  },

  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.gold,
  },

  dotMuted: {
    opacity: 0.55,
  },

  dotFaded: {
    opacity: 0.25,
  },
})

export default loder_styles