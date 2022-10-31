import Login from "./components/Auth/Login.js";
import Register from "./components/Auth/Register";
import {  Routes, Route } from "react-router-dom";
// import ParkingDashboard from "./components/parking/ParkingDashboard.js";
import UserDashboard from './components/UserDashboard'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/UserDashboard" element={<UserDashboard />} />
        {/* <Route path="/ParkingDashboard" element={<ParkingDashboard />} /> */}
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </>
  );
}

export default App;
