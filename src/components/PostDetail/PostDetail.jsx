import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetail = () => {
    const Post = useLoaderData();
    return (
        <div>
            <h1>title: {Post.title}</h1>
            <p> Detail {Post.body}</p>
        </div>
    );
};

export default PostDetail;