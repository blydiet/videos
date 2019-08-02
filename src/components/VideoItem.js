import React from 'react'

 export const VideoItem  = ({video}) => {
    return (
      // <ul>
      // <li>{vide}</li>
      // </ul>
      <div>
        <h1>{video.snippet.title}</h1>
        <p>{video.snippet.description}</p>
      </div>
    )
}