import React from 'react';
import { compose } from 'redux';
import { withRouter, NavLink } from 'react-router-dom';
import { Form, Card } from 'semantic-ui-react';
import { TextArea, InputField } from 'react-semantic-redux-form';
import { Field, reduxForm } from 'redux-form';

const PostForm = (props) => {
  const { postsData, handleSubmit, initialize, reset, match: { params: { postId } } } = props;

  React.useEffect(() => {
    if(postId) {
      initialize(postsData.find(post => post.id === +postId));
    }
  }, [postId, postsData, initialize]);

  const onSubmit = () => {
    handleSubmit();
    reset();
  }

  return (
    <Card fluid style={{top: '30%'}}>
      <Card.Content>
        <Card.Header>{postId ? 'Edit post' : 'Add post'}</Card.Header>
        <Form onSubmit={onSubmit}>
          <Form.Field>
            <Field 
              name='title' component={InputField}
              placeholder='Enter post Title...' />
          </Form.Field>
          <Form.Field>
            <Field 
              name='body' component={TextArea} 
              placeholder='Enter post body...' />
          </Form.Field>
          <NavLink exact to='/' className="ui button" onClick={onSubmit}>
              {postId ? 'Save' : 'Add'}
          </NavLink>
          { postId && 
          <NavLink exact to='/' className="ui button" onClick={reset}>
              Cancel
          </NavLink>}
        </Form>
      </Card.Content>
    </Card>
  );
}

export default compose(
  reduxForm({form: 'post'}),
  withRouter,
)(PostForm);
