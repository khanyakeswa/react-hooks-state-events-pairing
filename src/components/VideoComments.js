import React from 'react'

const VideoComments = ({ comments }) => {
  const renderedComments = comments.map((comment) => {
    return <div key={comment.id}>
        <h3>{comment.user}</h3>
        <p>{comment.comment}</p>
    </div>
  })

  return <div>{renderedComments}</div>
}

export default VideoComments
