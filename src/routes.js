import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import { LoginContainer, SignUpContainer, FeedContainer } from './features'
import SignUpComplete from './features/signUp/SignUpComplete'

const AppNavigator = createStackNavigator(
    {
      Login: LoginContainer,
      Signup: SignUpContainer,
      SignUpComplete: SignUpComplete,
      Feed: FeedContainer
    },
    {
      initialRouteName: 'Feed',
    }
  );

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer
