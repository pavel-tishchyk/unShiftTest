import React from 'react';
import CommentCard from './CommentCard';
import CommentForm from './CommentForm';
import { Comment, Header } from 'semantic-ui-react';

const Comments = (props) => {
  const { commentsData, addComment, postId } = props;

  const commentsElements = commentsData
    .map(comment => <CommentCard key={comment.id} comment={comment}/>) 

  const onSubmit = (comment) => {
    addComment(comment, postId)
  }

  return (
    <Comment.Group size='mini'>
      <Header as='h5'>
        Comments
      </Header>
      {commentsElements}
      <CommentForm onSubmit={onSubmit} form={`comment_post_${postId}`}/>
    </Comment.Group>
  );
}

export default Comments;