import React, { useState } from "react";
import "@coreui/coreui/dist/css/coreui.min.css";
import {
  CForm,
  CRow,
  CFormLabel,
  CCol,
  CButton,
  CFormInput,
  CFormSelect,
  CInputGroup,
  CDropdown,
  CDropdownItem,
  CDropdownDivider,
  CDropdownMenu,
  CDropdownToggle,
} from "@coreui/react";
import "./login.css";

const Register = (props) => {
  const [mobile, setMobile] = useState("");
  const registerHandle = (e) => {
    e.preventDefault();
    console.table(mobile);
  };

  return (
    <div>
      <div className="root-form">
        <img className="img2" src="./background.jpg"></img>
        <CForm className="form" onSubmit={registerHandle}>
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
                  aria-label="Text input with dropdown button"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </CInputGroup>
            </CCol>
          </CRow>
          <CButton type="submit" className="mb-3 btn">
            Send OTP
          </CButton>
          <p>
            Already have an account? &nbsp;{" "}
            <CButton className="btn" onClick={()=>props.onFormSwitch("Login")}>
              Login
            </CButton>
          </p>
        </CForm>
      </div>
    </div>
  );
};

export default Register;
