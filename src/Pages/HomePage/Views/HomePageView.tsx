import {RootTabScreenProps} from "../../../types";
import React from "react";
import {StyleSheet, Text, View} from 'react-native';


export default function HomePageView({ navigation }: RootTabScreenProps<'Home'>) {
    return (
        <View>
            <Text>
                Home
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
