import video from '../data/video.js'
import VideoDetails from './VideoDetails'
import VideoComments from './VideoComments'
import { useState } from 'react'

function App() {
  console.log("Here's your data:", video)

  const [showComments, setShowComments] = useState(true)

  const commentsToggler = () => {
    setShowComments(!showComments)
  }

  return (
    <div className='App'>
      <iframe
        width='919'
        height='525'
        src='https://www.youtube.com/embed/dQw4w9WgXcQ'
        frameBorder='0'
        allowFullScreen
        title='Thinking in React'
      />
      <VideoDetails video={video} commentsToggler={commentsToggler} showComments={showComments}/>
      {showComments ? <VideoComments comments={video.comments} /> : <></>}
    </div>
  )
}

export default App
