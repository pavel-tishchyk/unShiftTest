import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { postsDataSelector } from '../redux/app-selectors';
import { getPostsTC, addPostTC, deletePostTC, changePostTC, addCommentTC } from '../redux/app-reducer';
import { Grid } from 'semantic-ui-react';
import PostForm from './Posts/PostForm';
import Posts from './Posts/Posts';

const Container = (props) => {
  const { 
    postsData, getPostsData, addPost, 
    deletePost, changePost, addComment } = props;

  React.useEffect(()=> {
    getPostsData();
  },[getPostsData])

  return (
    <Grid container centered>
      <Grid.Row>
        <Grid.Column mobile={16} computer={10} largeScreen={8} style={{minHeight: '100vh'}}>
          <Route path='/edit/:postId?' render={() => <PostForm 
            postsData={postsData} 
            onSubmit={changePost}/>} />
          <Route exact path='/' render={(props) => <Posts 
            {...props}
            postsData={postsData}
            addPost={addPost} 
            deletePost={deletePost}
            addComment={addComment}/>} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

const mapStateToProps = state => {
  return {
    postsData: postsDataSelector(state),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPostsData: () => dispatch(getPostsTC()),
    addPost: (post) => dispatch(addPostTC(post)),
    deletePost: (postId) => dispatch(deletePostTC(postId)),
    changePost: (post) => dispatch(changePostTC(post)),
    addComment: (comment, postId) => dispatch(addCommentTC(comment, postId)),
  }
}

const mdtp = {
  getPostsTC
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);