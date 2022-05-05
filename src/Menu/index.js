import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import "./menu.css"
function Menu() {
  const [opemMenu, setOpemMenu] = useState(false);

  return (
    <>
    <div id={opemMenu == false ? "closedMenu" : "mySidenav"} className="sidenav">
      <div className="topMenu">
        <span className="btnClosed" onClick={() => { setOpemMenu() }}>&#9776;</span>
      </div>
      <NavLink to="/" >Home</NavLink>
      <NavLink to="gravador" >Gravador</NavLink>
      <NavLink to="agradecemos" >Agradecemos</NavLink>
    </div>
    <div className="topMenu">
    <span className="btnClosed"  onClick={() => { setOpemMenu() }}>&#9776; open</span>
    </div>
    
    </>
  );
};
export default Menu;