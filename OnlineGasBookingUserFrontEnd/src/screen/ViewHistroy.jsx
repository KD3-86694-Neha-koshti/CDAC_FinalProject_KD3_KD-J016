import { useState } from "react";
import Navbar from "../components/Navbar";

function Viewhistroy()
{
    const bookId=10101
    const cylType="Domastics"
    const date1="12-01-2024"
    const sttaus="delivered"


    return(
        <div>
        <h2 className='header'>Orders</h2>
        <table className='table table-hover'>        <thead>
              <tr>
                <th>Booking Id</th>
                <th>Cylinder Type</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{bookId}</td>
                <td>{cylType}</td>
                <td>{date1}</td>
                <td>{sttaus}</td>
              </tr>
            </tbody>
            </table>

      </div>
    )
  }
  
export default Viewhistroy