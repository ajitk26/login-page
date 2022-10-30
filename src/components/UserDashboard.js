import { CButton } from "@coreui/react";
import React from "react";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const navigate=useNavigate()

  useEffect(()=>{
    if(!localStorage.getItem('token')){
      navigate("/")
    }
  })
  return <div>
    <h1>hello user</h1>
    <CButton onClick={()=>{
      localStorage.removeItem('token')
      navigate("/")
    }}>Logout</CButton>
    </div>;
};

export default UserDashboard;
