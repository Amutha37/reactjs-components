// MenuItem.js
import { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import MenuList from "./menu-list";

const MenuItem = ({ item }) => {
  const [isChildrenDisplayed, setIsChildrenDisplayed] = useState(false);

  const handleToggleChildren = () => {
    setIsChildrenDisplayed(!isChildrenDisplayed);
  };

  return (
    <li>
      <div className="menu-item">
        <p>{item.label}</p>
        {item.children && item.children.length > 0 && (
          <span onClick={handleToggleChildren}>
            {isChildrenDisplayed ? (
              <IoMdArrowDropup color="#fff" />
            ) : (
              <IoMdArrowDropdown color="#fff" />
            )}
          </span>
        )}
      </div>
      {isChildrenDisplayed && <MenuList list={item.children} />}
    </li>
  );
};

export default MenuItem;