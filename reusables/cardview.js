import React from 'react';
import {StyleSheet, View} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'

export default function CardView(props) {
    return (
        <View style = {styles.card}>
            <LinearGradient
                    colors={['#ff751a','#ebebe0']}
                    start={{x:0,y:0}}
                    end={{x:1,y:1}}
                >
            <View style = {styles.cardContent}>
            {props.children}
            </View>
            </LinearGradient>
        </View> 
    )
}

const styles = StyleSheet.create({
    card : {
        borderRadius : 16,
        elevation : 3,
        backgroundColor : '#fff',
        shadowOffset : {
            width : 1,
            height : 1
        },
        shadowColor : '#0000b3',
        shadowOpacity : 0.3,
        shadowRadius : 7,
        marginVertical : 9,
        borderColor : '#0000b3'
    },
    cardContent : {
        flexDirection : 'row',
        marginHorizontal : 18,
        marginVertical : 8,
        alignItems : 'center'
    }

    
});