import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './Menu';
import Gravador from './Gravador';
import GravarDepoimento from './GravarDepoimento';
import Agradecemos from './Agradecemos';
import Home from './Home';
import NotFound from './NotFound';

export const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/adyen" element={<Home />} />
        <Route path="agradecemos" element={<Agradecemos />} />
        <Route path="gravador" element={<Gravador />} />
        <Route path="depoimento" element={<GravarDepoimento />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};