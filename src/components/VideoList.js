import React from 'react'

export  const VideoList = ({videos}) => { 
  console.log(videos) 
    return (
      
      <div>
       {
        videos.map((video, index) => 
             <ul key={index}>
              <li>{video.snippet.title}</li>
             </ul>
         )
         
       }
      </div>
    )

}