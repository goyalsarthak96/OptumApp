import { StatusBar } from 'expo-status-bar';
import React, { PureComponent } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default function MemberHome({navigation}) {
    return (
        <View>
            <Text>data for member</Text>
    <Text> {navigation.getParam('memberid')}</Text>
    <Text> {navigation.getParam('name')}</Text>
    <Text> {navigation.getParam('severity')}</Text>
    </View>
    )
}