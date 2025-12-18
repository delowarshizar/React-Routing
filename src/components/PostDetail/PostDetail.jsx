import React from "react";
import { useNavigate } from "react-router";
import { useLoaderData } from "react-router";
const PostDetail = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(-1);
  };
  const Post = useLoaderData();
  return (
    <div>
      <h1>title: {Post.title}</h1>
      <p> Detail: {Post.body}</p>
      <button onClick={handleNavigate}>Go Back</button>
    </div>
  );
};

export default PostDetail;
