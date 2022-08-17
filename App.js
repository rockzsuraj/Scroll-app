import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Dimensions, ScrollView, Button, Alert } from 'react-native';

var screenWidth = Dimensions.get('window').width;

export default class ButtonBasics extends React.Component {
  render() {
    return (
      <View style={styles.MainContainer}>
        <View style={styles.ButtonViewContainer}>
          <View style={styles.ButtonContainer}>
            <Button title="Screen 1" onPress={()=>{this.scroll.scrollTo({x:0})}}/>
          </View>
          <View style={styles.ButtonContainer}>
            <Button title="Screen 2" onPress={()=>{this.scroll.scrollTo({x:screenWidth})}} />
          </View>
        </View>
        <ScrollView
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          ref={(node)=> this.scroll = node}
        >
          <View style={styles.ScrollContainer}>
            <Text style={styles.ScrollTextContainer}>
              Screen 1
              </Text>
          </View>
          <View style={styles.ScrollContainer}>
            <Text style={styles.ScrollTextContainer}>
              Screen 2
              </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: '#abe3a8',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

  },
  ScrollContainer: {
    backgroundColor: '#cdf1ec',
    flexGrow: 1,
    marginTop: 0,
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center'
  },
  ScrollTextContainer: {
    fontSize: 20,
    padding: 15,
    color: '#000',
    textAlign: 'center'
  },
  ButtonViewContainer: {
    flexDirection: 'row',
    paddingTop: 35,
  },
  ButtonContainer: {
    padding: 30,
  },
});


// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => ButtonBasics);
