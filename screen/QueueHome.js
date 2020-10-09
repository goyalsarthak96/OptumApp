import { StatusBar } from 'expo-status-bar';
import React, { PureComponent } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import CardView from '../reusables/cardview';
import Comm from '../reusables/Comm';


export default function QueueHome({navigation}){
  
  const members = [
    {name:'Name1', key : '1', severity : 4.5, memberid : 'member1', phoneNumber : '1', email: 'sarthak_goyal@optum.com'},
    {name : 'Name2', key : '2', severity: 2.5, memberid: 'member2', phoneNumber : '2', email: 'goyalsarthak96@gmail.com'},
    {name : 'Name3', key : '3', severity: 2.5, memberid: 'member3', phoneNumber : '3', email: 'sarthak_goyal@optum.com'},
    {name : 'Name4', key : '4', severity: 2.5, memberid: 'member4', phoneNumber : '4', email: 'sarthak_goyal@optum.com'},
    {name : 'Name5', key : '5', severity: 0.5, memberid: 'member5', phoneNumber : '5', email: 'sarthak_goyal@optum.com'},
    {name : 'Name6', key : '6', severity: 1.9, memberid: 'member6', phoneNumber : '6', email: 'sarthak_goyal@optum.com'},
    {name : 'Name7', key : '7', severity: 3.9, memberid: 'member7', phoneNumber : '7', email: 'sarthak_goyal@optum.com'},
    {name : 'Name8', key : '8', severity: 1.5, memberid: 'member8', phoneNumber : '8', email: 'sarthak_goyal@optum.com'},
    {name : 'Name9', key : '9', severity: 0.2, memberid: 'member9', phoneNumber : '9', email: 'sarthak_goyal@optum.com'},
    {name : 'Name10', key : '10', severity: 4.2, memberid: 'member10', phoneNumber : '10', email: 'sarthak_goyal@optum.com'},
    {name : 'Name11', key : '11', severity: 2.0, memberid: 'member11', phoneNumber : '11', email: 'sarthak_goyal@optum.com'},
    {name : 'Name12', key : '12', severity: 2.5, memberid: 'member12', phoneNumber : '12', email: 'sarthak_goyal@optum.com'},
    {name : 'Name13', key : '13', severity: 3.6, memberid: 'member13', phoneNumber : '13', email: 'sarthak_goyal@optum.com'}];

  return (
    // <View style={styles.container}>
    //    <TouchableOpacity style = {styles.card}>
    //     <Text style = {styles.cardHeading}>Sarthak Goyal</Text>
    //     <Text style = {styles.cardText}>Individual ID : member1</Text>
    //   </TouchableOpacity>  
    //   <View style = {styles.circle}></View>
    
      
    //   <View style = {styles.container}>
    //     <Text>asdas </Text>
    //   </View>
    
    
    <View style = {styles.container}>
      
      <FlatList style = {styles.FlatList}
        data = {members}
        renderItem={({item}) => (
          <TouchableOpacity onPress = {() => navigation.navigate('MemberHome', item)}>
            <CardView>
              {/* <View style = {styles.flexVertical}> */}
                <View style = {styles.cardTexts}>
                  <Text style = {styles.cardHeading}>{item.name}</Text>
                  <Text style = {styles.cardText}>Individual ID : {item.memberid}</Text>
                  <Comm item={item}/> 
                </View>
                <View style = {item.severity>3.5?styles.highsevere:(item.severity>2.0?styles.mediumsevere:
                    (item.severity>1?styles.lowsevere:styles.notsevere))}>
                  <Text>{item.severity}</Text>
                </View>
            </CardView>
          </TouchableOpacity>
        )}
        />
        </View>
  );
}

//{item.severity>4?styles.highsevere:styles.lowsevere}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    flexDirection : 'row',
    marginVertical : 10,
    padding : 15,
    backgroundColor : '#fff'
  },
  cardHeading : {
    paddingLeft : 20,
    fontSize: 30,
    color : '#ddd',
    
    fontWeight: 'bold'
  },
  cardText : {
    paddingLeft : 20,
    fontSize: 20,
    color : '#aaa'
  },
  FlatList : {
    backgroundColor : '#fff'
  },
  /*card : {
    backgroundColor : "#fff",
    marginBottom: 10,
    marginLeft : '2%',
    width : '96%',
    shadowColor : '#f00',
    shadowOpacity : 1,
    shadowOffset : {
      width : 3,
      height : 10
    }
  }*/
  // card : {
  //   shadowColor: 'rgba(0,0,0, .4)', // IOS
  //   shadowOffset: { height: 1, width: 1 }, // IOS
  //   shadowOpacity: 1, // IOS
  //   shadowRadius: 1, //IOS
  //   backgroundColor: '#fff',
  //   elevation : 2, //Android
  //   justifyContent: 'center',
  //   alignItems : 'flex-start',
  //   width : '96%'
  // },
  circle : {
    width : 75,
    height : 75,
    borderRadius : 75/2,
    backgroundColor : '#fff',
    borderColor : '#0f0',
    borderWidth : 10
  },
  // style1 :
  // {
  //   justifyContent:'center',
  //   alignItems:'center',
  //   alignSelf:'center', 
  //   position:'absolute',
  //   borderWidth : 10,
  //   borderColor : 'red'
  // },
  notsevere : 
    {
      backgroundColor:'#fff',
      borderRadius:10,
      height:75, 
      width:75, 
      borderRadius:75/2,
      borderWidth : 7,
      borderColor : '#00ac46',
      alignItems: 'center',
      justifyContent: 'center',
    },
  lowsevere : 
    {
      backgroundColor:'#fff',
      borderRadius:10,
      height:75, 
      width:75, 
      borderRadius:75/2,
      borderWidth : 7,
      borderColor : '#fdc500',
      alignItems: 'center',
      justifyContent: 'center',
    },
    mediumsevere : 
    {
      backgroundColor:'#fff',
      borderRadius:10,
      height:75, 
      width:75, 
      borderRadius:75/2,
      borderWidth : 7,
      borderColor : '#fd8c00',
      alignItems: 'center',
      justifyContent: 'center',
    },
    highsevere : 
    {
      backgroundColor:'#fff',
      borderRadius:10,
      height:75, 
      width:75, 
      borderRadius:75/2,
      borderWidth : 7,
      borderColor : '#780000',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    cardTexts : {
      flex : 4
    },
    flexVertical : {
      flexDirection : 'column'
    },
    flexHorizontal : {
      flexDirection : 'row'
    },
  });
