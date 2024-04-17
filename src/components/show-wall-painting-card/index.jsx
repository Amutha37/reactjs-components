import { useState, useRef } from "react";
import { DisplayOnTheWall } from "././images/images";
import "./styledisplay.css";

const ShowPaintingDisplay = () => {
  const [show, setShow] = useState(false);

 
  return (
    <div className="painting-on-wall-container">
      <h1>Picture on wall</h1>
      <div className="picture-display-container">
        {DisplayOnTheWall.map((item, index) => (
          <div className="display-picture" key={index}>
            <div className="img-box" >
              {/* <div className="product" key={index}> */}
              <img src={item.image} alt={item.name} />

              {/* <p>{item.name}</p> */}
              <div className="circle_big">
                <div className="circle_middle">
                  <button  className="circle_small"onClick={() => setShow(!show)} >
                    +
                  </button>
                </div>
              </div>
            </div>

{/* card start */}
{show ? 
<div className="card">
<img src={item.wallImg} alt={item.name} style={{width: '100%'}}/>
  {/* <img src="/w3images/team2.jpg" alt="John" style="width:100%"> */}
  <h1>John Doe</h1>
  <p className="title">CEO & Founder, Example</p>
  <p>Harvard University</p>
  <div  style={{marginTop:'24px 0px'}} className="social-media">
    {/* <a href="#"><i class="fa fa-dribbble"></i></a> 
    <a href="#"><i class="fa fa-twitter"></i></a>  
    <a href="#"><i class="fa fa-linkedin"></i></a>  
    <a href="#"><i class="fa fa-facebook"></i></a>  */}
    <p>facebook</p>
    <p>twitter</p>
    <p>Instagram</p>
    <p>Linkedin</p>
  </div>
  <p><button className="contact-button" >Contact</button></p>
</div> : null}
{/* card end */}

          </div>
        ))}

     
      </div>
    </div>
  );
};

export default ShowPaintingDisplay;
//  className={disableButton ? "button-able" : "button-disable"}
