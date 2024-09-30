import './App.css'
import About from "./pages/About.jsx";
import Events from "./pages/Events.jsx";
import Gallery from "./pages/Gallery.jsx";
import BookAppointment from './pages/appointment/BookAppointment';
import ChooseGentsSeason from './pages/firran-collections/ChooseGentsSeason';
import ChooseLadiesSeason from './pages/firran-collections/ChooseLadiesSeason';
import Gents from './pages/firran-collections/Gents';
import Ladies from './pages/firran-collections/Ladies';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/designs' element={<Gallery/>}/>
        <Route path='/events' element={<Events/>}/>
        <Route path="/collections-ladies" element={<ChooseLadiesSeason />} />
        <Route path="/collections-gents" element={<ChooseGentsSeason />} />
        <Route path='/ladies' element={<Ladies/>}/>
        <Route path='/gents' element={<Gents/>}/>
        {/* Un-commented the appointment route */}
        <Route path='/appointment' element={<BookAppointment/>}/> 
      </Routes>
    </Router>
    </>
  )
}

export default App;
