import React, { useState, useEffect } from "react";
import "@coreui/coreui/dist/css/coreui.min.css";
import {
  CForm,
  CRow,
  CFormLabel,
  CCol,
  CButton,
  CFormInput,
  CInputGroup,
  CDropdown,
  CDropdownToggle,
} from "@coreui/react";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert"


export default function Login() {
  const navigate = useNavigate()
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });


  const handlePhone = (e) => {
    setPhone(e.target.value);
    console.log(phone)
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    console.log(password)
  };


  const handleApi = () => {
    axios
      .post('https://adminapp.mobbypark.com/api/user/auth/login', {
        phone: 91+phone,
        password: password,
      })
      .then((result) => {
          localStorage.setItem('token', result.data.token)
          navigate('/selectCity')
          console.log(typeof(result.data.token));
          console.log(result.data.token)
        })

      .catch((err) => {
        alert(error)
        console.log(err)


      });
    
  };

  return (
    <>
      <div className="root-form">
        <img className="img" src="./background.jpg"></img>
        <CForm className="form">
          <p className="heading">Login</p>
          <br></br>
          <CRow className="mb-3 row">
            <CFormLabel
              htmlFor="inputNumber3"
              className="col-sm-4 col-form-label"
            >
              Mobile No. :
            </CFormLabel>
            <CCol sm={6}>
              <CInputGroup className="mb-3">
                <CDropdown variant="input-group">
                  <CDropdownToggle color="secondary" variant="outline">
                    +91
                  </CDropdownToggle>

                </CDropdown>
                <CFormInput
                  value={phone}
                  onChange={handlePhone}
                  aria-label="Text input with dropdown button"
                />
              </CInputGroup>
            </CCol>
          </CRow>
          <CRow className="mb-3 row">
            <CFormLabel
              htmlFor="inputPassword3"
              className="col-sm-4 col-form-label"
            >
              Password :
            </CFormLabel>
            <CCol sm={6}>
              <CFormInput
                type="password"
                id="inputPassword3"
                value={password}
                onChange={handlePassword}
              />
            </CCol>
          </CRow>
          <CButton type="button" className="mb-3 btn" onClick={handleApi}>
            LogIn
          </CButton>
          <p>
            Don't have an account? &nbsp;{" "}
            <CButton
              className="btn"
              onClick={() => navigate("register")}
            >
              Sign Up
            </CButton>
          </p>
        </CForm>
      </div>
    </>
  );
}
