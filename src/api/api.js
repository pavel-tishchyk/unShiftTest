import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://bloggy-api.herokuapp.com/',
});

const apiRequests = {
    getPostsData: async () => (
        await instance.get(`posts`)
            .then(response => response.data)
    ),

    addPost: async (post) => (
        await instance.post(`posts`, post)
            .then(response => response.data)
    ),

    updatePost: async ({id, ...rest}) => (
        await instance.put(`posts/${id}`, rest)
            .then(response => response.data)
    ),

    deletePost: async (postId) => (
        await instance.delete(`posts/${postId}`)
            .then(response => response.data)
    ),

    getComments: async (postId) => (
        await instance.get(`posts/${postId}?_embed=comments`)
            .then(response => response.data)
    ),    

    addComment: async (postId, body) => (
        await instance.post(`comments`, {postId, body})
            .then(response => response.data)
    ),
}

export default apiRequests;
