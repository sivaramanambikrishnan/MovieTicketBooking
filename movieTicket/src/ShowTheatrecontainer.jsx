import { useLocation, useNavigate } from "react-router-dom";
import { Footer } from "./Footer";
export const ShowTheatrecontainer=()=>{
  const container=useLocation();
 
  const data=container.state;


  return(
    <div>
           <div className="container">
           <div className="row">
           <div className="col-5 py-5">
           <h4 className="text-center">{data?.name}</h4>
               <img src={data?.image} className="photo" ></img>
             
            </div>
            <div className="col-6 py-5 mt-2 ">
               <div className="movie-name">
               <h4>{data?.name}</h4>
              
               <div className="mt-3">
               <h6 className="p-1">About :<p> {data?.about}</p></h6>
               <h6 className="p-1">Rating : {data?.rating} 🌟</h6>
               <h6 className="p-1">Current Show :  <img src={data?.movie}  style={{ width: '300px', height: '200px' }} className="photo" ></img></h6>
             
              
       <h6 className="text-success text-center">Available on Theatres</h6>
       <p className="text-danger"> <strong>Note:</strong>check The Movies on Home page</p>



               </div>
               </div>
            </div>  
            </div>
           
           </div>
           <Footer />
           </div>
  );

}