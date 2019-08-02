import axios from 'axios'
const KEY = "AIzaSyAp--xh2vkqKXKvLjCYR6opQUdafhOIrwo"

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params:{
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
})

//The idea behind this base URL is so I can get its instance latter on 
// so I can say youtube.get('/search')
// the search will be taken and appended to the end of the Url 