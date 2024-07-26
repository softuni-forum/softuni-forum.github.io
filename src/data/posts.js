import { get, post } from './api.js';

const endpoints = {
    recentPosts: '/classes/Post',
    postById: (postId) => `/classes/Post/${postId}?include=author`,
    posts: '/classes/Post'
};

export async function getRecentPosts() {
    return get(endpoints.recentPosts);
}

export async function getPostById(id) {
    return get(endpoints.postById(id));
}

export async function createPost(postData, authorId) {
    const record = {
        title: postData.title,
        content: postData.content,
        author: {
            __type: 'Pointer',
            className: '_User',
            objectId: authorId
        }
    };

    return post(endpoints.posts, record);
}

