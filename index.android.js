/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  StyleSheet,
  View
} from 'react-native';

export default class PANinput extends Component{
  constructor(props) {
    super(props);
    this.focusNextField = this.focusNextField.bind(this);
    // to store our input refs
    this.inputs = {};

    
    this.state = {
      headerText: "Personal Account Number",
      bodyText: "Indian Penal Code requires all brokerages to collect this information"
    }
  }
  focusNextField(key) {
    this.inputs[key].focus();
  }
  
  
  
  
  render(){
    return (
      <View style={{flex:1, backgroundColor: '#002b27'}}>
        
        {/*For back button*/}
        <View style={{flex:0.5}} />
        
        {/*For heading - Personal Account Number*/}
        <View style={styles.headerTextArea}>
          <Text style={styles.headerText}>
            {this.state.headerText}{'\n'}{'\n'}
          </Text>
        </View>

        {/*For the sub-text*/}
        <View style={styles.bodyTextArea}>
          <Text style={styles.bodyText}>
            {this.state.bodyText}{'\n'}{'\n'}
          </Text>
        </View>

        {/* For input field */}
        <View style={styles.inputFieldArea}>
          <View style={styles.inputArea1}>
            <TextInput 
              ref={ input => {this.inputs['one'] = input; }}
              autoFocus={true}
              placeholder="XXXXX" 
              placeholderTextColor="#dddddd"
              autoCorrect={false}
              maxLength={5} 
              autoCapitalize="characters"
              underlineColorAndroid="transparent"
              onChangeText={(text) => {
                if(text.length === 5)
                  this.focusNextField('two')
                
              }}
              style={styles.inputField1} 
            />
          </View>
          <View style={styles.inputArea2}>
            <TextInput 
              ref={ input => {this.inputs['two'] = input; }}
              placeholder="0000"
              placeholderTextColor="#dddddd" 
              maxLength={4}
              keyboardAppearance="dark"
              keyboardType="numeric"
              underlineColorAndroid="transparent" 
              onChangeText={(text) => {
                if(text.length === 4)
                  this.focusNextField('three')
                if(text.length === 0)
                  this.focusNextField('one')
              }}
              style={styles.inputField2} 
            />
          </View>
          <View style={styles.inputArea3}>
            <TextInput 
              ref={ input => {this.inputs['three'] = input; }}
              placeholder="X" 
              placeholderTextColor="#dddddd"
              maxLength={1}
              autoCapitalize="characters"
              underlineColorAndroid="transparent" 
              onChangeText={(text) => {
                if(text.length === 0)
                  this.focusNextField('two')
              }}
              style={styles.inputField3} 
            />
          </View>
        </View>

        <View style={{flex:5}}>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerTextArea: {
    flex:1,
    justifyContent: 'center',
    alignItems:'center',  
  },
  headerText: {
    fontSize: 20,
    fontWeight:'bold',
    color: 'white',
  },
  bodyTextArea: {
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  bodyText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 15,
    color:'white',
  },
  inputFieldArea: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputArea1: {
    width:68,
  },
  inputArea2: {
    width:60,
  },
  inputArea3: {
    width:35,
  },
  inputField1 : {
    color:'white'
  },
  inputField2 : {
    color:'white'
  },
  inputField3 : {
    color:'white'
  },
});


AppRegistry.registerComponent('FirstProject', () => PANinput);