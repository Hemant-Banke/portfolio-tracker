import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity, View } from "react-native";
import { AuthContext } from "./AuthProvider";
import { Octicons } from "@expo/vector-icons";

// Import Components
import { Background, Center, Content, Heading } from "./components/Commons";
import SwipeCards from "./components/SwipeCards";


const Stack = createStackNavigator();

function Feed({ navigation }) {
    return (
        <SwipeCards/>
    );
}


export const HomeStack = ({}) => {
    const { logout } = useContext(AuthContext);
    return (
        <Stack.Navigator initialRouteName="Feed">
            <Stack.Screen
                name="Feed"
                options={{
                    headerRight: () => {
                        return (
                            <View style={{flexDirection : "row"}}>
                                <TouchableOpacity
                                    onPress={() => {
                                        logout();
                                    }}
                                    style={{marginRight: 10}}
                                >
                                    <Octicons
                                        name="sign-out"
                                        size={25}
                                        style="grey"
                                    />
                                </TouchableOpacity>
                            </View>
                        );
                    }
                }}
                component={Feed}
            />
        </Stack.Navigator>
    );
};
