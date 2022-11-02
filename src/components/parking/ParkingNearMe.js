import React, { useState } from "react";
import Axios from 'axios'
import { useNavigate } from "react-router-dom";
import {Button} from "@mui/material"

export default function ParkingNearMe(){
const navigate = useNavigate()
const[location,setLocation]=useState("")


const handleLocation = (e) => {
    setLocation(e.target.value);
  };

  function authHeader(){
    const token = localStorage.getItem("token");
    let obj = {
        token: token,
    };
    return(obj); 
  }
//   let a = authHeader();
// console.log(a);

  const handleApi = () => {
  
    Axios
      .post('https://adminapp.mobbypark.com/api/user/getParkingspace/nearAll', {
        location:location
      },{headers:authHeader()})
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error)

      });
    }
    


  return <div>
    <div>
        <Button onClick={handleApi}>Parking space near me</Button>
    </div>
  </div>;
};
