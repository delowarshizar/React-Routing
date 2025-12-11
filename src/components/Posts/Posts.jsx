import React from "react";
import { useLoaderData } from "react-router";
import Post from "../Post/Post";
const Posts = () => {
  const posts = useLoaderData();
  console.log(posts);
  return (
    <div>
      <h1>Total number of post is {posts.length}</h1>
      {posts.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </div>
  );
};

export default Posts;
