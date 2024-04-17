import {useRef} from 'react';
import './styles.css'



const ScrollToSection = () => {

  const ref = useRef()

  const data = [
    {
      label: "First Card",
      style: {
        width: "100%",
        height: "600px",
        background: "red",
      },
    },
    {
      label: "Second Card",
      style: {
        width: "100%",
        height: "600px",
        background: "yellow",
      },
    },
    {
      label: "Third Card",
      style: {
        width: "100%",
        height: "600px",
        background: "blue",
      },
    },
    {
      label: "Fourth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "green",
      },
    },
    {
      label: "Fifth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "purple",
      },
    },
  ];

const handleScrollToSection = () => {
  // let pos = ref.current.getBoundingClientRect().top;
  //  window.scrollTo({
  //   top: pos,
  //   behavior: "smooth",
  // });

  // BOTH WAYS WORKS getBoundingClientRect and scrollIntoView
  
  ref.current.scrollIntoView({behavior: 'smooth'})
}

  return (
    <div className="scroll_Up_Down">
      <h1> Scroll to a particular section</h1>
      <button onClick={handleScrollToSection}>Click To Section</button>

      {data.map((dataItem, index) => (
        <div key={index} ref ={index === 2 ? ref : null} style={dataItem.style}>
          <h3>{dataItem.label}</h3>      console.log({index})
        </div>
        
      ))}

    </div>
  );
};

export default ScrollToSection;