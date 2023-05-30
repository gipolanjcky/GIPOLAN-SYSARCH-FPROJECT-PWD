import React, { Component, useEffect, useState } from "react";

export default function UserHome({ userData }) {
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner" style={{ width: "auto" }}>
        <div>
        <h3>Hi! Welcome to BreedR {userData.fname} {userData.lname}</h3>
          Email <h1>{userData.email}</h1>
          <br />
          <button onClick={logOut} className="btn btn-primary">
            Log Out
          </button>
          
    
          
        </div>
      </div>
    </div>
  );
}
