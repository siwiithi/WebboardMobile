import React, { Component } from 'react'
import { navigationOptions } from 'react-navigation'
import { 
  View, 
  FlatList, 
  Text, 
  ImageBackground, 
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native'
import { connect } from 'react-redux'
import { getPostList, deletePost } from './redux/actionCreators'
import { setCurrentData}  from '../post/redux/actionCreators'



class FeedContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { refreshing: false }
    this.renderContent = this.renderContent.bind(this)
    this.onRefresh = this.onRefresh.bind(this)
    this.renderLoading = this.renderLoading.bind(this)
    this.handleEditPost = this.handleEditPost.bind(this)
  }
  static navigationOptions =({navigation}) => {
    return {
        title: 'LET\'S START OF SOMETHING NEW',
        headerLeft: null,
        headerRight: 
          <TouchableOpacity onPress={() => navigation.navigate('CreatePost')}>
            <View style={{marginRight: 5, borderRadius: 15, width:30, height:30, backgroundColor: "rgba(92, 173, 139, 1)", alignItems: "center", justifyContent: "center"}}>
              <Text style={{fontSize: 22, color:"white"}}>+</Text>
            </View>
          </TouchableOpacity>
    }  
}

  onRefresh = () => {
    this.setState({ refreshing: true })
    this.props.getPostList().then(() => {
      this.setState({ refreshing: false })
    })
  }

  handleEditPost = (item) => {
    this.props.setCurrentData(item)
    this.props.navigation.navigate('CreatePost', {isEditPost: true})
  }

  componentDidMount() {
   this.props.getPostList()
  }
  componentDidUpdate(prevProps) {
    if(this.props.feedList.data.length !== prevProps.feedList.data.length) {
      this.props.getPostList()
    }
  }

  renderLoading() {
    return(
      <View>
        <ActivityIndicator size="large" color="white" />
      </View> 
    )
  }

  renderContent(items) {
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
        <View style={{alignItems: 'flex-end'}}>
          <TouchableOpacity onPress={()=>this.props.deletePost(item.id)}>
            <View style={{marginRight: 5, borderRadius: 15, width:30, height:30, backgroundColor: "rgba(204, 51, 51, 1)", alignItems: "center", justifyContent: "center"}}>
              <Text style={{fontSize: 18, color:"white"}}>X</Text>
            </View>
          </TouchableOpacity>
        </View>
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
          <TouchableOpacity onPress={() => this.handleEditPost(item)}>
            <View style={{ height: 40,  alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontWeight: "bold", fontSize: 18, color: "white"}}>EDIT</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  render() {
    const { isFetching } = this.props.feedList
    return (
      <ImageBackground 
        source={{ uri: 'https://i.pinimg.com/564x/6a/d1/fd/6ad1fda81757cc42fc0a1489c0edbd7d.jpg'}} 
        style={{width: '100%', height: '100%'}}
      >
      <View style={{ flex: 1, marginTop: 10, paddingHorizontal: 10}}>
      { isFetching
      ?
        this.renderLoading() 
      : 
        <FlatList
          data={this.props.feedList.data}
          renderItem={items=>this.renderContent(items)}
          refreshing={this.state.refreshing}
          onRefresh={()=>this.onRefresh()}
        />
      }
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
  getPostList: () => dispatch(getPostList()),
  deletePost: (id) => dispatch(deletePost(id)),
  setCurrentData: (item) => dispatch(setCurrentData(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(FeedContainer)

