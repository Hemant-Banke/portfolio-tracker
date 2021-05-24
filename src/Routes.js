import React, { useState, useEffect, useContext } from "react";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Center } from "./Center";
import { AuthContext } from "./AuthProvider";
import { AppTabs } from "./AppTabs";


export const Routes= ({}) => {
    const { user, loadUser, createUser} = useContext(AuthContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // check if the user is available
        AsyncStorage.getItem("user")
        .then((resp) => {
            if (resp) {
                // load the data
                loadUser()
                .then(() => {
                    setLoading(false);
                });
            }
            else{
                // Create User
                createUser()
                .then(() => {
                    setLoading(false);
                });
            }
        })
        .catch(err => {
            console.log(err);
        });
    }, []);

    if (loading) {
        return (
            <Center>
                <ActivityIndicator size="large" />
            </Center>
        );
    }

    return (
        <NavigationContainer>
            <AppTabs />
        </NavigationContainer>
    );
};
