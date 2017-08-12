import React from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar } from 'react-native';

export default class App extends React.Component {
  render() {
    // fetch('http://192.168.1.100:3000/users')
    // .then((res)=>{
    //   console.log(res);
    //   return res.json()
    // })
    // .then((resJson)=>{
    //   console.log(resJson);
    // }).catch(console.log);
    console.log(StatusBar.currentHeight);
    return (
      <ScrollView style={styles.container}>
        <View style={{ marginTop:StatusBar.currentHeight, height: 200, backgroundColor: 'powderblue'}} >
          <Text>We the best music</Text>
        </View>
        <View style={{ marginTop:0, height: 200, backgroundColor: 'skyblue'}} >
          <Text>All we do is win win win no matter what</Text>
        </View>
        <View style={{ marginTop:0, height: 200, backgroundColor: 'steelblue'}} >
          <Text>Another one</Text>
        </View>
        <View style={{ marginTop:0, height: 200, backgroundColor: 'skyblue'}} >
          <Text>and another one</Text>
        </View>
        <View style={{ marginTop:0, height: 200, backgroundColor: 'steelblue'}} />

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    //marginTop:'5px',
    //alignItems: 'stretch',
    //justifyContent: 'space-around',
  },

});
//
// <Text>Open up App.js to start working on your app!</Text>
// <Text>Changes you make will automatically reload.</Text>
// <Text>Shake your phone to open the developer menu.</Text>
