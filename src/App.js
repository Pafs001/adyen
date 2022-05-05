import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './Menu';
import Gravador from './Gravador';
import Agradecemos from './Agradecemos';
import Home from './Home';
import NotFound from './NotFound';

export const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="agradecemos" element={<Agradecemos />} />
        <Route path="gravador" element={<Gravador />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};