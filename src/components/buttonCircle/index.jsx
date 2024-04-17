
import KingLionDisplay from "./KingLionDisplay.jpg";

import "./stylesbutton.css";

const ButtonAnimation = () => {
  //   const [loading, setLoading] = useState(false);
  //   const [productsData, setProductsData] = useState([]);
  //   const [error, setError] = useState(null);
  //   const [count, setCount] = useState(0);
  //   const [disableButton,setDisableButton] = useState(false);

  return (
    <div>
        <h1>Circle animation </h1>
    <div className="button_container">
    

      {/* CIRCLE 1 */}
      <div className="table"> 
      <div className="load-more-container" >
        <button className="button-focus">Load More... </button>
      </div>
      </div>

      {/* CIRCLE 2 */}
      <div className="table"> 
      <div className="circle_b ">
        <button className="circle_s">HOVER ME!</button>
      </div>
      </div>

      {/* CIRCLE 3 */}
      <div className="table"> 
      <div className="circle_bb">
        <div className="blob2">
          <div className="circle_b2">
            <button className="circle_ss">HOVER !</button>
          </div>
        </div>
      </div>
      </div>

      {/* sample 4*/}
      <div className="table"> 
      <div className="blob"></div>
      </div>
      {/* CIRCLE 5 */}


      <div className="table"> 
      <div className="circle_5b">
        <button className="circle_5s">+</button>
      </div>
      </div>
    
    </div>
      {/* CIRCLE 6 with image  */}

      <div className="display-picture">
        <div className="img-container">
          <img className="lionDisplay" src={KingLionDisplay} alt="King Lion" />
          <div className="circle_6bb">
            <div className="circle_6b">
              <button className="circle_6s">+</button>
            </div>
          </div>
        </div>
      </div>

      </div>
  );
};

export default ButtonAnimation;
//  className={disableButton ? "button-able" : "button-disable"}
