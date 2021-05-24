import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export const AuthContext = React.createContext();


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider
            value={{
                user,

                loadUser: async () => {
                    let user = await AsyncStorage.getItem('user');
                    user = JSON.parse(user);
                    setUser(user);
                },

                createUser: async () => {
                    let user = {};
                    setUser(user);
                    await AsyncStorage.setItem('user', JSON.stringify(user));
                },

                // Update current user values
                updateUser: async (updateBlob = null) => {
                    if (updateBlob){
                        try{
                            updatedUserBlob = user;

                            for (var property in updateBlob){
                                updatedUserBlob[property] = updateBlob[property];
                            }

                            setUser(updatedUserBlob);
                            await AsyncStorage.setItem('user', JSON.stringify(updatedUserBlob));
                        }
                        catch(err){
                            Alert.prompt('Error', err);
                        }
                    }
                }
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
