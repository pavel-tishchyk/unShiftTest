import React from 'react';
import { Card, Button, Icon } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';
import Comments from './Comments/Comments';

const PostCard = (props) => {
  const { post, deletePost, addComment } = props;

  const path = `/edit/${post.id}`

  return (
    <Card fluid>
      <Card.Content>
        <Button.Group floated='right'>
          <NavLink to={path} className="ui icon button">
              <Icon name='pencil' />
          </NavLink> 
          <Button
            icon
            onClick={() => deletePost(post.id)}>
              <Icon name='delete' />
          </Button>
        </Button.Group>
        <Card.Header>
          {post.title}
        </Card.Header>
      </Card.Content>
      <Card.Content description={post.body} />
      <Card.Content extra >
        <Comments commentsData={post.comments} addComment={addComment} postId={post.id}/>
      </Card.Content>
    </Card>
  );
}

export default PostCard;