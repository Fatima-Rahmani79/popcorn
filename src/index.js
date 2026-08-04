import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating maxRating={5} color="#084bbe" onSetRating={setMovieRating} />
      {movieRating ? <p>You rated this movie {movieRating} stars</p> : ""}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating maxRating={10} size={36} color="#ff6b6b" defaultRating={5} />
    <Test />
  </React.StrictMode>,
);
