import React from 'react';
import { TouchableOpacity, Text, View, Dimensions, Image, Animated, PanResponder } from 'react-native';
import { Octicons } from "@expo/vector-icons";


const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const Users = [
    { id: "1", uri: require('../../assets/demo/image1.jpeg') },
    { id: "2", uri: require('../../assets/demo/image2.png') },
    { id: "3", uri: require('../../assets/demo/image3.png') },
    { id: "4", uri: require('../../assets/demo/image4.png') },
    { id: "5", uri: require('../../assets/demo/image5.png') },
    { id: "6", uri: require('../../assets/demo/image6.png') },
]

export default class SwipeCards extends React.Component {

    constructor() {
        super();

        this.position = new Animated.ValueXY();
        this.state = {
            currentIndex: 0
        };

        this.rotate = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH /2 ,0, SCREEN_WIDTH /2],
            outputRange: ['-30deg', '0deg', '10deg'],
            extrapolate: 'clamp'
        });

        this.rotateAndTranslate = {
            transform: [{
                rotate: this.rotate
            },
            ...this.position.getTranslateTransform()
            ]
        };

        this.likeOpacity = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: [0, 0, 1],
            extrapolate: 'clamp'
        });
        this.dislikeOpacity = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: [1, 0, 0],
            extrapolate: 'clamp'
        });

        this.nextCardOpacity = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: [1, 0, 1],
            extrapolate: 'clamp'
        });
        this.nextCardScale = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: [1, 0.8, 1],
            extrapolate: 'clamp'
        });
    }

    UNSAFE_componentWillMount() {
        this.PanResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onPanResponderMove: (evt, gestureState) => {
                this.position.setValue({ x: gestureState.dx, y: gestureState.dy })
            },
            onPanResponderRelease: (evt, gestureState) => {
                if (gestureState.dx > 120) {
                    Animated.spring(this.position, {
                        toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy }
                    }).start(() => {
                        this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
                            this.position.setValue({ x: 0, y: 0 })
                        })
                    });
                }
                else if (gestureState.dx < -120) {
                    Animated.spring(this.position, {
                        toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy }
                    }).start(() => {
                        this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
                            this.position.setValue({ x: 0, y: 0 })
                        })
                    });
                }
                else {
                    Animated.spring(this.position, {
                        toValue: { x: 0, y: 0 },
                        friction: 4
                    }).start();
                }
            }
        });
    }

    renderUsers = () => {
        return Users.map((item, i) => {
            if (i < this.state.currentIndex) {
                return null;
            }
            else if (i == this.state.currentIndex) {
                return (
                    <Animated.View
                        {...this.PanResponder.panHandlers}
                        key={item.id}
                        style={[this.rotateAndTranslate, { height: SCREEN_HEIGHT - 120, width: SCREEN_WIDTH, padding: 10, position: 'absolute' }]}
                    >
                        <Animated.View style={{ opacity: this.likeOpacity, transform: [{ rotate: '-30deg' }], position: 'absolute', top: 50, left: 40, zIndex: 1000 }}>
                            <Text style={{ borderWidth: 2, borderColor: 'green', borderRadius: 35, color: 'green', fontSize: 20, fontWeight: '800', paddingHorizontal: 15, paddingVertical: 8 }}>LIKE</Text>
                        </Animated.View>

                        <Animated.View style={{ opacity: this.dislikeOpacity, transform: [{ rotate: '30deg' }], position: 'absolute', top: 50, right: 40, zIndex: 1000 }}>
                            <Text style={{ borderWidth: 2, borderColor: 'red', borderRadius: 35, color: 'red', fontSize: 20, fontWeight: '800', paddingHorizontal: 15, paddingVertical: 8 }}>NOPE</Text>
                        </Animated.View>

                        <Image
                        style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 20 }}
                        source={item.uri} />

                    </Animated.View>
                )
            }
            else {
                return (
                    <Animated.View
                        key={item.id}
                        style={{
                            opacity: this.nextCardOpacity,
                            transform: [{ scale: this.nextCardScale }],
                            height: SCREEN_HEIGHT - 120, width: SCREEN_WIDTH, padding: 10, position: 'absolute'
                        }}
                    >
                        <Animated.View style={{ opacity: 0, transform: [{ rotate: '-30deg' }], position: 'absolute', top: 50, left: 40, zIndex: 1000 }}>
                            <Text style={{ borderWidth: 1, borderColor: 'green', color: 'green', fontSize: 32, fontWeight: '800', padding: 10 }}>LIKE</Text>
                        </Animated.View>

                        <Animated.View style={{ opacity: 0, transform: [{ rotate: '30deg' }], position: 'absolute', top: 50, right: 40, zIndex: 1000 }}>
                            <Text style={{ borderWidth: 1, borderColor: 'red', color: 'red', fontSize: 32, fontWeight: '800', padding: 10 }}>NOPE</Text>
                        </Animated.View>

                        <Image
                        style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 20 }}
                        source={item.uri} />

                    </Animated.View>
                )
            }
        }).reverse();
    }

    reset = () => {
        this.state.currentIndex = 0;
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                {this.renderUsers()}

                <TouchableOpacity
                    onPress={() => {
                        this.reset();
                    }}
                    style={{margin: 10, backgroundColor: "#fff", padding: 10, borderRadius: 30, width: 45}}
                >
                    <Octicons
                        name="eye"
                        size={25}
                        style="grey"
                    />
                </TouchableOpacity>
            </View>
        );
    }
}