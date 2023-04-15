import React, { useState } from "react";
import "./CelebrityCard.css";
import Celebrityforms from "./CelebrityForm";
import Header from "./headers";
type HeaderProps = {
  showComponent1: boolean;
};

const CelebrityCard = ({showComponent1}: any) => {
  const [showComponent, setShowComponent] = useState(false);

  const handleClick = () => {
    setShowComponent(true);
  };
 

  return (
    <>
      {!showComponent ? (
        <div>
          {" "}
          <Header showComponent1={showComponent} />
          <div className="container">
            <img
              className="image"
              src="https://wpcdn.starclinch.in/2019/03/26642.jpg?format=webp&w=576&dpr=1.5"
              alt="Ranbir Kapoor"
            />
            <div className="details">
              <h2 className="text-2xl font-bold mb-2">Ranbir Kapoor</h2>
              <p className="text-sm font-medium mb-2">(CELEBRITY APPEARANCE)</p>
              <p className="text-sm font-medium mb-4">Mumbai, Maharashtra</p>

              <button
                className="button-red"
                onClick={() => {
                  handleClick();
                }}
              >
                See Price and Book
              </button>

              <p className="text-sm mt-4">
                The ROCKSTAR who is a heartthrob of millions, Ranbir Kapoor is
                one of the finest <br />
                actors in Bollywood and is a true versatile performer
              </p>
            </div>
          </div>
        </div>
      ) : (
        <Celebrityforms />
      )}
    </>
  );
};

export default CelebrityCard;
