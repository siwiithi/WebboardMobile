import React, { Component } from "react"
import { 
  View, 
  Text, 
  Input, 
  ImageBackground, 
  Dimensions, 
  TextInput,
  TouchableOpacity 
} from "react-native"

const { width, height } = Dimensions.get('window')

export default class LoginContainer extends Component {
  static navigationOptions = {
    headerTitle: 'Sign In'
}
  render() {
    return(
      <ImageBackground source={{ uri: 'https://i.pinimg.com/564x/ba/76/38/ba76386166a96aaeb9ebe182cf7fc46f.jpg'}} style={{width: '100%', height: '100%'}}>
      <View style={{flex:1, alignItems: "center", marginTop: 50}}>
        <View style={{marginBottom: 50}}>
          <Text style={{fontSize: 24}}>Welcome back!</Text>
          <Text style={{fontSize: 14}}>Sign in with your account</Text>
        </View>
        <View style={{
          flexDirection: 'row', 
          alignItems: 'center', 
          paddingHorizontal:30, 
          paddingBottom:10,
          width, 
          justifyContent: 'space-between' 
        }}>
          <TextInput
            style={{
              height: 40, 
              borderColor: 'rgba(183, 185, 157, 1)', 
              borderWidth: 1, 
              width: width - 60, 
              paddingHorizontal: 10,
              backgroundColor: "rgba(183, 185, 157, 0.5)"
            }}
            placeholder={'Username or email'}
            // onChangeText={(text) => this.setState({text})}
            // value={this.state.text}
          />
        </View>
        <View style={{
          flexDirection: 'row', 
          alignItems: 'center',  
          paddingHorizontal:30, 
          width,
          justifyContent: 'space-between',
        }}>
          <TextInput
            style={{
              height: 40, 
              borderColor: 'rgba(183, 185, 157, 1)', 
              borderWidth: 1, 
              width: width - 60, 
              paddingHorizontal: 10, 
              backgroundColor: "rgba(183, 185, 157, 0.5)"
            }}
            // onChangeText={(text) => this.setState({text})}
            // value={this.state.text}
            placeholder={'Password'}
          />
        </View>
        <View style={{borderWidth: 1, marginTop: 10, backgroundColor:  "rgba(247, 94, 94, 1)", borderColor: "rgba(197, 173, 145, 1)"}}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Feed')}>
            <View style={{width: width-60, height: 40,  alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontWeight: "bold", fontSize: 18}}>Sign in</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      </ImageBackground>
    )
  }
}