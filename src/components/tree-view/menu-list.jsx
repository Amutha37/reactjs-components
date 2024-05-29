// import MenuItem from "./menu-item";

// const MenuList = ({ list = [] }) => {
//   return (
//     <ul key={list.label} className='menu-list-container'>
//       {list && list.length
//         ? list.map((listItem) => <MenuItem item={listItem} />)
//         : null}
//     </ul>
//   );
// };

// export default MenuList;

// MenuList.js
import MenuItem from "./menu-item.jsx";

const divStyle = {
  minHeight: '50vh',
  width: '450px', // Added 'px' to ensure proper CSS
  background: 'rgb(80,83,219)',
  display: 'flex',
  flexDirection: 'column'
};

const MenuList = ({ list = [] }) => {
  return (
    <ul className="menu-list-container" style={divStyle}>
      {list.map((listItem, index) => (
        <MenuItem key={index} item={listItem} />
      ))}
    </ul>
  );
};

export default MenuList;