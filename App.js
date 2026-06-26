import React, { useEffect, useState } from "react";
import "./App.css";

function App() {

  const [spaces, setSpaces] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/parking")
      .then((response) => response.json())
      .then((data) => setSpaces(data));
  }, []);

  return (
    <div className="container">
      <h1>Smart Parking Space Finder</h1>

      {spaces.map((space) => (
        <div className="card" key={space.id}>
          <h2>{space.name}</h2>
          <p>Status: {space.status}</p>

          {space.status === "Available" ? (
            <button>Book Now</button>
          ) : (
            <button disabled>Booked</button>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;