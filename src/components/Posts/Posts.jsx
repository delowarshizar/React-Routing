import React from "react";
import { useLoaderData } from "react-router";

const Posts = () => {
  const posts = useLoaderData();
  console.log(posts);
  return (
    <div>
      <h1>Total number of post is {posts.length}</h1>
      
    </div>
  );
};

export default Posts;
