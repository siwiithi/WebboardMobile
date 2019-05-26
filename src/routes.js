import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import {CreatePostContainer, WelcomePage, SignUpContainer, FeedContainer, LoginContainer } from './features'
import SignUpComplete from './features/signUp/SignUpComplete'

const AppNavigator = createStackNavigator(
    {
      Welcome: WelcomePage,
      Login: LoginContainer,
      Signup: SignUpContainer,
      SignUpComplete: SignUpComplete,
      Feed: FeedContainer,
      CreatePost: CreatePostContainer
    },
    {
      initialRouteName: 'Welcome',
    }
  );

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer
