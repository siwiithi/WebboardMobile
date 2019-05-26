import React, { Component } from "react"
import { View, Text, ScrollView, TouchableOpacity, ImageBackground } from "react-native"
import { navigationOptions } from "react-navigation"
import CreatePostForm from './CreatePostForm'
import { getPostList } from '../feed/redux/actionCreators'
import { connect } from 'react-redux'
import { clearForm } from './redux/actionCreators'

class CreatePostContainer extends Component {
  static navigationOptions = () => {
    return {
      headerTitle: "Create post",
      headerBackTitle: null
    }
  }

  componentWillUnmount() {
    this.setState({ isEditPost: false })
    this.props.clearForm()
  }

  render() {
    return (
      <ImageBackground source={{uri: "https://i.pinimg.com/564x/03/c0/b6/03c0b6e56dcbd7c712842f6c68cac404.jpg"}} style={{ width: "100%", height: "100%" }}>    
        <CreatePostForm 
          onNavigate={
            (dispatch) =>this.props.navigation.navigate({
              routeName: 'Feed', 
              action: () => dispatch(getPostList())
            })
        }
        initData={this.props.data}
        />
      </ImageBackground>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  clearForm: () => dispatch(clearForm())
})

const mapStateToProps = (state) => {
  const data = state.featureReducers.currentData.currentData
  return({data})
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePostContainer)

