
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 
import "./Header1.css";
import { SliderHome } from "./SliderHome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHeart} from "@fortawesome/free-regular-svg-icons"; 
import { useState } from "react";
import { Wish } from "./Wish";

import { Link } from "react-router-dom";
import { Contact } from "./Contact.jsx";
import { UpcommingMovies } from "./UpcommingMovies.jsx";

export function Header(){
  const[colorstate,setColor]=useState("white");
  const menuItems = [
    { name: "Home", path: "/SliderHome" },
    { name: "UpcomingMovies", path: "/UpcommingMovies" },
    { name: "Theatres", path: "/showtheatre" },
    { name: "Wish-List", path: "/Wish" },
    { name: "Contact", path: "/Contact" },
  ];
  const linkStyle = {
    outline: 'none',
    color: 'white',
    cursor: 'pointer',
    textDecoration: 'none',
  };

  const [selectedIndex, setSelectedIndex] = useState(null);
  const handleClick=(event)=>{
    const index=event.target.dataset.index;
    document.querySelectorAll(".a").forEach((Link)=>Link.classList.remove("head"));
    event.target.classList.add("head");
  }

    return(
      <div className="con">
       
  <div className="Header container-fluid bg-danger">
    
<div className="row">
<div className="col-3  col-md-3  col-lg-2 text-white ms-2 mt-3 ">Book-My-Tickets</div>
<div className=" col-7 col-md-8 col-lg-8  bg-danger ms-2 mt-3 ">

  <ul className=" d-flex  justify-content-md-end ">
      {menuItems.map((item, index) => (
        <li key={index} 
     data-index={index}
>
          <Link to={item.path}    className="p-md-3 p-1 a color"      onClick={handleClick}>{item.name} </Link>
          {item.name === "Wish-List" && <FontAwesomeIcon icon={faHeart} />}
        </li>
      ))}
    </ul>
</div>
<div className="col  ">
  <button className="b mt-md-3 me-1 me-md-1 me-lg-3  ">Sign-up</button>
  <button className="b mt-md-3">Log-in</button>
</div>

</div>

  </div>

 
  </div>
    );
};
