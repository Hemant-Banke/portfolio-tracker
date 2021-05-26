import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { Image } from 'react-native-elements';

import { TextNode } from "./Commons";
import { COLORS } from '../styles/colours';

/**
 * Header Component
 */
export const CustomHead = ({ scene, previous, navigation }) => {
    const { options } = scene.descriptor;
    const title =
        options.headerTitle !== undefined
            ? options.headerTitle
            : options.title !== undefined
            ? options.title
            : scene.route.name;

    return (
        <View
            leftButton={
                previous ? <View onPress={navigation.goBack} /> : undefined
            }
            style={[options.headerStyle, styles.head]}
        >
            <Image
                source={{ uri: require('../../assets/logo.png') }}
                style={styles.head_img}
                PlaceholderContent={<ActivityIndicator color={COLORS.white} />}
            />
            <TextNode style={styles.head_title}>{title}</TextNode>
        </View>
    );
};


const styles = StyleSheet.create({
    head: {
        color: COLORS.white,
        backgroundColor: COLORS.head_bg,
        padding: '1rem',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },

    head_title: {
        color: COLORS.white,
        fontSize: 20
    },

    head_img: {
        width: 30,
        height: 30,
        marginRight: '0.8rem',
        resizeMode: "contain",
        alignSelf: "center"
    }
});