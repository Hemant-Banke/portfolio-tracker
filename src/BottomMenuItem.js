import React from "react";
import { View } from "react-native";
import { Octicons } from "@expo/vector-icons";


export const BottomMenuItem = ({ iconName, isCurrent }) => {
    return (
        <View
            style={{
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: 4,
            }}
        >
            <Octicons
                name={iconName}
                size={25}
                style={{ color: isCurrent ? "tomato" : "grey" }}
            />
        </View>
    );
};