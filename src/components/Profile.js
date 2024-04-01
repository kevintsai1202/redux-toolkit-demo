import React from "react";
import { useSelector } from "react-redux";
import Login from "./Login";
import NotLogin from "./NotLogin";

const Profile = () => {
  const state = useSelector(state => state.user);
    console.log(state)
  return (
    <div>
      <h1>Profile Info</h1>
      {state.profile.isLogin ? <Login /> : <NotLogin />}
    </div>
  );
};

export default Profile;