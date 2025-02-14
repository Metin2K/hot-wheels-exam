import './App.css';
import {Routes, Route} from 'react-router-dom'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Menu' element={<Menu/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Contact' element={<Contact/>}/>
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
