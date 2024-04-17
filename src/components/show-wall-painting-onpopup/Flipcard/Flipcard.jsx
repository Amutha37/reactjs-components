import React from "react";

const Flipcard = ({wallImg ,name}) => {


   return (
     <div className="card">
<img src={wallImg} alt={name} style={{width: '100%'}}/>
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
</div> 

)}

export default Flipcard;
