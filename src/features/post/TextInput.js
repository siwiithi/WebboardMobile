import React from 'react'
import { TextInput, Text, View } from 'react-native'

export const CustomTextInput = (props) => {
  const { input, meta: { touched, error, warning }, ...inputProps } = props
  const formStates = [
      'active', 
      'autofilled', 
      'asyncValidation', 
      'dirty', 
      'invalid',
      'pristine',
      'submitting',
      'touched',
      'valid',
      'visited'
  ]
  return (
    <View style={{marginVertical: 10}}>
      <TextInput
        {...inputProps}
        onChangeText={input.onChange}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        value={input.value}
        style={{borderBottomWidth: 1, backgroundColor: 'white'}}
      />
      { touched && error && 
        <Text style={{color: 'red'}}>{error}</Text>
      }
    </View>
  )
}

export const MultilineTextInput = (props) => {
  const { input, meta: { touched, error, warning }, ...inputProps } = props
  const formStates = [
      'active', 
      'autofilled', 
      'asyncValidation', 
      'dirty', 
      'invalid',
      'pristine',
      'submitting',
      'touched',
      'valid',
      'visited'
  ]
  return (
    <View style={{marginVertical: 10}}>
      <TextInput
        {...inputProps}
        onChangeText={input.onChange}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        value={input.value}
        style={{borderWidth: 1, height: 200, backgroundColor: 'white', borderRadius: 10}}
        multiline={true}
        maxLength={500}
      />
      { touched && error && 
        <Text style={{color: 'red'}}>{error}</Text>
      }
    </View>
  )
}