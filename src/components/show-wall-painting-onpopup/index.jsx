import { useState} from "react";
import { DisplayOnTheWall } from "./images/images";

import "./styleonflip.css";

const ShowPaintingOnPopup = () => {
  const [selected, setSelected] = useState(null);

  const handleSingleSelection = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  return (
    <div className="painting-on-wall-flip-container">
      <h1>Picture on wall</h1>

      <div className="commission-images-row">
        {DisplayOnTheWall.map((item, index) => (
          <div key={index} className="commission-image-column">
            <img src={item.image} alt={item.name} />

            {/* circle start */}

            <div className="circle_big ">
              <div className="circle_middle">
                <button
                  className="circle_small"
                  onClick={() => handleSingleSelection(item.id)}
                >
                  {selected === item.id ? "-" : "+"}
                </button>
              </div>
            </div>

            {/* circle end */}

            {/* card start */}
            {selected === item.id && (
              <div className="card">
                <img
                  src={item.wallImg}
                  alt={item.name}
                  style={{ width: "100%" }}
                />
                <p className="title-name">{item.name}</p>
              </div>
              // /card end 
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowPaintingOnPopup;
