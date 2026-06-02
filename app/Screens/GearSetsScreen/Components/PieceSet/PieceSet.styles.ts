import { StyleSheet } from "react-native";

const pieces_set_styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: "row",
        gap: 10,

        borderRadius: 10,

        paddingVertical: 20,
        paddingHorizontal: 10,

        alignSelf: "flex-start",
    },

    column_wrapper: {
        height: "100%",
        width: "49%",
        gap: 10
    },

    linear_gradient:  {
        ...StyleSheet.absoluteFill,
        backgroundColor: "transparent",
        borderRadius: 14,
    },
})

export default pieces_set_styles