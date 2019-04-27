import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import { LoginContainer, SignUpContainer } from './features'
import SignUpComplete from './features/signUp/SignUpComplete'

const AppNavigator = createStackNavigator(
    {
      Login: LoginContainer,
      Signup: SignUpContainer,
      SignUpComplete: SignUpComplete
    },
    {
      initialRouteName: 'Login',
    }
  );

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer
