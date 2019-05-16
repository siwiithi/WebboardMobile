import React, { Component } from 'react'
import { navigationOptions } from 'react-navigation'
import { View, FlatList, Text, ImageBackground, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { getPostList } from './redux/actionCreators'

class FeedContainer extends Component {
  constructor(props) {
    super(props)
    this.renderContent = this.renderContent.bind(this)
  }
  static navigationOptions =({navigation}) => {
    return {
        title: 'Welcome',
        headerLeft: null,
        headerRight: 
          <TouchableOpacity onPress={() => navigation.navigate('CreatePost')}>
            <View style={{marginRight: 5, borderRadius: 15, width:30, height:30, backgroundColor: "rgba(92, 173, 139, 1)", alignItems: "center", justifyContent: "center"}}>
              <Text style={{fontSize: 22, color:"white"}}>+</Text>
            </View>
          </TouchableOpacity>
    }  
}
  componentDidMount() {
    console.log('didmoint')
    console.log(getPostList)
   this.props.getPostList()
  }
  renderContent(items) {
    console.log('items', items)
    const { item } = items
    return(
      <View 
        style={{
          backgroundColor: 'white', 
          borderRadius: 20, 
          marginBottom: 10, 
          paddingHorizontal: 20, 
          paddingVertical: 20, 
        }}>
        <Text style={{fontWeight: "bold", fontSize: 14}}>{item.author}</Text>
        <Text style={{fontWeight: "bold", fontSize: 20}}>{item.title}</Text>
        <Text style={{ fontStyle: "italic", color: "#795725"}}>{item.email}</Text>
        <View style={{marginTop: 20}}>
          <Text>{item.detail}</Text>
        </View>
        <View 
          style={{
            width: 80, 
            borderRadius: 20, 
            borderWidth: 1, 
            marginTop: 10, 
            backgroundColor:  "rgba(161, 115, 104, 1)",
            borderColor: "rgba(161, 115, 104, 1)",
            justifyContent: "flex-end",
            alignSelf: "flex-end"
          }}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Feed')}>
            <View style={{ height: 40,  alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontWeight: "bold", fontSize: 18, color: "white"}}>EDIT</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  render() {
    console.log('this.props', this.props)
    return (
      <ImageBackground 
        source={{ uri: 'https://i.pinimg.com/564x/6a/d1/fd/6ad1fda81757cc42fc0a1489c0edbd7d.jpg'}} 
        style={{width: '100%', height: '100%'}}
      >
      <View style={{ flex: 1, marginTop: 10, paddingHorizontal: 10}}>
      <FlatList
        data={this.props.feedList.data}
        renderItem={items=>this.renderContent(items)}
      />
      </View>
    </ImageBackground>
    )
  }
}

export const mapStateToProps = state => {
  const feedList = state.featureReducers.feeds
  return ({
    feedList
  })
}

const mapDispatchToProps = dispatch => ({
  getPostList: () => dispatch(getPostList())
})

export default connect(mapStateToProps, mapDispatchToProps)(FeedContainer)

