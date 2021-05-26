import React from "react";
import { ActivityIndicator, View } from "react-native";
import { Image } from 'react-native-elements';
import { COLORS } from '../styles/colours';

export const SplashScreen = () => {
    return (
        <View
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: COLORS.splash_bg
            }}
        >
            <Image
                source={{ uri: require('../../assets/logo.png') }}
                style={{
                    width: 120,
                    height: 120,
                    marginBottom: '5rem',
                    resizeMode: "contain",
                    alignSelf: "center" }}
                PlaceholderContent={<ActivityIndicator color={COLORS.white} />}
            />

            <ActivityIndicator size="large" color={COLORS.white} />
        </View>
    );
};