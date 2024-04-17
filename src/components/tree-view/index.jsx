import MenuList from './menu-list';


export default function Treeview({menus = []}) {
    
return (
<div className='tree-view-container'> 
<ul>
        <li> test</li>
        <li> test</li>
      </ul>
<MenuList list={menus}/>
</div>

)
}