import { useState,useEffect } from "react";
import "./SeatBooking.css"; 
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";

export const SeatBooking=()=> {
  const showTicket = () => {
    Swal.fire({
      title: "🎟 Movie Ticket",
      html: `
        <p><strong>Movie:</strong> ${theatrename}</p>
        <p><strong>Seats:</strong> ${selectedSeats.join(", ")}</p>
        <p><strong>Total Paid:</strong> ₹${selectedSeats.length * seatPrice}</p>
      `,
      icon: "success",
      confirmButtonText: "OK",
    });
  };

    const showQR = () => {
      Swal.fire({
        title: "Scan to Pay",
        text: "Pay Using QR code and Get cashBack.",
        html: `
        <p>"Pay Using QR code and Get cashBack.</p>
        <p><strong>Amount:</strong>₹${selectedSeats.length * seatPrice}</p> 
         <p><strong>Note:</strong>After Payment Ticket will be issued !</p> 
      `,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4sZF3qL-a-aQI98aJJm2xkvTFKfdYezZdUw&s",
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: "Payment QR Code",
        confirmButtonText: "Close",
      }).then(() => {
        
        showTicket();
      });;
    };

  const navigate=useLocation();
  const { theatrename,theatreTime } = navigate.state 
  console.log("Details:",theatrename);

  const rows = 12;
  const cols=20;
  const seatPrice = 150;
  const numBookedSeats = 60;  
  const [bookedSeats, setBookedSeats] = useState([]);

  useEffect(() => {
    const generatedSeats = new Set();
    while (generatedSeats.size < numBookedSeats) {
      const randomRow = Math.floor(Math.random() * rows);
      const randomCol = Math.floor(Math.random() * cols);
      generatedSeats.add(`${randomRow}-${randomCol}`);
    }
    setBookedSeats([...generatedSeats]);
  }, []); 
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seat) => {
    if (bookedSeats.includes(seat)) return; 
    setSelectedSeats((prev) =>
      prev.includes(seat)
        ? prev.filter((s) => s !== seat)
        : [...prev, seat]
    );
    
  };

  return (
    <div className="container-6">
      <h1 className="title">Movie Seat Booking</h1>
      <p className="text-center">Ticket Price-150</p>
      <div className="screen">SCREEN</div>
      <p className="text-center fw-bold">{theatrename}</p>
      <p className="text-center fw-bold">{theatreTime} Show</p>
      <div className="seating-area">
        {[...Array(rows)].map((_, row) => (
          <div key={row} className={`seat-row ${row === 4 || row === 8 ? "walking-space" : " "}`}>
            {[...Array(cols)].map((_, col) => {
              const seat = `${row}-${col}`;
              return (
                <div key={seat}  className={`seat-container ${col === 3 || col === 15 ? "walking-space-column" : ""}`}>
                  <div
                    className={`seat ${bookedSeats.includes(seat) ? "booked" : selectedSeats.includes(seat) ? "selected" : "available"}`}
                    onClick={() => handleSeatClick(seat)}
                  >
                         <div className={`seat seats ${bookedSeats.includes(seat) ? "booked" : selectedSeats.includes(seat) ? "selected" : "available"}`}></div>
                  </div>
                  <p className="seat-number">{String.fromCharCode(65 + row)}-{col + 1}</p>
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <div className="summary">
      
        <p className="text-center fw-medium text-danger" >Total Amount: ₹{selectedSeats.length * seatPrice}</p>

      </div>
      {selectedSeats.length > 0 && (
        <div>
    <p className="fw-medium text-success">Selected Seats: {selectedSeats.map(seat => {
      const [row, col] = seat.split("-");
      return `${String.fromCharCode(65 + Number(row))}-${Number(col) + 1}`;
    }).join(", ")}
    
    </p>
    <center><button  className="btn btn-dark" onClick={showQR}>Book Tickets</button></center>
    </div>
  )}
  
    </div>
  );
}
