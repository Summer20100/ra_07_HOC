import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Time from './components/Time/Time'
import Highlight from './components/Highlight/Highlight'
import Aggregation from './components/Aggregation/Aggregation'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={
          <div className="App">
            <Navbar />
            <Time />
            <Highlight />
            <Aggregation />
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
