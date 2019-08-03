import React from 'react'

export default class VideoDetails extends React.Component{
  constructor(props){
    super(props)
    
  }
  render(){
    return(
      <div>
        <p>{this.props.selectedVideo.description}</p>
      </div>
    )
  }
}