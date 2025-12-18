import React, { use } from 'react';

const PostDetail2 = ({ userData }) => {
    const readUserData = use(userData)
    const { id,title,body} = readUserData;
    return (
        <div>
            <h2>ID: {id}</h2>
            <h3>Title: {title}</h3>
            <p>Body: {body}</p>
            
        </div>
    );
};

export default PostDetail2;