import React, { Component } from 'react'
import { navigationOptions } from 'react-navigation'
import { View, FlatList, Text } from 'react-native'
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
      <View style={{backgroundColor: 'pink'}}>
        <Text>{item.title}</Text>
        <Text>{item.author}</Text>
      </View>
    )
  }
  render() {
    console.log('this.props', this.props)
    return (
      <View style={{backgroundColor: 'red', flex: 1}}>
      <FlatList
        data={this.props.feedList.data}
        renderItem={items=>this.renderContent(items)}
      />
      </View>
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

