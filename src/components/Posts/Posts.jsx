import React from 'react';
import PostCard from './PostCard';
import PostForm from './PostForm';
import { Card } from 'semantic-ui-react';

const Posts = (props) => {
  const { postsData, addPost, deletePost,  addComment } = props;

  const postsElements = postsData
  .map(post => <PostCard 
    key={post.id} 
    post={post} 
    deletePost={deletePost} 
    addComment={addComment}/>)

  return (
    <Card.Group>
      {postsElements}
      <PostForm onSubmit={addPost} />
    </Card.Group>
  );
}

export default Posts;