import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Navbar } from './components';
import DEX from './pages/DEX';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Tutorials from './pages/Tutorials';

const App = () => {
  return (
    <BrowserRouter>
      <div className="overflow-hidden gradient-bg-navbar">
        <Navbar />
      </div>
               
      <Routes>
        <Route index element={<Home />} />
          <Route path="/DEX" element={<DEX />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Tutorials" element={<Tutorials />} />
      </Routes>
      
    
    </BrowserRouter>
  );
}

export default App
