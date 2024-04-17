import {useRef} from "react";
import useFetch from "../useFetch-data";
import './styles.css'


const ScrollToTopAndBottom = () => {
  const { data, error, pending } = useFetch(
    `https://dummyjson.com/products?limit=100`,
    {}
  );

  // using ref to get current property
  const bottomref = useRef();
  const topref = useRef();
  // Scroll to top 

const handleScrollToTop = () => {
  topref.current.scrollIntoView({behavior: 'smooth'})
  // window.scrollTo({
  //   top:0,
  //   left:0,
  //   behavior:"smooth",
  // })
}

// Scroll to bottom
const handleScrollToBottom = () => {
bottomref.current.scrollIntoView({behavior: 'smooth'})
 
  
}


  if (error) {
    return <h1>Error has occured ! Please try again.</h1>;
  }

  if (pending) {
    return <h1>Loading ! Please wait</h1>;
  }

  return (
    <div className="scroll_Up_Down">
        <div ref={topref}></div>
      <h1>Scroll To Top And Bottom Feature</h1>
      {/* button to scroll to bottom  */}
      <h3>This is the top of the page</h3>

      <button onClick={handleScrollToBottom}>Scroll To Bottom</button>
    

      <ul style ={{listStyle : 'none'}}>
        {data && data.products && data.products.length
          ? data.products.map((item,unit) => <li key={item.title}>{item.title}</li>)
          : null}
      </ul>

       {/* button to scroll to top  */}
      <button onClick={handleScrollToTop}>Scroll To Top</button>
      <div ref={bottomref}></div>
      <h3>This is the bottom of the page</h3>
    </div>
  );
};
export default ScrollToTopAndBottom;
