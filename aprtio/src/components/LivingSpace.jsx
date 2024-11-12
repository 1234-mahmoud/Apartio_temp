import React from "react";
import "../style/LivingSpace.css";
import pic5 from "../imgs/pic5.jpg";
export default function LivingSpace() {
  return (
    <div className="living">
      <div className="branches">
        <h1>Apartio Introducing Next Level Living Space</h1>
        <p>
          Elit sed tempor incididunt umt laboret dolore magn aliqua enim sed
          ipsum dolor quis nostrud exercitation lamco ea consequat. Duis aute
          irure dolor in reprehenderit velit esse cillum dolore eu fugiat.
        </p>

        <div className="branches_cont">
          <div className="branch_">
            <div className="icon"></div>
            <h2>Entertainment</h2>
            <p>Mini Home Cinema View</p>
          </div>

          <div className="branch_">
            <div className="icon"></div>
            <h2>Fully Secured</h2>
            <p>24/7 With CCTV Cameras</p>
          </div>

          <div className="branch_">
            <div className="icon"></div>
            <h2>Outside View</h2>
            <p>Garden, Deck, Roof Space...</p>
          </div>

          <div className="branch_">
            <div className="icon"></div>
            <h2>Chef & Cooking</h2>
            <p>Fresh Pizza & Coffee etc</p>
          </div>
        </div>
      </div>
      <div className="living_pic">
        <img src={pic5} alt="" />
      </div>
    </div>
  );
}
