import React, { useEffect,useState } from "react";
import Axios from 'axios'
import { useNavigate } from "react-router-dom";
import {Button} from "@mui/material"

export default function ParkingNearMe(){
 let parkingList={}
 const [loading, setLoading] = useState(true)

const navigate = useNavigate()
const[location,setLocation]=useState("")


const handleLocation = (e) => {
    setLocation(e.target.value);
  };

  useEffect(() => {
    setTimeout(() => setLoading(false), 6000)
  }, [])

  function authHeader(){
    const token = localStorage.getItem("token");
    console.log(token)
    let obj = {
        Authorization: token,
    };
    return(obj); 
  }
  let a = authHeader();
console.log(a);

  const handleApi = () => {
    
    // Axios
    //   .get('https://30f28d28-2e82-491b-bb67-893ecbf397c9.mock.pstmn.io/getParking', {
    //     location:location
    //   })
    //   .then((result) => {
    //     console.log(result.data);
    //   })
    //   .catch((error) => {
    //     console.log(error)

    //   });
    Axios
      .post('https://adminapp.mobbypark.com/api/user/getParkingspace/nearAll', {
        location:location
      },{headers:authHeader()})
      .then((result) => {
        console.log(result.data);
        parkingList=result.data
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)

      });

      return parkingList;
    }



  return <div>
    <div>
      
    </div>
  </div>;
};
