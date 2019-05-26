import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'

class SignUpComplete extends Component {
  render() {
    return(
      <View>
        <Text></Text>
      </View>
    )
  }
}

export const mapStateToProps = state => {
  return({})
}

export default connect(
  mapStateToProps
)(SignUpComplete)
