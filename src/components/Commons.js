import React from "react";
import { View, Text } from "react-native";


/**
 * Background Component
 */
export const Background = ({ children }) => {
    return (
        <View style={{flex: 1}} >
            {children}
        </View>
    );
};


/**
 * Padded Component
 */
export const Content = ({ children, style }) => {
    return (
        <View style={[style, {padding: 16, paddingTop: 30}]} >
            {children}
        </View>
    );
};


/**
 * Center Component
 */
export const Center = ({ children }) => {
    return (
        <View
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            {children}
        </View>
    );
};


/**
 * Large Heading
 */
export const Heading = ({ children, style }) => {
    return (
        <Text style={[
            style,
            {
                fontWeight: "bold",
                fontSize: 28,
            }
        ]} >
            {children}
        </Text>
    );
};