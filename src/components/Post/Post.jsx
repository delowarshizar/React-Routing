import React from "react";
import { Link } from "react-router";
const Post = ({ post }) => {
  const {title,id} = post;
  return (
    <div style={{border: '1px solid red',margin:"10px", padding:"10px"}}>
      <h1>
        Title: {title}
      </h1>
     <Link to={`/posts/${id}`}><button>See more</button></Link>
    </div>
  );
};

export default Post;
