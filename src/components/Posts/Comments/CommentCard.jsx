import React from 'react';
import { Comment } from 'semantic-ui-react'

const CommentCard = (props) => {
  const { comment } = props;

  return (
    <Comment>
      <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
      <Comment.Content>
        <Comment.Author as='a'>Pavel</Comment.Author>
        <Comment.Text>{comment.body}</Comment.Text>
      </Comment.Content>
    </Comment>
  );
}

export default CommentCard;