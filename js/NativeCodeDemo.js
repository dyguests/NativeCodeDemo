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
} from 'react-native';
import LinToastAndroid from './LinToastAndroid';

export default class NativeCodeDemo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.toast}>
                    <Text style={styles.welcome}>
                        Welcome NativeCodeDemo
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

    toast = () => {
        LinToastAndroid.show('Awesome', LinToastAndroid.SHORT);
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