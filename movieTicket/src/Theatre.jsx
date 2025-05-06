import React from "react";
import { useLocation } from "react-router-dom";
import "./Theatre.css";
import { useNavigate } from "react-router-dom";
import{Footer} from "./Footer.jsx";
export const Theatre=()=>{
    const location = useLocation();
    const nav=useNavigate();
  const data = location.state;

 const Nav=()=>{
    console.log("Navigating with data:", data);
   nav("/Theaterscreens",{state:data});
  }
    return(
      <div>
        <div className="container">
        <div className="row">
        <div className="col-5 py-5">
            <img src={data?.image} className="photo" ></img>
         </div>
         <div className="col-6 py-5 mt-2 ">
            <div className="movie-name">
            <h4>{data?.name}</h4>
            <div className="mt-4">
                <p>{data?.about}</p>
            </div>
            <div className="mt-3">
            <h6 className="p-1">Casting :<p> {data?.casting}</p></h6>
            <h6 className="p-1">Rating : {data?.rating}</h6>
            <h6 className="p-1">IMDB : {data?.imdb}</h6>
            {data?.availability === "available" ? (
                <> 
    <h6 className="text-success">Available on Theatres</h6>
    <button className="btn btn-dark" onClick={Nav} >Book Tickets</button>
  </>
) : (
  <p className="not-available text-danger" >Not Available</p>
)}
            </div>
            </div>
         </div>  
         </div>
        
        </div>
        <Footer />
        </div>
    );
}