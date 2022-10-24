import React from "react";
import '@coreui/coreui/dist/css/coreui.min.css'
import { CForm, CRow, CFormLabel, CCol, CButton, CFormInput, CFormSelect, CInputGroup, CDropdown, CDropdownItem, CDropdownDivider, CDropdownMenu, CDropdownToggle } from "@coreui/react";
import './login.css'

export default function Login() {
    const [loginPage, setLoginpage] = React.useState(true);
    const [city, setCity] = React.useState([{ name: 'Surat' }, { name: 'Munbai' }]);
    const [parking, setParking] = React.useState([]);
    const [selectCity, setSelectCity] = React.useState('');

    // React.useEffect(() => {
    //     setCity([])
    // }, [])

    return (
        <>
            {loginPage === true ? (
                <div className="root-form">
                    <img className="img" src="./background.jpg"></img>
                    <CForm className="form">
                        <p className="heading">Login</p>
                        <br></br>
                        <CRow className="mb-3 row">
                            <CFormLabel htmlFor="inputNumber3" className="col-sm-4 col-form-label">Mobile No. :</CFormLabel>
                            <CCol sm={6} >
                                <CInputGroup className="mb-3">
                                    <CDropdown variant="input-group">
                                        <CDropdownToggle color="secondary" variant="outline">+91</CDropdownToggle>
                                        <CDropdownMenu>
                                            <CDropdownItem href="#">+91</CDropdownItem>
                                            <CDropdownItem href="#">+12</CDropdownItem>
                                            <CDropdownItem href="#">+1</CDropdownItem>
                                        </CDropdownMenu>
                                    </CDropdown>
                                    <CFormInput aria-label="Text input with dropdown button" />
                                </CInputGroup>
                            </CCol>
                        </CRow>
                        <CRow className="mb-3 row">
                            <CFormLabel htmlFor="inputPassword3" className="col-sm-4 col-form-label">Password :</CFormLabel>
                            <CCol sm={6} >
                                <CFormInput type="password" id="inputPassword3" />
                            </CCol>
                        </CRow>
                        <CButton type="submit" className="mb-3 btn">LogIn</CButton>
                        <p>Don't have an account? &nbsp; <CButton className="btn" onClick={(prev) => {
                            setLoginpage(!prev)
                        }}>Sign Up</CButton></p>
                    </CForm>
                </div>
            ) : (
                <div className="root-form">
                    <img className="img2" src="./background.jpg"></img>
                    <CForm className="form">
                        <p className="heading">Signup</p>
                        <br></br>
                        <CRow className="mb-3 row">
                            <CFormLabel htmlFor="inputNumber3" className="col-sm-4 col-form-label">Mobile No. :</CFormLabel>
                            <CCol sm={6} >
                                <CInputGroup className="mb-3">
                                    <CDropdown variant="input-group">
                                        <CDropdownToggle color="secondary" variant="outline">+91</CDropdownToggle>
                                        <CDropdownMenu>
                                            <CDropdownItem href="#">+91</CDropdownItem>
                                            <CDropdownItem href="#">+12</CDropdownItem>
                                            <CDropdownItem href="#">+1</CDropdownItem>
                                        </CDropdownMenu>
                                    </CDropdown>
                                    <CFormInput aria-label="Text input with dropdown button" />
                                </CInputGroup>
                            </CCol>
                        </CRow>
                        {/* <CRow className="mb-3 row">
                            <CFormLabel htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password :</CFormLabel>
                            <CCol sm={10} >
                                <CFormInput type="password" id="inputPassword3" />
                            </CCol>
                        </CRow>
                        <CRow className="mb-3 row">
                            <CFormLabel htmlFor="inputPassword4" className="col-sm-2 col-form-label">Re-enter Password</CFormLabel>
                            <CCol sm={10} >
                                <CFormInput type="password" id="inputPassword4" />
                            </CCol>
                        </CRow>
                        <CFormSelect aria-label="Default select example" className="mb-3 select" onChange={(e) => {
                            setSelectCity(e.target.value)
                        }}>
                            <option>Select City</option>
                            {city.map((value) => {
                                return (
                                    <option value={value.name}>{value.name}</option>
                                )
                            })}
                        </CFormSelect>
                        <CFormSelect aria-label="Default select example" className="mb-3 select">
                            <option>Select Parking in {selectCity}</option>
                            {parking.map((value) => {
                                <option value={value.name}>{value.name}</option>
                            })}
                        </CFormSelect> */}
                        <CButton type="submit" className="mb-3 btn">Sign in</CButton>
                        <p>Already have an account? &nbsp; <CButton className="btn" onClick={() => {
                            setLoginpage(!loginPage)
                        }}>Login</CButton></p>
                    </CForm>
                </div>
            )}

        </>
    )
}