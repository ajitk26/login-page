import { CButton, CFormSelect } from "@coreui/react";
import React from "react";
import './parking.css';

export default function Parking() {
    return (
        <>
            <div className="parking-root">
                <div className="p-img">
                    <img src="./background.jpg"></img>
                    <p className="parking-description">For most motorised vehicles, there are three commonly used arrangements of parking spaces—parallel parking, perpendicular parking, and angle parking.</p>
                </div>
                <div className="p-content">
                    <div className="p-form">
                        <p className="p-heading">Parking Name</p>
                        <div className="available-slots">
                            <p>Parking type: Mall</p>
                            <p>Car: 70</p>
                            <p>Bike: 30</p>
                        </div>
                        <div className="choose-vehicle">
                            <CFormSelect className="select">
                                <option value='1'>Car</option>
                                <option value='2'>Bike</option>
                            </CFormSelect>
                            <input type='text' className="inp" placeholder="Number Plate" />
                        </div>
                        <div className="date-time">
                            <input type='text' placeholder="From" className="inp" />
                            <input type='text' placeholder="To" className="inp" />
                            <input type='number' placeholder="No. of Hours" className="inp" />
                        </div>
                        <div className="result">
                            <div className="btn-root">
                                <CButton className="p-btn">Time 10hr</CButton>
                                <CButton className="p-btn">Cost 100rs</CButton>
                            </div>
                            <CButton className="p-btn pay">PAY</CButton>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}