import React, {useState, useEffect} from 'react';

// import all the components we are going to use
import {Text, View, StyleSheet, Image} from 'react-native';

const ThirdScreen = () => {



  return (
    <View style={styles.container}>
      <Text style={styles.paragraphStyle}>
        Diseases Screen
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraphStyle: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default ThirdScreen;