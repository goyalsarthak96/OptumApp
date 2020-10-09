import { StatusBar } from 'expo-status-bar';
import React, { PureComponent } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import QueueHome from './screen/QueueHome'
import Navigator from './routes/navigationStack'

export default function App(){
  return (
    <Navigator/>
  );
}

//{item.severity>4?styles.highsevere:styles.lowsevere}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical : 30,
    padding : 25,
    backgroundColor : '#fff',
    flexDirection:'row',
    alignItems : 'center'
  },
  logo : {
  
    flex : 1,
    resizeMode : 'contain',
    width : undefined,
    height : undefined,
    alignSelf : 'stretch'

  }
 
   
  });
