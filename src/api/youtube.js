import axios from 'axios'

const KEY = 'AIzaSyCtx78sRihA1yb1bunEFah0M1fOg4E4-9o'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
})
