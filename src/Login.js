import React from "react";
import '@coreui/coreui/dist/css/coreui.min.css'
import { CForm, CRow, CFormLabel, CCol, CButton, CFormInput, CFormSelect } from "@coreui/react";
export default function Login() {
    const [loginPage, setLoginpage] = React.useState(true);
    const [city, setCity] = React.useState([{name: 'Surat'},{name: 'Munbai'}]);
    const [parking, setParking] = React.useState([]);
    const [selectCity, setSelectCity] = React.useState('');

    // React.useEffect(() => {
    //     setCity([])
    // }, [])

    return (
        <>
            {loginPage === true ? (
                <div style={{ width: '40%', minWidth: '400px', height: 'max-content', margin: 'auto', position: 'relative', top: '30vh', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue' }}>
                    <CForm style={{ width: '95%', height: '70%', color: 'white' }}>
                        <h3 style={{ width: '100%', textAlign: 'center', padding: '1rem 0' }}>Login</h3>
                        <CRow className="mb-3">
                            <CFormLabel htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</CFormLabel>
                            <CCol sm={10} >
                                <CFormInput type="email" id="inputEmail3" />
                            </CCol>
                        </CRow>
                        <CRow className="mb-3">
                            <CFormLabel htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</CFormLabel>
                            <CCol sm={10} >
                                <CFormInput type="password" id="inputPassword3" />
                            </CCol>
                        </CRow>
                        <CButton type="submit" style={{ backgroundColor: 'white', color: 'grey', width: '100%', margin: '1rem 0' }}>Login</CButton>
                        <p style={{ width: '100%', textAlign: 'center', margin: '1rem 0' }}>Don't have an account? &nbsp; <CButton color="info" onClick={(prev) => {
                            setLoginpage(!prev)
                        }}>Sign Up</CButton></p>
                    </CForm>
                </div>
            ) : (
                <div style={{ width: '40%', minWidth: '400px', height: 'max-content', margin: 'auto', position: 'relative', top: '10vh', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue' }}>
                    <CForm style={{ width: '95%', height: '70%', color: 'white' }}>
                        <h3 style={{ width: '100%', textAlign: 'center', padding: '1rem 0' }}>Signup</h3>
                        <CRow className="mb-3">
                            <CFormLabel htmlFor="inputNumber3" className="col-sm-2 col-form-label">Mobile No.</CFormLabel>
                            <CCol sm={10} >
                                <CFormInput type="number" id="inputNumber3" />
                            </CCol>
                        </CRow>
                        <CRow className="mb-3">
                            <CFormLabel htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</CFormLabel>
                            <CCol sm={10} >
                                <CFormInput type="email" id="inputEmail3" />
                            </CCol>
                        </CRow>
                        <CRow className="mb-3">
                            <CFormLabel htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</CFormLabel>
                            <CCol sm={10} >
                                <CFormInput type="password" id="inputPassword3" />
                            </CCol>
                        </CRow>
                        <CRow className="mb-3">
                            <CFormLabel htmlFor="inputPassword4" className="col-sm-2 col-form-label">Re-enter Password</CFormLabel>
                            <CCol sm={10} >
                                <CFormInput type="password" id="inputPassword4" />
                            </CCol>
                        </CRow>
                        <CFormSelect aria-label="Default select example" className="mb-3" onChange={(e) => {
                            setSelectCity(e.target.value)
                        }}>
                            <option>Select City</option>
                            {city.map((value) => {
                                return (
                                    <option value={value.name}>{value.name}</option>
                                )
                            })}
                        </CFormSelect>
                        <CFormSelect aria-label="Default select example" className="mb-3">
                            <option>Select Parking in {selectCity}</option>
                            {parking.map((value) => {
                                <option value={value.name}>{value.name}</option>
                            })}
                        </CFormSelect>
                        <CButton type="submit" className="mb-3">Sign in</CButton>
                        <p style={{ width: '100%', textAlign: 'center', margin: '1rem 0' }}>Already have an account? &nbsp; <CButton onClick={() => {
                            setLoginpage(!loginPage)
                        }}>Login</CButton></p>
                    </CForm>
                </div>
            )}

        </>
    )
}