import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../API/youtube'
import {VideoList} from './VideoList'
export default class App extends React.Component{
  constructor(props){
    super(props)
   this.state = {
     videos: []
   }
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this)
  }
  async handleSearchSubmit(searchInput) {
     let  {data} = await youtube.get('/search', { params: {
       q: searchInput
     }})
     this.setState({videos: data.items})
    
  }
  render(){
    return(
      <div className="ui container">
       <SearchBar handleSearchSubmit={this.handleSearchSubmit}/>  <VideoList videos = {this.state.videos} />
      </div>
    )
  }
}
