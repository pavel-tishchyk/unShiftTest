import React from 'react';
import { Form } from 'semantic-ui-react'
import { TextArea } from 'react-semantic-redux-form';
import { Field, reduxForm } from 'redux-form';

const CommentForm = (props) => {
  const { handleSubmit, reset } = props;

  const onSubmit = () => {
    handleSubmit();
    reset();
  }

  return (
    <Form size='mini' onSubmit={handleSubmit}>
      <Form.Field>
        <Field 
          name='body' component={TextArea} 
          label='Comment' placeholder='Enter comment...' />
      </Form.Field>
      <Form.Button onClick={onSubmit}>Add</Form.Button>
    </Form>
  );
}

export default reduxForm()(CommentForm);
