import React, { useState } from "react";
import Slider from "react-slick";
import ReactPlayer from "react-player";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./UpcommingMovies.css";
import { Footer } from "./Footer";

const videos = [
  "https://www.youtube.com/watch?v=1VIZ89FEjYI",
  "https://www.youtube.com/watch?v=hDZ7y8RP5HE&t=3s",
  "https://www.youtube.com/watch?v=XdKzUbAiswE",
  "https://www.youtube.com/watch?v=8ocanbiSyV4",
  "https://www.youtube.com/watch?v=TY1lWh20VSw",
  "https://www.youtube.com/watch?v=ZgZccxuj2RY",
  "https://www.youtube.com/watch?v=0ylr70WNAe8",
  "https://www.youtube.com/watch?v=7xidOWnzSu4",
  "https://www.youtube.com/watch?v=njPNg0A9VpY",
];

const videos1 = [
  "https://www.youtube.com/watch?v=t4vrdDB1MZE",
  "https://www.youtube.com/watch?v=P-b_2zbQeGk",
  "https://www.youtube.com/watch?v=wS_qbDztgVY",
  "https://www.youtube.com/watch?v=v-94Snw-H4o",
  "https://www.youtube.com/watch?v=kanHreEaJZ4",
  "https://www.youtube.com/watch?v=u3V5KDHRQvk",
  "https://www.youtube.com/watch?v=JfVOs4VSpmA",
  "https://www.youtube.com/watch?v=aWzlQ2N6qqg",
  "https://www.youtube.com/watch?v=x7Krla_UxRg",
  "https://www.youtube.com/watch?v=vjOvi8UdrNE"
];

const videos2 = [
  "https://www.youtube.com/watch?v=3cxixDgHUYw",
  "https://www.youtube.com/watch?v=hebWYacbdvc",
  "https://www.youtube.com/watch?v=mR-wbEcnLGQ",
  "https://www.youtube.com/watch?v=cBNyTQM10Cg",
  "https://www.youtube.com/watch?v=7xALolZzhSM",
  "https://www.youtube.com/watch?v=kanHreEaJZ4",
  "https://www.youtube.com/watch?v=AJmEaYsLYB8",
  "https://www.youtube.com/watch?v=_OKAwz2MsJs",
  "https://www.youtube.com/watch?v=CmRih_VtVAs",
  "https://www.youtube.com/watch?v=odM92ap8_c0",
  "https://www.youtube.com/watch?v=UGc5Tzz19UY"
];
const upcomingmovies=[
  {id:1,name:"Love and Monsters",image:"https://i.pinimg.com/736x/2b/1d/b6/2b1db6333afded33090a9d7ee4e1d7ce.jpg",date:"10 feb"},
  {id:2,name:"Maze-Runner",image:"https://i.pinimg.com/736x/ed/ff/3c/edff3c62df68410a38764a9fb042ae7f.jpg",date:"22 Mar"},
  {id:3,name:"Rebel-Moon",image:"https://i.pinimg.com/736x/ef/4a/08/ef4a08b5ed91bc42529d6189d1044e6f.jpg",date:"20 Jun"},
  {id:4,name:"Wakkanda - Forever",image:"https://i.pinimg.com/736x/d3/46/ce/d346ce247d5e5c09f2cc6958faa689b2.jpg",date:"25 Jan"},
  {id:5,name:"Dora",image:"https://i.pinimg.com/736x/3e/d8/3d/3ed83d5de7ca5a8b73facff904b8a63a.jpg", date:"30 Feb"},
  {id:5,name:"Monkey-King",image:"https://i.pinimg.com/736x/2c/13/b3/2c13b3896d56bb3e16d42ad0ebe1b529.jpg", date:"17 jun"},
  {id:6,name:"Planet Of the Apes",image:"https://i.pinimg.com/736x/f0/15/31/f01531a37b3a1cb0f9f458bf5f5f985d.jpg", date:"17 jun"},
  {id:7,name:"The GarField",image:"https://i.pinimg.com/736x/a9/2a/e7/a92ae77989fb110d9db87395ae23ef7c.jpg",date:"22 Mar"},
  
]
// Function to Extract YouTube Thumbnail
const getYouTubeThumbnail = (videoUrl) => {
  try {
    const url = new URL(videoUrl);
    const videoID = new URLSearchParams(url.search).get("v");
    return videoID ? `https://img.youtube.com/vi/${videoID}/hqdefault.jpg` : "";
  } catch (error) {
    console.error("Invalid YouTube URL:", videoUrl);
    return "";
  }
};

