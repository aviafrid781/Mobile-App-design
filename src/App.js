import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Reward from './Pages/Reward/Reward';

import Home from './Pages/Home/Home';



function App() {
  return (
    <div className="App">
     

      <BrowserRouter>

      <Routes>
          <Route path="/" element={< Home />} />
        </Routes>
       
        <Routes>
          <Route path="/reward" element={< Reward />} />
        </Routes>
      

      </BrowserRouter>
    </div>
  );
}

export default App;
