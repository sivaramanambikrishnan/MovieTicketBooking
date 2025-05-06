
import "./App.css";
import { Header } from "./Header.jsx";
import { useState } from "react";
import { SliderHome } from "./SliderHome.jsx";
import { Theatre } from "./Theatre.jsx";
import {Wish} from "./Wish.jsx";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import { Contact } from "./Contact.jsx";
import { Theatrescreens } from "./Theatrescreens.jsx";
import {UpcommingMovies} from "./UpcommingMovies";
import {SeatBooking}  from "./SeatBooking.jsx";
import { Showtheatre } from "./showtheatre.jsx";
import { ShowTheatrecontainer } from "./ShowTheatrecontainer.jsx";
function App(){

  const [items,setItems]=useState([]);
  return ( 
    <div>
     <BrowserRouter>

     <Header/>
      <Routes>
       <Route path="/SliderHome" element={<SliderHome items={items} setItems={setItems}/>} />
        <Route path="/" element={<SliderHome items={items} setItems={setItems}/>} />
        <Route path="/Wish" element={<Wish items={items} setItems={setItems}/>} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Theatre" element={<Theatre />} />
        <Route path="/Theaterscreens" element={<Theatrescreens />} />
        <Route path="/UpcommingMovies" element={<UpcommingMovies/>}/>
        <Route path="/SeatBooking" element={<SeatBooking/>}/>
        <Route path="/showtheatre" element={<Showtheatre />}/>
        <Route path="/ShowTheatrecontainer" element={<ShowTheatrecontainer />}/>
      </Routes>
      
    </BrowserRouter>
 
    </div>
  );
};

export default App
