/**
 * Created by fanhl on 2016/11/3.
 */
'use strict';//使用严格模式
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Platform,
} from 'react-native';
import LinToastAndroid from './LinToastAndroid';

import {NativeModules} from 'react-native';
const CalendarManager = NativeModules.CalendarManager;
CalendarManager.addEvent('Birthday Party', '4 Privet Drive, Surrey');

export default class NativeCodeDemo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.toast}>
                    <Text style={styles.welcome}>
                        Click here to call native module.(Android only)
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

    toast = () => {
        if (Platform.OS === 'android') {
            LinToastAndroid.show('Awesome', LinToastAndroid.SHORT);
        }
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});