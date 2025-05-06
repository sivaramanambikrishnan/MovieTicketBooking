import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/parallax";
import "swiper/css/pagination";
import { Footer } from "./Footer";
import { useNavigate } from "react-router-dom";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "./Showtheatre.css"; // Import CSS
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

export const Showtheatre= () => {
  const[selecttheatre,setSelecttheatre]=useState(null);
   const navg=useNavigate();
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Number of cards visible at once
        slidesToScroll: 2,
        arrows: false, 
        responsive: [
          {
            breakpoint: 1024,
            settings: { slidesToShow: 3 },
          },
          {
            breakpoint: 768,
            settings: { slidesToShow: 3 },
          },
          {
            breakpoint: 480,
            settings: { slidesToShow: 3 },
          },
        ],
      };
      const theatre=[
        {
          image:"https://i.pinimg.com/736x/e4/05/07/e4050727fc9c7bca4edcf4c31a940c8c.jpg",
          about:`KSK Cinemas, or Image Maximum, is a cinematic experience designed to immerse viewers in a larger-than-life world of sight and sound. 
           It's not just a bigger screen; it's a carefully engineered system that encompasses several key elements.  IMAX screens are significantly larger
            and more curved than traditional screens, maximizing the field of view and filling the viewer's peripheral vision. 
             This, combined with specialized projection systems that deliver incredibly bright and crisp images with exceptional clarity and contrast, 
             creates a truly captivating visual experience.  But IMAX isn't just about visuals; it's also about immersive audio.  
             IMAX theatres feature powerful, precisely calibrated sound systems that deliver deep, resonant bass 
          and crystal-clear audio, further enhancing the sense of realism and drawing the audience deeper into the story.  `,
          name:"KSK Cinemas",
          rating:"4.9",  
          movie: "https://i.pinimg.com/736x/32/c0/bc/32c0bcbb84221c71db2f4b472e7b35ff.jpg",
          location:"vellore"
        },
        {
            image:"https://i.pinimg.com/736x/b4/69/d6/b469d6c2b77d9374b591deb87bfb43e9.jpg",
            about:`Dolby Cinemas, or Image Maximum, is a cinematic experience designed to immerse viewers in a larger-than-life world of sight and sound. 
            It's not just a bigger screen; it's a carefully engineered system that encompasses several key elements.  IMAX screens are significantly larger
             and more curved than traditional screens, maximizing the field of view and filling the viewer's peripheral vision. 
              This, combined with specialized projection systems that deliver incredibly bright and crisp images with exceptional clarity and contrast, 
              creates a truly captivating visual experience.  But IMAX isn't just about visuals; it's also about immersive audio.  
              theatres feature powerful, precisely calibrated sound systems that deliver deep, resonant bass 
           and crystal-clear audio, further enhancing the sense of realism and drawing the audience deeper into the story.  `,
            name:"Dolby Cinema",
            rating:"5.0",  
             movie: "https://i.pinimg.com/736x/b4/2a/37/b42a37367716f92c442f85847e78624a.jpg",
            location:"Chennai"
          },
          {
            image:"https://i.pinimg.com/736x/7f/d0/e0/7fd0e0ecaf0e0e075e3d598a9a061417.jpg",
            about:`Epic SCreens, or Image Maximum, is a cinematic experience designed to immerse viewers in a larger-than-life world of sight and sound. 
            It's not just a bigger screen; it's a carefully engineered system that encompasses several key elements.  IMAX screens are significantly larger
             and more curved than traditional screens, maximizing the field of view and filling the viewer's peripheral vision. 
              This, combined with specialized projection systems that deliver incredibly bright and crisp images with exceptional clarity and contrast, 
              creates a truly captivating visual experience.  But IMAX isn't just about visuals; it's also about immersive audio.  
              theatres feature powerful, precisely calibrated sound systems that deliver deep, resonant bass 
           and crystal-clear audio, further enhancing the sense of realism and drawing the audience deeper into the story.  `,
            name:"Epic Screens",
            movie: "https://i.pinimg.com/736x/d5/70/db/d570dbf55104237abb0ee77b575f7187.jpg" ,
            rating:"4.9",  
            location:"vellore"
          },
    
        {
        image:"https://i.pinimg.com/736x/1d/fa/22/1dfa2278c44aba5fb9ef887887742439.jpg",
        about:`PVS Theatre, or Image Maximum, is a cinematic experience designed to immerse viewers in a larger-than-life world of sight and sound. 
        It's not just a bigger screen; it's a carefully engineered system that encompasses several key elements.  IMAX screens are significantly larger
         and more curved than traditional screens, maximizing the field of view and filling the viewer's peripheral vision. 
          This, combined with specialized projection systems that deliver incredibly bright and crisp images with exceptional clarity and contrast, 
          creates a truly captivating visual experience.  But IMAX isn't just about visuals; it's also about immersive audio.  
          theatres feature powerful, precisely calibrated sound systems that deliver deep, resonant bass 
       and crystal-clear audio, further enhancing the sense of realism and drawing the audience deeper into the story.  `,
        name:"PvS",
        movie: "https://i.pinimg.com/736x/1c/67/0b/1c670b7ec19f21ec9d242afb4726420c.jpg",
        rating:"4.5",  
        location:"Coimbatore"
      },
      {
        image:"https://i.pinimg.com/736x/3b/70/51/3b7051026c14086c9d0c8468037d6369.jpg",
        about:`Asian Theatre, or Image Maximum, is a cinematic experience designed to immerse viewers in a larger-than-life world of sight and sound. 
        It's not just a bigger screen; it's a carefully engineered system that encompasses several key elements.  IMAX screens are significantly larger
         and more curved than traditional screens, maximizing the field of view and filling the viewer's peripheral vision. 
          This, combined with specialized projection systems that deliver incredibly bright and crisp images with exceptional clarity and contrast, 
          creates a truly captivating visual experience.  But IMAX isn't just about visuals; it's also about immersive audio.  
          theatres feature powerful, precisely calibrated sound systems that deliver deep, resonant bass 
       and crystal-clear audio, further enhancing the sense of realism and drawing the audience deeper into the story.  `,
        name:"Asian Theatre",
        movie: "https://i.pinimg.com/736x/b3/5d/bd/b35dbd3a21461aa8dcb414e6b4b6f931.jpg" ,
        rating:"5.0",  
        location:"chennai"
      },
      {
        image:"https://i.pinimg.com/736x/3d/1c/50/3d1c508b1dc3d6961b4642fcce0de428.jpg",
        about:`CANDRA, or Image Maximum, is a cinematic experience designed to immerse viewers in a larger-than-life world of sight and sound. 
        It's not just a bigger screen; it's a carefully engineered system that encompasses several key elements.  IMAX screens are significantly larger
         and more curved than traditional screens, maximizing the field of view and filling the viewer's peripheral vision. 
          This, combined with specialized projection systems that deliver incredibly bright and crisp images with exceptional clarity and contrast, 
          creates a truly captivating visual experience.  But IMAX isn't just about visuals; it's also about immersive audio.  
          theatres feature powerful, precisely calibrated sound systems that deliver deep, resonant bass 
       and crystal-clear audio, further enhancing the sense of realism and drawing the audience deeper into the story.  `,
        name:"CANDRA",
        rating:"5.0",  
        movie: "https://i.pinimg.com/736x/fd/a5/1d/fda51d83db3a5bd7354371b6948adf96.jpg",
        location:"Pondicherry"
      },
      {
        image:"https://i.pinimg.com/736x/32/41/e7/3241e7143f196ee5b5fa2f3273328404.jpg",
        about:`Rohini Theatre, or Image Maximum, is a cinematic experience designed to immerse viewers in a larger-than-life world of sight and sound. 
        It's not just a bigger screen; it's a carefully engineered system that encompasses several key elements.  IMAX screens are significantly larger
         and more curved than traditional screens, maximizing the field of view and filling the viewer's peripheral vision. 
          This, combined with specialized projection systems that deliver incredibly bright and crisp images with exceptional clarity and contrast, 
          creates a truly captivating visual experience.  But IMAX isn't just about visuals; it's also about immersive audio.  
          theatres feature powerful, precisely calibrated sound systems that deliver deep, resonant bass 
       and crystal-clear audio, further enhancing the sense of realism and drawing the audience deeper into the story.  `,
        name:"Rohini Theatre",
        rating:"5.0",  
        movie: "https://i.pinimg.com/736x/40/44/59/4044591e71306098950b4f7ea0450fec.jpg" ,
        location:"Chennai"
      },
      {
        image:"https://i.pinimg.com/736x/8b/e6/26/8be626aa7a6ad2509560d626ccf2c65a.jpg",
        about:`IMAX, or Image Maximum, is a cinematic experience designed to immerse viewers in a larger-than-life world of sight and sound. 
        It's not just a bigger screen; it's a carefully engineered system that encompasses several key elements.  IMAX screens are significantly larger
         and more curved than traditional screens, maximizing the field of view and filling the viewer's peripheral vision. 
          This, combined with specialized projection systems that deliver incredibly bright and crisp images with exceptional clarity and contrast, 
          creates a truly captivating visual experience.  But IMAX isn't just about visuals; it's also about immersive audio.  
          theatres feature powerful, precisely calibrated sound systems that deliver deep, resonant bass 
       and crystal-clear audio, further enhancing the sense of realism and drawing the audience deeper into the story.  `,
        name:"Imax",
        rating:"5.0",  
        movie: "https://i.pinimg.com/736x/88/05/1a/88051afadf456288f79d714b9a5f110d.jpg",
        location:"Chennai"
      },
     

    ]
    const theatres=[
      {
        image:"https://i.pinimg.com/736x/ab/77/12/ab77127a2f3c991cfa7cf5e94d0d54bd.jpg",
        about:`Harkus, or Image Maximum, is a cinematic experience designed to immerse viewers in a larger-than-life world of sight and sound. 
        It's not just a bigger screen; it's a carefully engineered system that encompasses several key elements.  IMAX screens are significantly larger
         and more curved than traditional screens, maximizing the field of view and filling the viewer's peripheral vision. 
          This, combined with specialized projection systems that deliver incredibly bright and crisp images with exceptional clarity and contrast, 
          creates a truly captivating visual experience.  But IMAX isn't just about visuals; it's also about immersive audio.  
          theatres feature powerful, precisely calibrated sound systems that deliver deep, resonant bass 
       and crystal-clear audio, further enhancing the sense of realism and drawing the audience deeper into the story.  `,
        name:"Harkus",
        movie: "https://i.pinimg.com/736x/8b/01/d2/8b01d2504bea58c82a423e0b2f5899f1.jpg" ,
        rating:"5.0",  
        location:"Banglore"
      },
      {
        image:"https://i.pinimg.com/736x/59/44/0a/59440a619b2b1636f1deda486efa9cac.jpg",
        about:`Grand Green, or Image Maximum, is a cinematic experience designed to immerse viewers in a larger-than-life world of sight and sound. 
        It's not just a bigger screen; it's a carefully engineered system that encompasses several key elements.  IMAX screens are significantly larger
         and more curved than traditional screens, maximizing the field of view and filling the viewer's peripheral vision. 
          This, combined with specialized projection systems that deliver incredibly bright and crisp images with exceptional clarity and contrast, 
          creates a truly captivating visual experience.  But IMAX isn't just about visuals; it's also about immersive audio.  
          theatres feature powerful, precisely calibrated sound systems that deliver deep, resonant bass 
       and crystal-clear audio, further enhancing the sense of realism and drawing the audience deeper into the story.  `,
        name:"Grand Green",
        rating:"5.0",  
        movie: "https://i.pinimg.com/736x/f4/bd/40/f4bd40405eb885563285b6838df588a4.jpg" ,
        location:"Chennai"
      },
      {
        image:"https://i.pinimg.com/736x/7b/9d/19/7b9d19bd5cbf0a577fb59ef8e7984044.jpg",
        about:`Cubic Screens, or Image Maximum, is a cinematic experience designed to immerse viewers in a larger-than-life world of sight and sound. 
        It's not just a bigger screen; it's a carefully engineered system that encompasses several key elements.  IMAX screens are significantly larger
         and more curved than traditional screens, maximizing the field of view and filling the viewer's peripheral vision. 
          This, combined with specialized projection systems that deliver incredibly bright and crisp images with exceptional clarity and contrast, 
          creates a truly captivating visual experience.  But IMAX isn't just about visuals; it's also about immersive audio.  
          theatres feature powerful, precisely calibrated sound systems that deliver deep, resonant bass 
       and crystal-clear audio, further enhancing the sense of realism and drawing the audience deeper into the story.  `,
        name:"Cubic Screens",
        movie: "https://i.pinimg.com/736x/88/05/1a/88051afadf456288f79d714b9a5f110d.jpg",
        rating:"5.0",  
        location:"Porur"
      },
      {
        image:"https://i.pinimg.com/736x/cd/5f/a7/cd5fa73c5fad929bdc56537e569e7b93.jpg",
        about:`Cinema City, or Image Maximum, is a cinematic experience designed to immerse viewers in a larger-than-life world of sight and sound. 
        It's not just a bigger screen; it's a carefully engineered system that encompasses several key elements.  IMAX screens are significantly larger
         and more curved than traditional screens, maximizing the field of view and filling the viewer's peripheral vision. 
          This, combined with specialized projection systems that deliver incredibly bright and crisp images with exceptional clarity and contrast, 
          creates a truly captivating visual experience.  But IMAX isn't just about visuals; it's also about immersive audio.  
          theatres feature powerful, precisely calibrated sound systems that deliver deep, resonant bass 
       and crystal-clear audio, further enhancing the sense of realism and drawing the audience deeper into the story.  `,
        name:"Cinema City",
        rating:"5.0",  
        movie: "https://i.pinimg.com/736x/2f/dc/ff/2fdcffd6f4ad756ffeec9e1d556611ef.jpg" ,
        location:"banglore"
      },
      {
        image:"https://i.pinimg.com/736x/90/74/3a/90743aa2d2a9c637a10c7e63cbfc56cc.jpg",
        about:`CGV Cinemas, or Image Maximum, is a cinematic experience designed to immerse viewers in a larger-than-life world of sight and sound. 
        It's not just a bigger screen; it's a carefully engineered system that encompasses several key elements.  IMAX screens are significantly larger
         and more curved than traditional screens, maximizing the field of view and filling the viewer's peripheral vision. 
          This, combined with specialized projection systems that deliver incredibly bright and crisp images with exceptional clarity and contrast, 
          creates a truly captivating visual experience.  But IMAX isn't just about visuals; it's also about immersive audio.  
          theatres feature powerful, precisely calibrated sound systems that deliver deep, resonant bass 
       and crystal-clear audio, further enhancing the sense of realism and drawing the audience deeper into the story.  `,
        name:"CGV Cinemas",
        rating:"5.0",  
        movie: "https://i.pinimg.com/736x/8b/01/d2/8b01d2504bea58c82a423e0b2f5899f1.jpg",
        location:"banglore"
      },
  ]
  const container=(item)=>{
     setSelecttheatre(item);
 
  }
  useEffect(()=>{
    if(selecttheatre){
      console.log("hi");
    navg("/ShowTheatreContainer",{state: selecttheatre});
    }
  },[selecttheatre,navg]);
  return (
    <div>
    <div className="py-2  bg-body-secondary m-3">
     <p className=" ms-4 mt-1 fw-medium fs-5  t text-danger"> Enjoy The Moments ! {'\u{1F60A}'}</p>
    <Swiper
      navigation={true} 
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      modules={[Navigation, Pagination, Autoplay]}
      className="mySwiper mt-4"
    >
      <SwiperSlide> <video autoPlay loop muted playsInline preload="auto" className="slider-video">
          <source src="https://videos.pexels.com/video-files/8262686/8262686-uhd_2732_1440_25fps.mp4" type="video/mp4" />
         
        </video></SwiperSlide>
      <SwiperSlide> 
      <video autoPlay loop muted playsInline preload="auto"className="slider-video">
          <source src="https://videos.pexels.com/video-files/8263452/8263452-uhd_2732_1440_25fps.mp4" type="video/mp4" />
        </video></SwiperSlide>
        <SwiperSlide> 
      <video autoPlay loop muted playsInline preload="auto"className="slider-video">
          <source src="https://videos.pexels.com/video-files/7989385/7989385-uhd_2732_1440_25fps.mp4" type="video/mp4" />
        </video></SwiperSlide>
        <SwiperSlide> 
      <video autoPlay loop muted playsInline preload="auto"  className="slider-video">
          <source src="https://videos.pexels.com/video-files/7984167/7984167-uhd_2732_1440_25fps.mp4" type="video/mp4" />
        </video></SwiperSlide>
        <SwiperSlide> 
      <video autoPlay loop muted playsInline preload="auto" className="slider-video">
          <source src="https://videos.pexels.com/video-files/7233537/7233537-uhd_2560_1080_25fps.mp4" type="video/mp4" />
        </video></SwiperSlide>
 
    <SwiperSlide> 
      <video autoPlay loop muted playsInline preload="auto" className="slider-video">
          <source src="https://videos.pexels.com/video-files/7984159/7984159-sd_960_506_25fps.mp4" type="video/mp4" />
        </video></SwiperSlide>
    </Swiper>
    </div>
    <div className="py-4 bg-body-secondary">
    <h2 className="text-black ms-4 p-2"> Top Rated Theatres</h2>
    <Slider {...settings}>
          {theatre.map((product,index) => (
              <div key={index} className="card" >
                <img src={product.image} alt={product.name} className="card-img-top" />
                <div className="card-body text-center " onClick={()=>{container(product)}}>
                 <center> <p className="card-title text-center ">{product.name} 🎭</p></center>
                 <center> <h5 className="card-title text-center">Rating:{product.rating} 🌟</h5></center>
                  <center><button className="bt btn btn-dark" onClick={()=>{container(product)}} >Book Now</button></center>
                </div>
              </div>
            ))}
          </Slider>
          </div>
          <div className="py-4 bg-body-secondary ">
    <h2 className="text-black ms-4 p-2"> Good Rated Theatres</h2>
    <Slider {...settings}>
          {theatres.map((product,index) => (
              <div key={index} className="cards-1" >
                <img src={product.image} alt={product.name} className="card-img-top" />
                <div className="card-body text-center " onClick={()=>{container(product)}}>
                 <center> <p className="card-title text-center p-1 ">{product.name} 🎭</p></center>
                 <center> <h5 className="card-title text-center p-2">Rating:{product.rating} 🌟</h5></center>
                  <center><button className="bt btn btn-dark p-1" onClick={()=>{container(product)}} >Book Now</button></center>
                </div>
              </div>
            ))}
          </Slider>
          </div>
          <Footer/>
    </div>
  );
};


