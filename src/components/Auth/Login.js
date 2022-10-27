import React, { useState,useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";


export default function Login(props) {
  const [loginPage, setLoginpage] = React.useState(true);
  const [city, setCity] = React.useState([
    { name: "Surat" },
    { name: "Munbai" },
  ]);
  const [parking, setParking] = React.useState([]);
  const [selectCity, setSelectCity] = React.useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  // const { isLoggedIn } = useSelector((state) => state.auth);
  // const { message } = useSelector((state) => state.message);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(clearMessage());
  // }, [dispatch]);

  // const initialValues = {
  //   mobile: "",
  //   password: "",
  // };
  // const validationSchema = Yup.object().shape({
  //   mobile: Yup.number().required("This field is required!"),
  //   password: Yup.string().required("This field is required!"),
  // });

  // const handleLogin = (formValue) => {
  //   const { mobile, password } = formValue;
  //   setLoading(true);

  //   dispatch(login({ mobile, password }))
  //     .unwrap()
  //     .then(() => {
  //       navigate("/profile");
  //       window.location.reload();
  //     })
  //     .catch(() => {
  //       setLoading(false);
  //     });
  // };

  // if (isLoggedIn) {
  //   return <Navigate to="/profile" />;
  // }

  const registerHandle = (e) => {
    e.preventDefault();
    console.table(mobile, password);
  };

  return (
    <>
      <div className="root-form">
        <img className="img" src="./background.jpg"></img>
        <CForm className="form" onSubmit={registerHandle}>
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
                onChange={(e) => setPassword(e.target.value)}
              />
            </CCol>
          </CRow>
          <CButton type="submit" className="mb-3 btn">
            LogIn
          </CButton>
          <p>
            Don't have an account? &nbsp;{" "}
            <CButton className="btn" onClick={()=>props.onFormSwitch("Register")}>Sign Up</CButton>
          </p>
        </CForm>
      </div>
    </>
  );
}
