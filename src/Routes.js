import React, { useState, useEffect, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "./AuthProvider";

import { SplashScreen } from "./screens/SplashScreen";
import { PortfolioStack } from "./screens/PortfolioStack";

// import * as Font from 'expo-font';


export const Routes= ({}) => {
    const { user, loadUser, createUser} = useContext(AuthContext);
    const [userLoaded, setUserLoading] = useState(false);
    const [fontsLoaded, setFontLoading] = useState(false);


    // async function loadFonts() {
    //     await Font.loadAsync({
    //         Ubuntu: {
    //             uri: require('../assets/font/Ubuntu-Regular.ttf'),
    //             display: Font.FontDisplay.FALLBACK,
    //         },
    //     });
    // }


    useEffect(() => {
        // check if the user is available
        AsyncStorage.getItem("user")
        .then((resp) => {
            if (resp) {
                // load the data
                loadUser()
                .then(() => {
                    setUserLoading(true);
                });
            }
            else{
                // Create User
                createUser()
                .then(() => {
                    setUserLoading(true);
                });
            }
        })
        .catch(err => {
            console.log(err);
        });

        // loadFonts()
        // .then(() => {
        //     setFontLoading(true);
        // });
    }, []);

    if (!userLoaded || !fontsLoaded) {
        return (
            <SplashScreen />
        );
    }

    return (
        <NavigationContainer>
            <PortfolioStack />
        </NavigationContainer>
    );
};
