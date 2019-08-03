import React from 'react'

export default class VideoDetails extends React.Component{
  render(){
    if (!this.props.selectedVideo.snippet){
      return (
        <h1>Loading</h1>
      )
     
    }
    const vidoeSrc = `https://www.youtube.com/embed/${this.props.selectedVideo.id.videoId}`
    return(
      <div>
      <div className="ui embed">
        <iframe title="video title" src={vidoeSrc} />
      </div>
      <div className="ui segment">
        <h4 className="ui header"> {this.props.selectedVideo.snippet.title} </h4>
        <p>{this.props.selectedVideo.snippet.description}</p>
        </div>
      </div>
    )
  }
}