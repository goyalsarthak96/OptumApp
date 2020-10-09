import React, { useRef, useEffect } from 'react';
import { Animated, Text, View, Image } from 'react-native';
import FadeInView from './FadeIn'

export default function FadeInParent() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
          <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
          <Image  source={require('./icons/optum_2x.png')}/>
        </FadeInView>
      </View>
    )
  }