import { useState } from "react";
import Navbar from "../components/Navbar";
import {Link,useNavigate} from 'react-router-dom';

function GasBooking()
{
    const custNumber="123344"

    const [constNumbe,setConstNumber]=useState('')

    const navigate=useNavigate()
    const onSignup=()=>{
        navigate('/home')
    }
    return(
        <div>
        <h2 className='header'>Book Gas Cylinder</h2>
  
        <div className='row'>
          <div className='col'></div>
          <div className='col'>
            <div className='mb-3'>
              <label htmlFor=''>Customer Number</label>
              <input
                onChange={(e) => setConstNumber(e.target.value)}
                type='text'
                className='form-control'
                placeholder="Enter First Name"
                value={custNumber}
              />
                <div className="mb-3">
                <label htmlFor="guests" className="form-label">Cylinder Type</label>
                <select
                  id="guests"
                  name="guests"
                >
                   <option value=""></option>
                  <option value="cummercial">Cummercial</option>
                  <option value="doamastic">Domastics</option>

                </select>
               
              </div>
              <div className="mb-3">
                <label htmlFor="guests" className="form-label">Payment</label>
                <select
                  id="guests"
                  name="guests"
                >
                   <option value=""></option>
                  <option value="cummercial">1000</option>
                  <option value="doamastic">900</option>

                </select>
               
              </div>

              <div className="conatiner">
                <div className="buttons">
                <button onClick={onSignup} class='btn btn-success'>
                BookNow
                </button>
                <button onClick={onSignup} class='btn btn-success'>
                BookNow
                </button>
                </div>
              </div>

            <div className='mb-3'>
              
                 
              
            </div>
          </div>
          <div className='col'></div>
        </div>
      </div>
      </div>
    )
  }
export default GasBooking