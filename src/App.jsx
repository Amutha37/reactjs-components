import Accordian from './components/accordian';
import Treeview from './components/tree-view';
import GithubProfileFinder from './components/git-profile-finder';
import { BrowserRouter } from "react-router-dom";
// import { Accordian, Treeview, GithubProfileFinder,Navbar} from "./components";
import menus from "./components/tree-view/data"

import  Navbar from "./components/canvas/Navbar";
// import '"./components/canvas/Navbar/styles.css'

function App() {


  
  return (
    <div> 
    <BrowserRouter>
      <div className="App">


        <Navbar/ >

        <div>
          {/* Accordian component */}
          <Accordian />

          {/*  Tree view component/menu UI component / recursive navigation menu  */}
          <Treeview menus={menus} />

          {/* Github profile finder */}
          <GithubProfileFinder />
        </div>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;

