
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from './components/Home';
import Summary from './components/Summary';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='fluid-container' >

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" key="/" element={<Home />} />
          <Route exact path='/Summary' key="Summary" element={<Summary />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
