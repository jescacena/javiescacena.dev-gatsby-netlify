import React from "react";
import "./cards-carousel-home.component.scss";

const CardsCarouselHome = ({ children }) => {
  return (
    <div className="cards-carousel-home full-screen-mobile">
      <ul>
        {children.map((item, index) => {
          return (
            <li key={index} className="fl mr-12">
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CardsCarouselHome;
