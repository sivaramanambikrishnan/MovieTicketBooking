import React, { useEffect, useState,useRef } from "react";
import "./screens.css";
import { useLocation } from "react-router-dom";
import {Footer} from "./Footer.jsx";

import { useNavigate } from "react-router-dom";
import {SeatBooking} from "./SeatBooking.jsx"
export const Theatrescreens=()=>{
    const n=useNavigate();
    const navigate=useLocation();
    const data = navigate.state;

const [theatrename,setTheatre]=useState("");
const [theatreTime,setTime]=useState("");
    const theatre=[
        {
            name:"Imax",
            location:"Erode",
            image:"https://i.pinimg.com/736x/bd/59/99/bd59993bef169690a1cfc5a580b3fb2b.jpg"
        },
        {
            name:"PVR Grand Cinemas",
            location:"Chennai",
            image:"https://i.pinimg.com/736x/c5/8f/6a/c58f6a41d7e3a508b62668e05c17a609.jpg"
        },
        {
            name:"Rohini Theatre",
            location:"T-Nagar",
            image:"https://i.pinimg.com/736x/3d/22/fa/3d22fafe9d80035556fe8b0b2a9011d6.jpg"
        },
        {
            name:"RAM Cinemas",
            location:"Vannerpettai",
            image:"https://i.pinimg.com/736x/ae/dd/6c/aedd6c41e117467c9bdeec846d0aae23.jpg"
        },
        {
            name:"PVS Theatre",
            location:"Tirunelveli",
            image:"https://i.pinimg.com/736x/ce/87/60/ce8760f43738f739ad231a16a21fcdef.jpg"
        }
    ];
    const timings=[{time:"9.00 P.M"},
        {time:"1.00 P.M"},
        {time:"4.00 P.M"},
        {time:"7.00 P.M"},
        {time:"10.00 P.M"}
    ];
 
    let prev = useRef(null);
    const handleClick=(index)=>{
        console.log("prev:",prev); 
        setTheatre(theatre[index].name);
       
        let selectedItem = document.querySelectorAll(".update")[index];

 
        document.querySelectorAll(".an").forEach((item) => item.classList.remove("style-card") );
        document.querySelectorAll(".update").forEach((item) => item.classList.remove("style-card"));
    
        if (prev.current !== null && prev.current !== index) {
            document.querySelectorAll(".update")[prev.current].textContent = ""; 
        }
    
       
        document.querySelectorAll(".an")[index].classList.add("style-card");
        selectedItem.textContent = "Selected";
    
        prev.current= index;

    }

    let previous=useRef(null);
    useEffect(()=>{
      console.log("Theatre",theatrename);
      console.log("Time",theatreTime);
    },[theatrename,theatreTime]);

    const fun=()=>{
        console.log("Theatre1",theatrename);
        console.log("Time1",theatreTime);
            n("/SeatBooking",{ state: { theatrename, theatreTime } }); 
      
    }
const handle=(index)=>{
  
     
        let selectedItem = document.querySelectorAll(".status")[index];

       
        document.querySelectorAll(".co").forEach((item) => item.classList.remove("style-card-1"));
        document.querySelectorAll(".status").forEach((item) => item.classList.remove("style-card-1"));
    
        if (previous.current!== null && previous.current!== index) {
            document.querySelectorAll(".status")[previous.current].textContent = ""; 
        }
    
       
        document.querySelectorAll(".co")[index].classList.add("style-card-1");
        selectedItem.textContent = "Selected";
    
        previous.current= index; 
        
    }
    
    return(
        <div>
        <div className="row kc py-5">
       
        <div className="col-3 mt-5 container-area ">
        <p className="name  "><center>{data?.name}</center></p>
        
        <img src={data?.image} className="image"></img>
        <p className="text-center">
  <span className="text-success">Casting:</span> {data?.casting}
</p>
       <p className="text-center">
  <span className="text-success">Rating:</span> {data?.rating}
</p>
       <p className="text-center">
  <span className="text-success">IMDB:</span> {data?.imdb}
</p>
        </div>
        
        <div className=" col-8 container-area-2 mt-2 ">
        <p className="text-success ms-3 mt-3 ">Available Screens :</p>
        <div className="d-flex ">
        {theatre.map((theatre,index) => (
            <div key={index} className="container-1 ms-2 an" onClick={()=>{handleClick(index)}}>
            <div className="item">
            <img src={theatre.image} className="cinemas"></img>
          <p className="text-center">{theatre.name}</p>
          <p className="text-center">Location:{theatre.location}</p>
          <p key={index} className="update text-center "></p>
          </div>
          </div>
        ))}
       
        </div>
        <div className="row">
        <div className=" col-8 offset-1 k mt-5 ">
        <p className="text-danger">Timings :</p>
      {timings.map((item, index) => (
        <div key={index}  className=" p-1 text-dark rounded-lg co" onClick={()=>{handle(index);setTime(item.time)}}>
          {item.time}
          <p key={index} className="status text-center text-success"></p>
        </div>
        
      ))}
    </div> 
    </div> 
    <button className="btn btn-dark ms-5 mb-3 mt-4" onClick={()=>fun()}>Show Seats</button>
        </div>

        </div>

        <Footer/>
        </div>
    );
}