export const UpcommingMovies = () => {
  const [currentVideo, setCurrentVideo] = useState(null);
  const [reverseScroll, setReverseScroll] = useState(100);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 10,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true, 
    centerPadding: "5px", 
    autoplay: true,
    autoplaySpeed: 900, 
    arrows:false,

    responsive: [{ breakpoint: 1024, settings: { slidesToShow: 3 } }],
  };
  const set = {

    infinite: true,
 
    slidesToShow: 3, 
    slidesToScroll: 1,
    autoplay: false,
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

  return (
    <div className="hai">
   
    <div className="video-slider container-fluid bg-body-secondary py-2 mt-2">
    <div>
      <center><p className="par px-4">Marvel New Movies Trailers</p></center>
      <Slider {...sliderSettings}  rtl={true}>
        {videos1.map((video, index) => (
          <div key={index} className="video-card">
            {currentVideo === video ? (
              <ReactPlayer url={video} controls playing width="100%" height="100%" />
            ) : (
              <img
                src={getYouTubeThumbnail(video)}
                alt="Video Thumbnail"
                className="thumbnail"
                onClick={() => setCurrentVideo(video)}
              />
            )}
          </div>
        ))}
      </Slider>
      </div>
      </div>
      <div className="video-slider container-fluid bg-body-secondary py-2 mt-2">
    <div>
      <center><p className="par px-4">Disnep New Movies Trailers</p></center>
      <Slider {...sliderSettings}>
        {videos.map((video, index) => (
          <div key={index} className="video-card">
            {currentVideo === video ? (
              <ReactPlayer url={video} controls playing width="100%" height="100%" />
            ) : (
              <img
                src={getYouTubeThumbnail(video)}
                alt="Video Thumbnail"
                className="thumbnail"
                onClick={() => setCurrentVideo(video)}
              />
            )}
          </div>
        ))}
      </Slider>
   
      </div>
     
    </div>
    <div className="video-slider container-fluid bg-body-secondary py-2 mt-2">
    <div>
      <center><p className="par px-4">DC New Movies Trailers</p></center>
      <Slider {...sliderSettings}  rtl={true}>
        {videos2.map((video, index) => (
          <div key={index} className="video-card">
            {currentVideo === video ? (
              <ReactPlayer url={video} controls playing width="100%" height="100%" />
            ) : (
              <img
                src={getYouTubeThumbnail(video)}
                alt="Video Thumbnail"
                className="thumbnail"
                onClick={() => setCurrentVideo(video)}
              />
            )}
          </div>
        ))}
      </Slider>
   
      </div>
     
    </div>
    <div className="start">
        <div className="container-fluid mt-4 bg-body-secondary ">
          <h2 className="text-black ms-4 p-2">Upcomming Release Movies</h2>
          <div className=" row p-2  ">
            {upcomingmovies.map((product,index) => (
        
              <div key={product.id} className="card car  g" >
                <img src={product.image} alt={product.name} className="card-img-top" />
                <div className="card-body text-center " >
                 <center> <p className="card-title text-center ">{product.name}</p></center>
                 <center> <h5 className="card-title text-center">Releasing-on: {product.date}</h5></center>
                </div>
              </div>
         
            ))}
            
          </div>
          </div>
          </div>
          <Footer/>
      </div>
  );
};


