import React, { useContext } from "react";
import { View } from "react-native";
// import { useSafeArea } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabBar } from "./BottomTabBar";
import { HomeStack } from "./HomeStack";
import { SearchStack } from "./SearchStack";


const Tabs = createBottomTabNavigator();

export const AppTabs = ({}) => {
    return (
        <View style={{ flex: 1, position: "relative"}}>
            <Tabs.Navigator
                tabBar={(props) => <BottomTabBar {...props} />}
            >
                <Tabs.Screen name="Home" component={HomeStack} />
                {/* <Tabs.Screen name="Comment" component={SearchStack} />
                <Tabs.Screen name="Settings" component={SearchStack} /> */}
            </Tabs.Navigator>
        </View>
    );
};
