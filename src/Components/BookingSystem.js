import React, { useState } from 'react';
import './BookingSystem.css'; // Import additional CSS for specific components if needed

function BookingSystem() {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seat) => {
    setSelectedSeats((prevSeats) => {
      if (prevSeats.includes(seat)) {
        return prevSeats.filter(s => s !== seat);
      } else {
        return [...prevSeats, seat];
      }
    });
  };


return (
    <div className="SeatSelection">
      <h2>Select Your Seats</h2>
      <div>
        {[...Array(10)].map((_, index) => (
          <button
            key={index}
            onClick={() => handleSeatClick(index)}
            className={selectedSeats.includes(index) ? 'selected' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <div>
        <h3>Selected Seats:</h3>
        {selectedSeats.join(', ')}
      </div>
      <button>Proceed to Payment</button>
    </div>
  );
}

export default BookingSystem;