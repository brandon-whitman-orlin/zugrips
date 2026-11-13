import React, { useEffect, useState } from "react";
import "./Home.css";

import Navbar from "../../components/Navbar/Navbar";

function Home() {


  return (
    <div className="home">
      <main className="main">
        <Navbar/>
      </main>

      <footer className="footer"></footer>
    </div>
  );
}

export default Home;