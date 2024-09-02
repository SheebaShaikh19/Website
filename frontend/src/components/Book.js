import React from 'react'
import './Book.css'
import single from './single.jpg'
import pre from './premium.avif'
import del from './deluxe.jpg'
import fam from './fam.jpg'
import { useNavigate } from 'react-router-dom'

export default function Book() {
    const navigate=useNavigate();
    const CheckAvail =()=>{
        navigate('/avail');
    }
    return (
  
    <>

      <div className="bg-book">
            <div className="cardarea">
                <div className="card">
                    <center><h2>Family Suite</h2>
                    <img src={fam} className="cardimg"/>
                    <br/>
                    Consist of multiple rooms and a common living area.
                    <br/>
                        Now just Only @ <strike>5000</strike> 2000/per day.<br/>
                        <tt>Excluding Food charges</tt>
                     <br/><button onClick={CheckAvail} className="cardbtn" >Book Now</button>
                </center>
                </div>
                <div className="card">
                    <center><h2>Deluxe Room</h2>
                    <img src={del} className="cardimg"/>
                    <br/>
                    Well-appointed rooms designed for guests who desire more.
                    <br/>
                        Now just Only @ <strike>5000</strike> 2000/per day.<br/>
                        <tt>Excluding Food charges</tt>
                    <br/><button onClick={CheckAvail} className="cardbtn">Book Now</button>
                 </center>
                </div>
                <div className="card">
                    <center><h2>Premium Room</h2>
                    <img src={pre} className="cardimg"/>
                    <br/>
                    Top tier accomodation usually on the highest floors of a hotel.   <br/>
                        Now just Only @ <strike>5000</strike> 2000/per day.<br/>
                        <tt>Excluding Food charges</tt>
                   <br/><button onClick={CheckAvail} className="cardbtn">Book Now</button>
                </center>
                </div>
            </div>
            </div>
            </>
  )
}
