import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Octicons
} from "react-native";


export const TimButton = ({
    onPress,
    title,
    leftIcon,
    rightIcon,
    style,
    textStyle,
    stretch = false,
    type = "default",
    center = false,
    disabled=false
}) => {
    return (
        <TouchableOpacity onPress={onPress} disabled={disabled}>
            <View style = {[
                    style,
                    styles.btn,
                    stretch == true && {
                        width: "100%"
                    },
                    type == "primary" && styles.btn_primary,
                    center == true && {
                        justifyContent: "center"
                    },
                    disabled == true && {
                        opacity: 0.8,
                        elevation: 0,
                        shadowOpacity: 0
                    }
                ]}
            >
                <View style = {{marginRight: 8, marginLeft: 4}}>{leftIcon}</View>

                <Text style = {[textStyle, styles.btn_text, type == "primary" && {color : "#fff"}]}>
                    {title}
                </Text>

                <View style = {(center) ? {marginLeft: 8} : {marginLeft: 'auto', marginRight: 4}}>{rightIcon}</View>
            </View>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    btn: {
        color: "#333",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: 45,
        paddingHorizontal: 10,
        borderRadius: 23,
        shadowOffset: {
            width: 0,
            height: -1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },

    btn_primary: {
        color: "#fff",
        backgroundColor: "tomato"
    },

    btn_text: {
        // fontWeight: "bold",
        fontSize: 18,
        color: "#333"
    }
});