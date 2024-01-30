const MenuItems = (props) => {
  return(
    <ul className="menu-items">
      {props.menuItems.map((item) => {return(<li key={item} onClick={() =>{props.changeBody(item.toLowerCase())}}>{item}</li>)})}
    </ul>
  )
}

export default MenuItems