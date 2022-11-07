import { CButton, CContainer, CFormSelect } from "@coreui/react";
import React from "react";
import "./parking.css";
import { useState, useEffect } from "react";
import { useNavigate ,useLocation} from "react-router-dom";
import { Button } from "@mui/material";
import { getParkingList } from "../../redux/features/ParkingApiSlice";
import { useDispatch, useSelector } from "react-redux";

export default function ParkingDashboard() {

  const parkingApiData = useSelector((state) => state.parkingApiData.data);
  console.log(parkingApiData)


  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  });

  const location=useLocation();
  return (
    <>
 {/* <button (fn=>e.target.id ki value state save krlega)</>>Card</button> */}
  {/* //redirect comp import yha daalo or yha uss state ko as prop pass krdo */}
      <div className="parking-root">
        
          
        {/* <div className="img">
          <p className="parking-description">
            For most motorised vehicles, there are three commonly used
            arrangements of parking spaces—parallel parking, perpendicular
            parking, and angle parking.
          </p>
        </div> */}
        <div className="p-content">
          <div className="p-form">
            <p className="p-heading">{location.state.parking_name}</p>
            <div className="available-slots">
              <p>Parking type: Mall</p>
              <p>Car: 70</p>
              <p>Bike: 30</p>
            </div>
            <div className="choose-vehicle">
              <CFormSelect className="select">
                <option value="1">Car</option>
                <option value="2">Bike</option>
              </CFormSelect>
              <input type="text" className="inp" placeholder="Number Plate" />
            </div>
            <div className="date-time">
              <input type="text" placeholder="From" className="inp" />
              <input type="text" placeholder="To" className="inp" />
              <input type="number" placeholder="No. of Hours" className="inp" />
            </div>
            <div className="result">
              <div className="btn-root">
                <Button   variant="contained">Time : 10 hr</Button>
                <Button variant="contained">Cost : Rs100</Button>
              </div>
              <Button variant="contained" className="p-btn pay">
                PAY
              </Button>
            </div>
          </div>
        </div>


      </div>

    </>
  );
}
