import React, { Component } from "react"
import { View, Text, ScrollView, TouchableOpacity, ImageBackground } from "react-native"
import { navigationOptions } from "react-navigation"
import TextInput from "../signUp/CustomTextInput"
import { reduxForm, Field } from "redux-form"
import validate from "./validation"

class CreatePostContainer extends Component {
  static navigationOptions = () => {
    return {
      headerTitle: "Create post",
    }
  }
  handleSubmit = () => {
    this.props.navigation.navigate('Feed')
  }

  render() {
    return (
      <ImageBackground source={{uri: "https://i.pinimg.com/564x/03/c0/b6/03c0b6e56dcbd7c712842f6c68cac404.jpg"}} style={{ width: "100%", height: "100%" }}>    
      <ScrollView style={{paddingHorizontal: 20, marginTop: 40}}>
        <Text>AUTHOR</Text>
        <Field
          name={'author'}
          component={TextInput}
        />
        <Text>TITLE</Text>
        <Field
          name={'title'}
          component={TextInput}
        />
        <Text>E-MAIL</Text>
        <Field
          name={'email'}
          component={TextInput}
        />
        <Text>DETAIL</Text>
        <Field
          name={'detail'}
          component={TextInput}
        />
        <View style={{marginTop: 20}}>
        <TouchableOpacity onPress={this.props.handleSubmit(this.handleSubmit)}>
          <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: "rgba(242, 227, 24, 1)", height: 40}}>
            <Text>SUBMIT</Text>
          </View>
        </TouchableOpacity>
        </View>
      </ScrollView>
      </ImageBackground>
    )
  }
}

export default reduxForm({
  form: "createPost",
  validate
})(CreatePostContainer)