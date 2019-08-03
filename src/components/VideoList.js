import React from 'react'
import {VideoItem} from './VideoItem'
export  const VideoList = ({videos,handleSelectedVideoClick}) => { 
  console.log(videos) 
    return (
      
      <div>
       {
        videos.map((video, index) => 
          <div className="ui relaxed divided list" key={index}>
             <VideoItem video={video} handleSelectedVideoClick={handleSelectedVideoClick}/>
          </div>
         )
         
       }
       
      </div>
    )

}