import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>SACI API</h1> 
      <Link to="/frame/label">Label Frame</Link><br />
      <Link to="/caption/frame">Caption Frame</Link><br />
      <Link to="/video/predictions">Video Predictions</Link><br />
    </div>
  );
}

export default Home;