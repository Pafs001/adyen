import { NavLink } from 'react-router-dom';

export default function Header() {
  const activeStyle = {
    color: '#0abf53',
  };
  return (
    <nav>
      <NavLink to="/" end activeStyle={activeStyle}>Home</NavLink>
      <NavLink to="gravador" activeStyle={activeStyle}>Gravador</NavLink>
      <NavLink to="agradecemos" activeStyle={activeStyle}>Agradecemos</NavLink>
    </nav>
  );
};