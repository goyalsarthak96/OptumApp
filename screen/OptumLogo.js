import { StatusBar } from 'expo-status-bar';
import React, { PureComponent } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import FadeInView from '../FadeIn'




export default class OptumLogo extends React.Component{


  componentDidMount(){
    // Start counting when the page is loaded
    this.timeoutHandle = setTimeout(()=>{
      this.props.navigation.navigate('QueueHome')
    }, 3000);
  };
  
  componentWillUnmount(){
    clearTimeout(this.timeoutHandle); // This is just necessary in the case that the screen is closed before the timeout fires, otherwise it would cause a memory leak that would trigger the transition regardless, breaking the user experience.
  };
  

  
  render() {
  return (
    <View style = {styles.container}>
        {/* <FadeInView> */}
        <FadeInView style={{width: undefined, height: undefined, flex:1}}>
          <Image style = {styles.logo}
            source={require('../icons/optum_2x.png')}
          />
        </FadeInView>
    </View>
  );}


}


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
