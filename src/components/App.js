import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../API/youtube'
import {VideoList} from './VideoList'
import VideoDetails from './VideoDetails'
export default class App extends React.Component{
  constructor(props){
    super(props)
   this.state = {
     videos: [],
     selectedVideo: {}
   }
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this)
    this.handleSelectedVideoClick = this.handleSelectedVideoClick.bind(this)
  }
  async componentDidMount(){
    const {data} = await youtube.get('/search', {
      params: {
        q: 'see'
      }
    })
    this.setState({videos: data.items, selectedVideo: data.items[0]})
  }
  async handleSearchSubmit(searchInput) {
     let  {data} = await youtube.get('/search', { params: {
       q: searchInput
     }})
     console.log(data.items[0])
     this.setState({videos: data.items, selectedVideo: data.items[0]})
     
  }
   handleSelectedVideoClick(selectedVideo){
    this.setState({selectedVideo}) 
  }
  render(){
    return(
      <div className="ui container">
       <SearchBar handleSearchSubmit={this.handleSearchSubmit}/> 
       <VideoDetails selectedVideo = {this.state.selectedVideo}/>
        <VideoList videos={this.state.videos} handleSelectedVideoClick={this.handleSelectedVideoClick} />
      </div>
    )
  }
}
