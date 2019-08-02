import React from 'react'

 export const VideoItem  = ({video}) => {
    return (
      // <ul>
      // <li>{vide}</li>
      // </ul>
      <div>
        <h1>{video.snippet.title}</h1>
        <img src={video.snippet.thumbnails.medium.url} />
      </div>
    )
}