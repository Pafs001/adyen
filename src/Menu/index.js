import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import "./menu.css"
function Menu() {
  const [opemMenu, setOpemMenu] = useState(false);

  return (
    <>
    <div id={opemMenu == false ? "closedMenu" : "mySidenav"} className="sidenav">
      <span onClick={() => { setOpemMenu(false) }} className="closebtn">&times; </span>
      <NavLink to="/adyen" onClick={() => { setOpemMenu(false) }}>Home</NavLink>
      <NavLink to="gravador" onClick={() => { setOpemMenu(false) }}>Gravador</NavLink>
    
    </div>
    <div className="topMenu">
    <span className="btnClosed"  onClick={() => { setOpemMenu() }}>&#9776;</span>
    </div>
    
    </>
  );
};
export default Menu;