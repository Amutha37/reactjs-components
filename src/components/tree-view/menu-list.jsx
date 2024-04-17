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

import MenuItem from "./menu-item";

const divstyle = {
  minHeight : '50vh',
  width: '450',
  background: 'rgb(80,83,219)',
display: 'column'
}
 
export default function MenuList({ list = [] }) {
  return (
    <ul className="menu-list-container" style={divstyle}>
     
     


      {list && list.length
        ? list.map((listItem) => <MenuItem item={listItem} />)
        : null}
    </ul>
  );
}
