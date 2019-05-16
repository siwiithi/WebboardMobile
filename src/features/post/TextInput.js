import React from 'react'
import { TextInput, Text, View } from 'react-native'

export default function CustomTextInput(props) {
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
    <View style={{marginVertical: 10, backgroundColor: "rgba(230, 228, 204, 1)"}}>
      <TextInput
        {...inputProps}
        onChangeText={input.onChange}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        value={input.value}
        style={{borderBottomWidth: 1}}
      />
      { touched && error && 
        <Text style={{color: 'red'}}>{error}</Text>
      }
    </View>
  )
}