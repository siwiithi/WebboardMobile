import React, { Component } from "react"
import { NavigationActions } from 'react-navigation'
import { View, Text, ScrollView, TouchableOpacity } from "react-native"
import {CustomTextInput, MultilineTextInput} from "./TextInput"
import { reduxForm, Field } from "redux-form"
import validate from "./validation"
import { createPost } from './redux/actionCreators'
import { connect } from 'react-redux'
import { editPost } from './redux/actionCreators'

const submit = (values, dispatch, props) => {
  { Boolean(props.initData) 
    ? 
      dispatch(editPost(props.initData.id, values)) 
    : 
      dispatch(createPost(values))
  }
  props.onNavigate()
}

  function CreatePostForm (props){
   const { handleSubmit, submitting } = props
    return (
      <ScrollView style={{paddingHorizontal: 20, marginTop: 40}}>
        <Text style={{fontWeight: 'bold', color: 'rgba(59, 117, 241, 0.95)'}}>AUTHOR</Text>
        <Field
          name={'author'}
          component={CustomTextInput}
          type='text'
        />
        <Text style={{fontWeight: 'bold', color: 'rgba(59, 117, 241, 0.95)'}}> TITLE</Text>
        <Field
          name={'title'}
          component={CustomTextInput}
        />
        <Text style={{fontWeight: 'bold', color: 'rgba(59, 117, 241, 0.95)'}}>E-MAIL</Text>
        <Field
          name={'email'}
          component={CustomTextInput}
        />
        <Text style={{fontWeight: 'bold', color: 'rgba(59, 117, 241, 0.95)'}}>DETAIL</Text>
        <Field
          name={'detail'}
          component={MultilineTextInput}
        />
        <View style={{marginTop: 20}}>
        <TouchableOpacity onPress={handleSubmit(submit)} submitting={submitting}>
          <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: "rgba(245, 236, 107, 0.95)", height: 40}}>
            <Text style={{fontWeight: 'bold'}}>SUBMIT</Text>
          </View>
        </TouchableOpacity>
        </View>
      </ScrollView>
    )
}

const mapStateToProps = (state, props) =>{
  return ({
    initialValues: {
      author: props.initData.author, 
      title:  props.initData.title,
      email:  props.initData.email,
      detail: props.initData.detail
    } || {}
})}

export default connect(mapStateToProps)(reduxForm({
  form: "createPost",
  validate,
  enableReinitialize: true,
})(CreatePostForm))