import React, { Component } from 'react'
import { navigationOptions } from 'react-navigation'
import { 
  View, 
  Text, 
  StyleSheet, 
  Button, 
  TextInput, 
  Dimensions, 
  TouchableOpacity,
  ImageBackground 
} from 'react-native'

const { width, height } = Dimensions.get('window')

export default class WelcomePage extends Component {
  static navigationOptions = {
    header: null
  }
    render() {
      return (
        <ImageBackground source={{ uri: 'https://i.pinimg.com/564x/ba/76/38/ba76386166a96aaeb9ebe182cf7fc46f.jpg'}} style={{width: '100%', height: '100%'}}>
          <View style={styles.container}>
              <View style={{marginBottom: 20, paddingLeft: -50}}>
                <Text style={{fontSize: 50, color: 'gray', fontWeight: "bold"}}>Welcome</Text>
              </View>
              <View style={{marginBottom: 100, alignItems: "flex-end"}}>
                <Text style={{fontSize: 20, color: 'gray', fontWeight: "bold"}}>Idea sharing...</Text>
              </View>
              <View style={{borderWidth: 1, borderRadius: 50, backgroundColor: "rgba(250,163,56,1)", borderColor: "rgba(250,163,56,1)", marginBottom: 10}}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("Login")}>
                  <View style={{width: width-60, height: 50,  alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{fontWeight: "bold", fontSize: 18}}>
                      Sign In
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{borderWidth: 1, borderRadius: 50, backgroundColor: "white", borderColor: "rgba(197, 173, 145, 1)"}}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')}>
                  <View style={{width: width-60, height: 50,  alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{fontWeight: "bold", fontSize: 18}}>Sign up</Text>
                  </View>
                </TouchableOpacity>
              </View>
          </View>
        </ImageBackground>
      )
    }
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
