import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Animated
} from "react-native";
import { BottomMenuItem } from "./BottomMenuItem";


export const BottomTabBar = ({ state, descriptors, navigation }) => {
    const windowWidth = Dimensions.get("window").width ;
    const totalWidth = windowWidth - 100;
    const tabWidth = totalWidth / state.routes.length;
    const [translateValue] = useState(new Animated.Value(0));

    return (
        <View style={[style.tabContainer, { width: windowWidth }]}>
            <View style={[style.tabRow, { minWidth: totalWidth }]}>
                <Animated.View
                    style={[
                        style.slider, {
                            transform: [{ translateX: translateValue }],
                            width: tabWidth - 20,
                        },
                    ]}
                />

                {state.routes.map( (route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                        (options.tabBarLabel !== undefined)
                        ? options.tabBarLabel
                        : (options.title !== undefined)
                        ? options.title
                        : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: "tabPress",
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }

                        Animated.spring(translateValue, {
                            toValue: index * tabWidth,
                            velocity: 10,
                            useNativeDriver: true,
                        }).start();
                    }

                    const onLongPress = () => {
                        navigation.emit({
                            type: "tabLongPress",
                            target: route.key,
                        });
                    };

                    return (
                        <TouchableOpacity
                            accessibilityRole="button"
                            accessibilityStates={isFocused ? ["selected"] : []}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={{ flex: 1 }}
                            key={index}
                        >
                            <BottomMenuItem
                                iconName={label.toString().toLowerCase()}
                                isCurrent={isFocused}
                            />
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    tabContainer: {
        height: 50,
        position: "absolute",
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
    },

    tabRow: {
        height: 50,
        shadowOffset: {
            width: 0,
            height: -1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4.0,
        backgroundColor: "white",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        elevation: 10,
        flexDirection: 'row'
    },

    slider: {
        height: 4,
        position: "absolute",
        top: 0,
        left: 10,
        backgroundColor: "tomato",
        borderRadius: 10,
        width: 50
    },
});