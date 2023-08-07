import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FlaewahHomeScreen from './views/FlaewahHomeScreen';
import WhyFlaewah from './views/WhyFlaewah';
import FlaewahContact from './views/FllaewahContact';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FlaewahHomeScreen />} />
          <Route exact path="/whyflaewah" element={<WhyFlaewah />} />
          <Route exact path="/contact" element={<FlaewahContact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
