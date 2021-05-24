import { StyleSheet } from "react-native"

export const ButtonStyles = StyleSheet.create({

    btn: {
        color: "#fff",
        backgroundColor: "tomato",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 40,
        borderRadius: 20,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4.0,
    },

    btn_text: {
        fontWeight: "600",
        fontSize: 18,
        color: "#fff"
    },

    btn_stretch: {
        width: "100%"
    }
})