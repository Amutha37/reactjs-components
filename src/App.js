import Accordian from './components/accordian';
 import Treeview from './components/tree-view';
import GithubProfileFinder from './components/git-profile-finder';
// import { BrowserRouter } from "react-router-dom";
// import { Accordian, Treeview, GithubProfileFinder,Navbar} from "./components";
 import menus from "./components/tree-view/data"
import ScrollToTopAndBottom from "./components/scroll-to-top-and-bottom";
import ScrollToSection from "./components/scroll-to-top-and-bottom/scroll-to-sections";
// import Accordian from "./components/accordian";
import LoadMoreProducts from "./components/Load-more-product";
import ShowPaintingOnPopup from "./components/show-wall-painting-onpopup";
import ShowPaintingOnFlipCard from "./components/show-wall-painting-flipcard";
import ButtonAnimation from "./components/buttonCircle";


function App() {


  
  return (
    <div> 
    {/* <BrowserRouter> */}
      <div className="App">




        <div>
          {/* Accordian component */}
          <Accordian />

          {/*  Tree view component/menu UI component / recursive navigation menu  */}
          {/* <Treeview menus={menus} /> */}

          {/* Github Profile Finder */}
          {/* <GithubProfileFinder /> */}

         
         
         

{/* Load more products when button with more clicked */}
           <LoadMoreProducts/>


{/* Load more products with button  */}



{/* button animation */}
            {/* <ButtonAnimation/> */}



{/* show wall paintig on flip */}
{/* <ShowPaintingOnFlip/> */}


<ShowPaintingOnPopup/>

<ShowPaintingOnFlipCard/>



 {/* Scroll Up and Down */}
          <ScrollToTopAndBottom/>

            {/* Scroll To Particular Section */}
            <ScrollToSection/>
        </div>
      </div>
    {/* </BrowserRouter> */}
    </div>
  );
}

export default App;

