import React, { useState } from "react";
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
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from "@coreui/react";
import "./login.css";
import {
  useSendOtpMutation,
  useVerifyOtpMutation,
} from "../../services/OtpAuthApi";
import { Alert } from "@mui/material";

const Register = (props) => {
  const [authId, setAuthId] = useState(null);
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });
  //RTK Query

  const [sendOtp] = useSendOtpMutation();
  const [verifyOtp] = useVerifyOtpMutation();
  // const [mobile, setMobile] = useState("");

  const handleSendOtpForm = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      phonenumber: data.get("phonenumber"),
    };
    console.log(actualData);

    if (actualData.phonenumber) {
      const response = await sendOtp(actualData);
      if (response.data.status === "success") {
        setAuthId(response.data.id);
        document.getElementById("signUpForm").reset();
        setError({ status: true, msg: "res.data.message", type: "success" });
      }
      if (response.data.status === "rejected") {
        setError({ status: true, msg: response.data.message, type: "error" });
      }
    } else {
      setError({ status: true, msg: "Enter valid number", type: "error" });
    }
    // console.table(mobile);
  };
  const handleVerifyOtpForm = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      otpCode: data.get("otpCode"),
      id: authId,
    };

    if (actualData.otpCode && actualData.id) {
      const response = await verifyOtp(actualData);
      if (response.data.status === "success") {
        document.getElementById("otpCode").reset();
        setError({ status: true, msg: "res.data.message", type: "success" });
      }
      if (response.data.status === "rejected") {
        setError({ status: true, msg: response.data.message, type: "error" });
      }
    } else {
      setError({ status: true, msg: "OTP Required", type: "error" });
    }
  };

  return (
    <div>
      <div className="root-form">
        <img className="img2" src="./background.jpg" alt="backgroundImg"></img>
        {authId === null ? (
          <>
            <CForm className="form" onSubmit={handleSendOtpForm}>
              <p className="heading">Signup</p>
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
                      <CDropdownMenu>
                        <CDropdownItem href="#">+91</CDropdownItem>
                        <CDropdownItem href="#">+12</CDropdownItem>
                        <CDropdownItem href="#">+1</CDropdownItem>
                      </CDropdownMenu>
                    </CDropdown>
                    <CFormInput
                      id="signUpForm"
                      name="phonenumber"
                      aria-label="Text input with dropdown button"
                      // value={mobile}
                      // onChange={(e) => setMobile(e.target.value)}
                    />
                  </CInputGroup>
                </CCol>
              </CRow>
              <CButton
                type="submit"
                className="mb-3 btn"
                // onSubmit={handleSendOtpForm}
              >
                Send OTP
              </CButton>
              {error.status ? (
                <Alert severity={error.type}>{error.msg}</Alert>
              ) : (
                ""
              )}
              <p style={{ marginTop: 12 }}>
                Already have an account? &nbsp;{" "}
                <CButton
                  className="btn"
                  onClick={() => props.onFormSwitch("Login")}
                >
                  Login
                </CButton>
              </p>
            </CForm>
          </>
        ) : (
          <>
            <CForm className="form" onSubmit={handleVerifyOtpForm}>
              <CRow className="mb-3 row">
                <CFormLabel
                  htmlFor="inputNumber3"
                  className="col-sm-4 col-form-label"
                >
                  Enter OTP :
                </CFormLabel>
                <CCol sm={6}>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      required
                      id="otpCode"
                      name="otpCode"
                      aria-label="Text input with dropdown button"
                      // value={mobile}
                      // onChange={(e) => setMobile(e.target.value)}
                    />
                  </CInputGroup>
                </CCol>
              </CRow>
              <CButton
                type="submit"
                className="mb-3 btn"
                // onSubmit={handleSendOtpForm}
              >
                Verify OTP
              </CButton>
              {error.status ? (
                <Alert severity={error.type}>{error.msg}</Alert>
              ) : (
                ""
              )}
            </CForm>
          </>
        )}
      </div>
    </div>
  );
};

export default Register;
