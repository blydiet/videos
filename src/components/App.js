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
  async handleSearchSubmit(searchInput) {
     let  {data} = await youtube.get('/search', { params: {
       q: searchInput
     }})
     this.setState({videos: data.items})
     
  }
  async handleSelectedVideoClick(selectedVideo){
    let video = this.state.videos.map((video) => {
      if (video.snippet.title === selectedVideo) {
         return video
      }
    })
    video = video.filter((singleVideo) => singleVideo !== undefined )
    let videoSelected = video.pop()
    await this.setState({selectedVideo: videoSelected.snippet}) 
  }
  render(){
    return(
      <div className="ui container">
       <SearchBar handleSearchSubmit={this.handleSearchSubmit}/>  <VideoList videos={this.state.videos} handleSelectedVideoClick={this.handleSelectedVideoClick} />
       <VideoDetails selectedVideo = {this.state.selectedVideo}/>
      </div>
    )
  }
}
