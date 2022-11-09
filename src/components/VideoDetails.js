import { React, useState } from 'react'

const VideoDetails = ({ video, commentsToggler, showComments }) => {
  const upvoteHandler = () => {setUpvotes(upvotes + 1)}

  const downvoteHandler = () => {setDownvotes(downvotes - 1)}

  const [upvotes, setUpvotes] = useState(video.upvotes)
  const [downvotes, setDownvotes] = useState(video.downvotes)

  return (
    <div>
      <h1>{video.title}</h1>
      <span>
        {video.views} Views || Uploaded {video.createdAt}
      </span>
      <br />
      <button onClick={upvoteHandler}>{upvotes}👍</button>
      <button onClick={downvoteHandler}>{downvotes}👎</button>
      <br />
      <button onClick={commentsToggler}>{showComments ? "Hide Comments" : "Show Comments"}</button>
    </div>
  )
}

export default VideoDetails
