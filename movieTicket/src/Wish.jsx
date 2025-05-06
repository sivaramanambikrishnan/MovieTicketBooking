import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


import "./Wish.css"
import { Footer } from "./Footer";

export const Wish=({items,setItems})=>{
  if (!items || items.length === 0) {
    return(
      <div>

    <center><p className="pt text-center text-danger">WishList is Empty</p></center>;
    </div>
    );
  }
  
  return (
    
    <div>
   
    <div className="container " >
      {items?.length === 0 ?( <p>WishList is Empty</p> 
      ) : (
        <div className="container mt-4">
          <h2 className="text-center">Wish-List Movies</h2>
          <div className="row">
            {Array.isArray(items) && items.length > 0 ?
              (items.map((item, index) => (
                <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card custom-card">
              <img src={item.image} className="card-img-top" alt={item.name} />
              <div className="card-body custom-card-body text-center">
                <h5 className="custom-card-title">{item.name}</h5>
                <p className="custom-card-text text-center">Rating  - {item.rating}</p>
                <button className="btn btn-dark">Check for Theatres</button>
              </div>
              
            </div>
         
          </div>
              ))):(
                  <p className="pt">WishList is Empty</p>
              )}

          </div>
        </div>
      )}
    
    </div>
       </div>
  );

};    

