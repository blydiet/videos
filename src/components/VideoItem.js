import React from 'react'
import './VideoItem.css'
 export const VideoItem  = ({video,handleSelectedVideoClick}) => {
    return (
      <div onClick={() => handleSelectedVideoClick(video)} className="video-item item">
          <img className="ui image" alt="No videos to show" src={video.snippet.thumbnails.medium.url} />
          <div className='content'>
            <div className='header'>{video.snippet.title}</div> 
          </div>
        </div>
    )
}