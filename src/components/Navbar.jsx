import React from "react";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { logOut, currentUser } = UserAuth();

  return (
    <div className="navbar">
      <span className="logo">Chat</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="example" />
        <span>{currentUser.displayName}</span>
        <button onClick={() => logOut()}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
