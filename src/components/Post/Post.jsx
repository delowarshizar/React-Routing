import React, { Suspense, useState } from "react";
import { Link, useNavigate } from "react-router";
import PostDetail2 from "../postDetail2/PostDetail2";
const Post = ({ post }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/posts/${id}`);
  };
  const { title, id } = post;

  const [showDetails, setShowDetails] = useState(false);
  const userData = fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  ).then((res) => res.json());

   const [backHome, setBackHome] = useState(false)
   if(backHome){
    navigate('/')
   }
  return (
    <div style={{ border: "1px solid red", margin: "10px", padding: "10px" }}>
      <h1>Title: {title}</h1>
      <Link to={`/posts/${id}`}>
        <button>See more</button>
      </Link>
      <button onClick={handleNavigate}>see detail - {id}</button>
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "hide" : "show"} Details Here
      </button>
      {showDetails && (
        <Suspense fallback="Loading...">
          <PostDetail2 userData={userData}></PostDetail2>
        </Suspense>
      )}
      <button onClick={()=>setBackHome(true)}>Back To Home </button>
    </div>
  );
};

export default Post;
