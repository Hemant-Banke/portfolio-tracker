import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    Platform,
    Dimensions
} from 'react-native';

export const ListImagePreview = ({
    style,
    item,
    imageKey,
    index,
    active,
    local,
}) => {

    const windowWidth = Dimensions.get("window").width;
    var [desc_title, desc] = item.desc.split('; ');

    return (
        <View style={[styles.videoContainer, {width: windowWidth}]}>
            <View style={[styles.imageContainer, styles.shadow]}>
                <Image
                    style={[styles.videoPreview, {width: windowWidth -40}]}
                    source={item[imageKey]}
                />
            </View>
            <Text style={styles.desc_title}>{desc_title}</Text>
            <Text style={styles.desc}>{desc}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    videoContainer: {
        paddingVertical: 28,
        justifyContent: 'center',
    },
    videoPreview: {
        height: 300,
        borderRadius: 8,
        resizeMode: 'contain',
        padding: 20
    },
    desc_title: {
        fontSize: 22,
        fontWeight: "bold",
        padding: 16,
        paddingBottom: 10,
        color: "#333"
    },
    desc: {
        fontSize: 15,
        paddingHorizontal: 16,
        color: "#333"
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    shadow: {
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: {width: 0, height: 1},
                shadowOpacity: 0.1,
                shadowRadius: 5,
            },
            android: {
                elevation: 5,
            },
        }),
    },
});