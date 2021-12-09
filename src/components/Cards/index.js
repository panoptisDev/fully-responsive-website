import React from "react";
import "./index.css";
import CardItem from "../CardItem";

import img9 from "../../static/images/img-9.jpg";
import img2 from "../../static/images/img-2.jpg";
import img3 from "../../static/images/img-3.jpg";
import img4 from "../../static/images/img-4.jpg";
import img8 from "../../static/images/img-8.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={img9}
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
              alt="Waterfall Image"
            />
            <CardItem
              src={img2}
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
              alt="Ocean Image"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={img3}
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/services"
              alt="Sea Image"
            />
            <CardItem
              src={img4}
              text="Experience Football on Top of the Himilayan Mountains"
              label="Adventure"
              path="/products"
              alt="Footbal Stadium Image"
            />
            <CardItem
              src={img8}
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/sign-up"
              alt="Desert Image"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
