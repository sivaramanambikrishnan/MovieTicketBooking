import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart} from "@fortawesome/free-regular-svg-icons"; 
import { useState ,useEffect } from "react";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "./sliderhomepage.css";
import { Wish } from "./Wish";

import { Header } from "./Header";
import { Containermovies } from "./Containermovies";
import{Footer} from "./Footer.jsx";


export  function SliderHome({items,setItems}){
 
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, 
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };


   


const movies=[
  {id:1,name:"Interstellar", image: "https://images-cdn.ubuy.co.id/6352289f38bb253c44612d53-interstellar-movie-poster-24-x-36-inches.jpg",rating:8.0 },
  {id:2,name:"The Rise Of Guardians", image: "https://i.pinimg.com/736x/95/bf/14/95bf1480e23897fc8e46337a146b4573.jpg",rating:8.5 },
  {id:3,name:"Dark-knight", image: "https://i.pinimg.com/736x/88/c8/20/88c8204e1017437290af9db9a02d83f6.jpg",rating:8.9 },
  {id:4,name:"OpenHiemer", image: "https://i.pinimg.com/736x/77/9d/a3/779da30964fb69b47c4f03138d482f9d.jpg",rating:8.5 },
  {id:5,name:"Avengers-infinityWar", image: "https://i.pinimg.com/736x/36/fc/ef/36fcef423ef118ea2c437291f73fdcca.jpg",rating:8.3 },
  {id:6,name:"How to Train your Dragon", image: "https://i.pinimg.com/736x/b2/27/95/b22795a9577fe2b851d6cbfc44d0a61b.jpg",rating:9.5 },
  {id:7,name:"Lion-king", image: "https://i.pinimg.com/736x/38/50/52/385052af46f4886172c2f4f206aa3fa8.jpg",rating:8.5 },
  {id:8,name:"Thor Ragnarok", image: "https://i.pinimg.com/474x/73/cd/d9/73cdd9f6492a935dc65bdd702d770ece.jpg",rating:8.5 },
  {id:9,name:"Spiderman Homecomming", image: "https://i.pinimg.com/736x/f7/5a/0b/f75a0b2bb3e49d562835837b2ef5f241.jpg",rating:8.7 }

]

  const[liked1,setliked1]=useState(false);
  const[liked2,setliked2]=useState(false);
  const[liked3,setliked3]=useState(false);
  const[liked4,setliked4]=useState(false);
  const[liked5,setliked5]=useState(false);
  const[liked6,setliked6]=useState(false);
  const[liked7,setliked7]=useState(false);
  const[liked8,setliked8]=useState(false);
  const[liked9,setliked9]=useState(false);

  const wish=(w)=>{
    if(!items.some((c) => c.id === w.id)){
      setItems([...items,w]);  
    }
    else{
      setItems(items.filter((item) => item.id !==w.id));
    }
  };
  useEffect(() => {
    console.log("Updated items:", items);
  }, [items]);
  
  return (
  <div>

    <div className=" slidercont container mt-4 " style={{  width :"90%"}}>
      <Slider {...settings}>
        <div className="slider-img-container p-2">
        <div className="image-text-top">Interstellar</div>
          <img
            src="https://images-cdn.ubuy.co.id/6352289f38bb253c44612d53-interstellar-movie-poster-24-x-36-inches.jpg"
            alt="Slide 2"
            className="img-fluid rounded"
          />
           <div className="image-text-bottom"
             onClick={()=>{wish(movies[0]);setliked1(!liked1)}} 
             style={{color:liked1? "red":"white"}}
           ><FontAwesomeIcon icon={liked1 ?solidHeart:regularHeart} /></div>
        </div>
        <div className="slider-img-container p-2 ">
        <div className="image-text-top" >The Rise Of Guardinas</div>
          <img
            src="https://i.pinimg.com/736x/95/bf/14/95bf1480e23897fc8e46337a146b4573.jpg"
            alt="Slide 1"
            className="img-fluid rounded"
          /> 
          <div className="image-text-bottom"
             onClick={()=>{wish(movies[1]);setliked2(!liked2)}} 
             style={{color:liked2? "red":"white"}}
           ><FontAwesomeIcon icon={liked2 ?solidHeart:regularHeart} /></div>
        </div>
        <div className="slider-img-container p-2">
        <div className="image-text-top">The dark Knight</div>
          <img
            src="https://i.pinimg.com/736x/88/c8/20/88c8204e1017437290af9db9a02d83f6.jpg"
            alt="Slide 3"
            className="img-fluid rounded"
          />
        <div className="image-text-bottom"
             onClick={()=>{wish(movies[2]);setliked3(!liked3)}} 
             style={{color:liked3? "red":"white"}}
           ><FontAwesomeIcon icon={liked3?solidHeart:regularHeart} /></div>
        </div>
        <div className="slider-img-container p-2">
        <div className="image-text-top">OpenHeimer</div>
          <img
            src="https://i.pinimg.com/736x/77/9d/a3/779da30964fb69b47c4f03138d482f9d.jpg"
            alt="Slide 3"
            className="img-fluid rounded"
          />
          <div className="image-text-bottom"
             onClick={()=>{wish(movies[3]);setliked4(!liked4)}} 
             style={{color:liked4? "red":"white"}}
           ><FontAwesomeIcon icon={liked4 ?solidHeart:regularHeart} /></div>
        </div>
        <div className="slider-img-container p-2">
        <div className="image-text-top">Avengers Infinity War</div>
          <img
            src="https://i.pinimg.com/736x/36/fc/ef/36fcef423ef118ea2c437291f73fdcca.jpg"
            alt="Slide 3"
            className="img-fluid rounded"
          />
            <div className="image-text-bottom"
             onClick={()=>{wish(movies[4]);setliked5(!liked5)}} 
             style={{color:liked5? "red":"white"}}
           ><FontAwesomeIcon icon={liked5 ? solidHeart:regularHeart} /></div>
          </div>
           <div className="slider-img-container p-2">
           <div className="image-text-top">How to drain Your Dragon</div>
          <img
            src="https://i.pinimg.com/736x/b2/27/95/b22795a9577fe2b851d6cbfc44d0a61b.jpg"
            alt="Slide 3"
            className="img-fluid rounded"
          />
         <div className="image-text-bottom"
             onClick={()=>{wish(movies[5]);setliked6(!liked6)}} 
             style={{color:liked6? "red":"white"}}
           ><FontAwesomeIcon icon={liked6 ?solidHeart:regularHeart} /></div>
        </div>
          <div className="slider-img-container p-2">
          <div className="image-text-top">Lion King</div>
          <img
            src="https://i.pinimg.com/736x/38/50/52/385052af46f4886172c2f4f206aa3fa8.jpg"
            alt="Slide 3"
            className="img-fluid rounded"
          />
          <div className="image-text-bottom"
             onClick={()=>{wish(movies[6]);setliked7(!liked7)}} 
             style={{color:liked7? "red":"white"}}
           ><FontAwesomeIcon icon={liked7 ?solidHeart:regularHeart} /></div>
        </div>
        <div className="slider-img-container p-2">
        <div className="image-text-top">Thor Ragnarok</div>
          <img
            src="https://i.pinimg.com/474x/73/cd/d9/73cdd9f6492a935dc65bdd702d770ece.jpg"
            alt="Slide 3"
            className="img-fluid rounded"
          />
        <div className="image-text-bottom"
             onClick={()=>{wish(movies[7]);setliked8(!liked8)}} 
             style={{color:liked8? "red":"white"}}
           ><FontAwesomeIcon icon={liked8 ?solidHeart:regularHeart} /></div>
        </div>
        <div className="slider-img-container p-2">
        <div className="image-text-top">Spider-Man Home-commming</div>
          <img
            src="https://i.pinimg.com/736x/f7/5a/0b/f75a0b2bb3e49d562835837b2ef5f241.jpg"
            alt="Slide 3"
            className="img-fluid rounded"
          />
          <div className="image-text-bottom"
             onClick={()=>{wish(movies[8]);setliked9(!liked9)}}
             style={{color:liked9? "red":"white"}}
           ><FontAwesomeIcon icon={liked9 ?solidHeart:regularHeart} /></div>
        </div>
      </Slider>
     
    </div>
    <Containermovies />

    </div>
  );
}
