import { NavLink } from 'react-router-dom';

export default function Header() {
  const activeStyle = {
    color: '#0abf53',
  };
  return (
    <nav className={"nav"}>
      <NavLink className={"nav-itens"} to="/adyen" end activeStyle={activeStyle}>Home</NavLink>
      <NavLink className={"nav-itens"} to="gravador" activeStyle={activeStyle}>Gravador</NavLink>
      <NavLink className={"nav-itens"} to="agradecemos" activeStyle={activeStyle}>Agradecemos</NavLink>
    </nav>
  );
};