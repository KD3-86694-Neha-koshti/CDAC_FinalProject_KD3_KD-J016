import styled from 'styled-components';
import {Route,Routes} from 'react-router-dom'
import './App.css';
import Home from './screen/Home';
import Login from './screen/Login';
import { ToastContainer } from 'react-toastify';
import Register from './screen/Register';
import RestPassword from './screen/ResetPasswd';
import UpdateProfile from './screen/UpdateProfile';
import GasBooking from './screen/GasBooking';
import Viewhistroy from './screen/ViewHistroy';


function App() {
  return (
    <div className="page">
         <Routes>
          <Route path='/' element={<Login></Login>}></Route>
          <Route path='login' element={<Login></Login>}></Route>
          <Route path='register' element={<Register/>}></Route>
          <Route path='forgetpasswd' element={<RestPassword/>}></Route>
          <Route path='home' element={<Home/>}/>
            <Route path='/bookgascylinder' element={<GasBooking/>}/>
            <Route path='/viewhistroy' element={<Viewhistroy/>}/>
            <Route path='/updateprofile' element={<UpdateProfile/>}></Route>
            
         </Routes>
         <ToastContainer/>
          </div>
  
  );
}

export default App;
