import React from "react";
import { Link, useNavigate } from "react-router";
const Post = ({ post }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/posts/${id}`);
  };
  const { title, id } = post;
  return (
    <div style={{ border: "1px solid red", margin: "10px", padding: "10px" }}>
      <h1>Title: {title}</h1>
      <Link to={`/posts/${id}`}>
        <button>See more</button>
      </Link>
      <button onClick={handleNavigate}>see detail - {id}</button>
    </div>
  );
};

export default Post;
