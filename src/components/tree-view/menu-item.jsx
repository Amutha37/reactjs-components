import { useState } from "react";
import MenuList from "./menu-list";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";

const MenuItem = ({ item }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

//   collecting and displaying children
  const handleToggleChildren = (getCurrentLabel) => {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel],
    });
  };


  return (
 

       
    <li>
   
   
      <div  className="menu-item" >
      <p key={item.label}>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => handleToggleChildren(item.label)}>
            {displayCurrentChildren[item.label] ? (
              <IoMdArrowDropup  color='#fff'/>
            ) : (
              <IoMdArrowDropdown  color='#fff' />
            )}
          </span>
        ) : null}
      </div>

{/* check for children and repeat the process from MenuList */}
      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
      
      {/* {item && item.children.length > 0 ? (
        <MenuList list={item.children} />
      ) : null} */}
    </li>

  );
};
export default MenuItem;


// import { useState } from "react";
// import MenuList from "./menu-list";
// import {FaMinus, FaPlus} from 'react-icons/fa'

// export default function MenuItem({ item }) {
//   const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

//   function handleToggleChildren(getCurrentlabel) {
//     setDisplayCurrentChildren({
//       ...displayCurrentChildren,
//       [getCurrentlabel]: !displayCurrentChildren[getCurrentlabel],
//     });
//   }

//   console.log(displayCurrentChildren);

//   return (
//     <li>
//       <div className="menu-item">
//         <p>{item.label}</p>
//         {item && item.children && item.children.length ? (
//           <span onClick={() => handleToggleChildren(item.label)}>
//             {
//                 displayCurrentChildren[item.label] ? <FaMinus color="#fff" size={25} /> : <FaPlus color="#fff" size={25} />
//             }
//           </span>
//         ) : null}
//       </div>

//       {item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ? (
//         <MenuList list={item.children} />
//       ) : null}
//     </li>
//   );
// }