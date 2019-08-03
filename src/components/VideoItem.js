import React from 'react'
import './VideoItem.css'
 export const VideoItem  = ({video,handleSelectedVideoClick}) => {
    return (
      <div className="video-item item">
          <img className="ui image"  src={video.snippet.thumbnails.medium.url} />
          <div className='content'>
            <div onClick={() => handleSelectedVideoClick(video.snippet.title)} className='header'>{video.snippet.title}</div> 
          </div>
        </div>
    )
}