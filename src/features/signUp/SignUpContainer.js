import React, { Component } from 'react'
import { Text, ScrollView, View, TouchableOpacity } from 'react-native'
import { reduxForm, Field } from 'redux-form'

import CustomTextInput from './CustomTextInput'
import validate from './signUpFormValidation'

class SignUpContainer extends Component {
    static navigationOptions = {
        headerTitle: 'Sign Up'
    }
    handleSubmit = () => {
      this.props.navigation.navigate('SignUpComplete')
    }
    render(){
        return (
          <ScrollView style={{paddingHorizontal: 20, marginTop: 40}}>
            <Text>Name</Text>
            <Field
              name={'name'}
              component={CustomTextInput}
            />
            <Text>Surname</Text>
            <Field
              name={'surname'}
              component={CustomTextInput}
            />
            <Text>Username</Text>
            <Field
              name={'username'}
              component={CustomTextInput}
            />
            <Text>E-mail</Text>
            <Field
              name={'email'}
              component={CustomTextInput}
            />
            <Text>Password</Text>
            <Field
              name={'password'}
              component={CustomTextInput}
            />
            <Text>Re-password</Text>
            <Field
              name={'repassword'}
              component={CustomTextInput}
            />
            <TouchableOpacity onPress={this.props.handleSubmit(this.handleSubmit)}>
              <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', height: 40}}>
                <Text>Submit</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        )
    }
}

export default reduxForm({
  form: 'signUp',
  validate
})(SignUpContainer)