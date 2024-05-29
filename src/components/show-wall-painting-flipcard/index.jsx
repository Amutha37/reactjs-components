import { useState, useRef } from "react";
import { DisplayOnTheWall } from "./images/images";

import "./styleflip.css";

const ShowPaintingOnFlipCard = () => {
  const [selected, setSelected] = useState(null);
  const [pulse, setPulse] = useState(false);
  const [flip, setFlip] = useState(false);

  const handleSingleSelection = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
    setPulse(true);
    setFlip(!flip);
  };

  return (
    <div className="painting-on-wall-flipcarp-container">
      <h1>Picture on wall flip card </h1>

      <div className="commission-images-row ">
        {DisplayOnTheWall.map((item, index) => (
          <div className="commission-image-columnn">
            <div className="flip-card">
              <div
                className={`flip-card-inner ${
                  selected === item.id ? "flip" : "zoom "
                }`}
              >
                <div key={index} className="  flip-card-front">
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: "300px", height: "300px" }}
                  />
                </div>

                <div className="flip-card-back">
                  <img
                    src={item.wallImg}
                    alt={item.name}
                    style={{ width: "300px", height: "300px" }}
                  />
                  <p className="title-name">{item.name}</p>
                </div>
              </div>
            </div>

            {/* circle start */}

            <div className="circle_big2 ">
              <div className="circle_middle2">
                <button
                  className="circle_small2"
                  onClick={() => handleSingleSelection(item.id)}
                >
                  {/* {selected === item.id ? '-' : '+' } */}+
                </button>
              </div>
            </div>

            {/* circle end */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowPaintingOnFlipCard;
