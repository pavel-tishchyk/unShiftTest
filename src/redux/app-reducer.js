import apiRequests from './../api/api';

const SET_POSTS = 'SET_POSTS';
const ADD_POST = 'ADD_POST';
const CHANGE_POST = 'EDIT_POST';
const DELETE_POST = 'DELETE_POST';
const ADD_COMMENT = 'ADD_COMMENT';

const initialState = {
    postsData: [],
};

const appReducer = (appData = initialState, action) => {
    switch (action.type) {
        case SET_POSTS: {
            return {
                ...appData,
                postsData: action.posts,
            }
        }

        case ADD_POST: {
            return {
                ...appData,
                postsData: [...appData.postsData, {...action.post, comments: []}],
            }
        }   
        
        case CHANGE_POST: {
            return {
                ...appData,
                postsData: appData.postsData.map(post => {
                    return post.id !== action.post.id ? post : action.post 
                })
            }
        } 

        case DELETE_POST: {
            return {
                ...appData,
                postsData: appData.postsData.filter(post => {
                    return post.id !== action.postId ? true : false 
                })
            }
        }

        case ADD_COMMENT: {
    debugger;

            return {
                ...appData,
                postsData: appData.postsData.map(post => {
                    return post.id !== action.comment.postId ? post : {
                        ...post, 
                        comments: [...post.comments, action.comment]
                    } 
                })
            }
        }

        default: return appData;
    }

}

export const setPosts = (posts) => {
    return {
        type: SET_POSTS,
        posts
    }
}

export const addPost = (post) => {
    return {
        type: ADD_POST,
        post
    }
}

export const changePost = (post) => {
    return {
        type: CHANGE_POST,
        post
    }
}

export const deletePost = (postId) => {
    return {
        type: DELETE_POST,
        postId
    }
}

export const addComment = (comment) => {
    return {
        type: ADD_COMMENT,
        comment
    }
}

export const getPostsTC = () => (dispatch) => {
    apiRequests.getPostsData()
    .then(data => {
        return Promise.all(data.map(post => apiRequests.getComments(post.id)))  
    })
    .then(posts => {
        dispatch(setPosts(posts));
    }); 
}

export const addPostTC = (post, history) => (dispatch) => {
    apiRequests.addPost(post)
    .then(data => {
        dispatch(addPost(data));
        history.push("/");
    });
}

export const changePostTC = (post) => (dispatch) => {
    apiRequests.updatePost(post)
    .then(dispatch(changePost(post)));
}

export const deletePostTC = (postId) => (dispatch) => {
    apiRequests.deletePost(postId)
    .then(dispatch(deletePost(postId)));
}

export const addCommentTC = (comment, postId) => (dispatch) => {
    apiRequests.addComment(postId, comment.body)
    .then(comment => dispatch(addComment(comment)));
}

export default appReducer;