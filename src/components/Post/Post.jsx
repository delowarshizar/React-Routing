import React from "react";

const Post = ({ post }) => {
  const {title} = post;
  return (
    <div style={{border: '1px solid red',margin:"10px", padding:"10px"}}>
      <h1>
        Title: {title}
      </h1>
    </div>
  );
};

export default Post;
