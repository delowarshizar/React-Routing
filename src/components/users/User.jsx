import React from "react";
import { useLoaderData } from "react-router";

const User = () => {
  const users = useLoaderData();
  console.log(users);
  return (
    <div>
      <h1>This is for users</h1>
    </div>
  );
};

export default User;
