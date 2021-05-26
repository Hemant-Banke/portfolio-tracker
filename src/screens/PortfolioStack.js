import React, { useContext } from "react";
import { View } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext } from "../AuthProvider";

import { CustomHead } from "../components/CustomHead";
import { Background } from "../components/Commons";


/**
 * Portfolio Display Screen
 */
function Home({navigation}){
    return (
        <Background></Background>
    );
}


const Stack = createStackNavigator();

export const PortfolioStack = ({}) => {
    return (
        <Stack.Navigator initialRouteName = "Home">
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    title: "Your Porfolios",
                    header: CustomHead
                }}
            />
        </Stack.Navigator>
    );
};
