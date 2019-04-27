import React, { Component } from 'react'
import { 
  View, 
  Text, 
  StyleSheet, 
  Button, 
  TextInput, 
  Dimensions, 
  TouchableOpacity 
} from 'react-native'

const { width, height } = Dimensions.get('window')

export default class LoginContainer extends Component {
    render() {
      return (
        <View style={styles.container}>
          <View style={{
            flexDirection: 'row', 
            alignItems: 'center', 
            paddingHorizontal:30, 
            width, 
            justifyContent: 'space-between' 
          }}>
            <TextInput
              style={{
                height: 40, 
                borderColor: 'gray', 
                borderWidth: 1, 
                borderBottomWidth:0,
                width: width - 60, 
                paddingHorizontal: 10,
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
              style={{height: 40, borderColor: 'gray', borderWidth: 1, width: width - 60, paddingHorizontal: 10}}
              // onChangeText={(text) => this.setState({text})}
              // value={this.state.text}
              placeholder={'Password'}
            />
          </View>
          <View>
            <TouchableOpacity onPress={()=>alert('Hi')}>
              <View style={{width: width-60, height: 40, backgroundColor:'pink', alignItems: 'center', justifyContent: 'center'}}>
                <Text>
                  Sign In
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')}>
              <Text>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'beige'
  }
})