import React, { Component } from "react"
import { View, Text, ScrollView, TouchableOpacity } from "react-native"
import TextInput from "../signUp/CustomTextInput"
import { reduxForm, Field } from "redux-form"
import validate from "./validation"
import { createPost } from './redux/actionCreators'

class CreatePostForm extends Component {
  render() {
    return (
      <ScrollView style={{paddingHorizontal: 20, marginTop: 40}}>
        <Text style={{fontWeight: 'bold', color: 'rgba(59, 117, 241, 0.95)'}}>AUTHOR</Text>
        <Field
          name={'author'}
          component={TextInput}
        />
        <Text style={{fontWeight: 'bold', color: 'rgba(59, 117, 241, 0.95)'}}> TITLE</Text>
        <Field
          name={'title'}
          component={TextInput}
        />
        <Text style={{fontWeight: 'bold', color: 'rgba(59, 117, 241, 0.95)'}}>E-MAIL</Text>
        <Field
          name={'email'}
          component={TextInput}
        />
        <Text style={{fontWeight: 'bold', color: 'rgba(59, 117, 241, 0.95)'}}>DETAIL</Text>
        <Field
          name={'detail'}
          component={TextInput}
        />
        <View style={{marginTop: 20}}>
        <TouchableOpacity onPress={this.props.onSubmit}>
          <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: "rgba(245, 236, 107, 0.95)", height: 40}}>
            <Text style={{fontWeight: 'bold'}}>SUBMIT</Text>
          </View>
        </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
}

export default reduxForm({
  form: "createPost",
  validate
})(CreatePostForm)