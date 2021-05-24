import React from "react";
import { AuthProvider } from "./AuthProvider";
import { Routes } from "./Routes";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView } from 'react-native';

export const Providers = ({}) => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{flex: 1}}>
                <AuthProvider>
                    <Routes />
                    <StatusBar style="dark" />
                </AuthProvider>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};
