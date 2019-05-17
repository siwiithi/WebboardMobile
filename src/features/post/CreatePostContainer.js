import React, { Component } from "react"
import { View, Text, ScrollView, TouchableOpacity, ImageBackground } from "react-native"
import { navigationOptions } from "react-navigation"
import validate from "./validation"
import { createPost } from './redux/actionCreators'
import CreatePostForm from './CreatePostForm'
import { getFormValues, submit,} from 'redux-form'
import { connect } from 'react-redux'

class CreatePostContainer extends Component {
  static navigationOptions = () => {
    return {
      headerTitle: "Create post",
    }
  }
  handleSubmit = () => {
    console.log('handleSubmit')
    submit('CreatePostForm')
    this.props.createPost()
    this.props.navigation.navigate('Feed')
  }

  render() {
    return (
      <ImageBackground source={{uri: "https://i.pinimg.com/564x/03/c0/b6/03c0b6e56dcbd7c712842f6c68cac404.jpg"}} style={{ width: "100%", height: "100%" }}>    
        <CreatePostForm onSubmit={this.handleSubmit()}/>
      </ImageBackground>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  createPost: () => dispatch(createPost())
})

export default connect(null, mapDispatchToProps)(CreatePostContainer)

