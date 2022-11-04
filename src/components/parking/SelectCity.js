import React, { useState, useEffect } from "react";
import { TextField, Box, Button, CircularProgress } from "@mui/material";
import Axios from "axios";
import Autocomplete from "@mui/material/Autocomplete";
import Card from "react-bootstrap/Card";

import "./parking.css";
import {
  CFormSelect,
  CButton,
  CSpinner,
  CCard,
  CCardBody,
  CCardText,
  CCardTitle,
  CCardImage,
  CContainer,
  CCol,
  CRow,
} from "@coreui/react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function SelectCity() {
  const [location, setLocation] = useState(null);
  const [myData, setMyData] = useState([]);
  //   const [loading, setLoading] = useState(false);

  //   useEffect(() => {
  //     setTimeout(() => setLoading(true), 6000)
  //   }, [])

  console.log(location);

  function authHeader() {
    const token = localStorage.getItem("token");
    console.log(token);
    let obj = {
      Authorization: token,
    };
    return obj;
  }

  const handleApi = () => {
    Axios.post(
      "https://adminapp.mobbypark.com/api/user/getParkingspace/nearAll",
      {
        location: location,
      },
      { headers: authHeader() }
    )
      .then((result) => {
        console.log(result.data);
        setMyData(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div>
        <div className="selectCity">
          {/* <CFormSelect
         style={{width:500}}
          size="lg"
          className="mb-3"
          aria-label="Large select example"
          options={allLocation}
          onClick={handleLocation}
        >
        </CFormSelect> */}

          <Autocomplete
            value={location}
            onChange={(event, newLocation) => {
              setLocation(newLocation);
            }}
            disablePortal
            id="combo-box-demo"
            options={allLocation}
            sx={{ width: 400 }}
            renderInput={(params) => (
              <TextField {...params} label="Select Location" />
            )}
          />
          <Button variant="contained" onClick={handleApi} sx={{ height: 53 }}>
            Submit
          </Button>
        </div>

        <CContainer fluid style={{ marginTop: 20 }}>
          {myData.map((parkingList) => {
            const { id, name, parking_name, email, phone, city, parking_addr,parking_pic } =
              parkingList;
            return (
              <div key={id}>

          <CCard
                className="parkingCard">
                  <CCardTitle style={{color:"blue"}}>
                    <b>Parking Name : {parking_name}</b>
                  </CCardTitle>
                  <h6><b>Phone : </b>{phone}</h6>
                  <h6><b>Email : </b>{email}</h6>
                  <h6><b>Name : </b> {name}</h6>
                  <h6><b>City : </b> {city}</h6>
                  <h6><b>Parking Address : </b>{parking_addr}</h6>
                </CCard>
            
              </div>
            );
          })}
        </CContainer>
      </div>
    </>
  );
}

const allLocation = [
  { label: "Bangalore" },
  { label: "Hubli-Dharwad" },
  { label: "Mysore" },
  { label: "Kalaburagi" },
  { label: "Mangalore" },
  { label: "Hegade Naga" },
  { label: "Hesaraghatta" },
  { label: "Hoskote" },
  { label: "Hosur" },
  { label: "Hosur Road" },
  { label: "Indiranagar" },
  { label: "JP Nagar" },
  { label: "Jayanagar" },
  { label: "Kaggalipura" },
  { label: "KGA Golf Course" },
  { label: "Koramangala" },
  { label: "Krishnarajapuram" },
  { label: "Kundana" },
  { label: "Langford Town" },
  { label: "Malleswaram" },
  { label: "Marathahalli" },
  { label: "MG Road " },
  { label: "Minerva Circle" },
  { label: "Mysore Road" },
  { label: "Palace Grounds" },
  { label: "Race Course Road" },
  { label: "Rajajinagar" },
  { label: "Seshadripuram " },
  { label: "Shivaji Nagar " },
  { label: "Tumkur Road" },
  { label: "Ulsoor Lake" },
  { label: "Vasanth Nagar" },
  { label: "Whitefield" },
  { label: "Yelahanka" },
  { label: "Yelahanka Devanhalli Road" },
];
