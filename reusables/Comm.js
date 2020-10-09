import React, { PureComponent } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Communications from 'react-native-communications';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';

export default function Comm({item}) {

 
        return (
        <View style = {styles.container}>
            <Icon name='phone' color='green' backgroundColor= 'green' raised onPress = {() => Communications.phonecall(item.phoneNumber, false)}/>
            <Icon name='email' color = '#298BF6' raised onPress = {() => Communications.email([item.email], null, null, 'Optum App', 'Welcome to Optum App')}/>
            <Icon name='sms' color = '#DAC82A' raised onPress = {() => Communications.text(item.phoneNumber, 'Welcome text from optum')}/>
            
        </View>   
    );}

    

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:'row',
      alignItems : 'center'
    }
})