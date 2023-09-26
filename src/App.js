
import {  Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Player from './pages/Player';
import Nav from './components/Nav';
import Sidebar from  './components/Sidebar'
import Movies from './pages/Movies';


function App() {

  return (
    <div  className=" h-full w-full bg-[#030909]">
      <Nav/>
      <Sidebar/>
  <Routes >
    <Route path='/'  element={<Home/>}/>
    <Route path='Player'  element={<Player/>}/>
    <Route path='Movies'  element={<Movies/>}/>
    
  </Routes>
    </div>
  );
}

export default App;
