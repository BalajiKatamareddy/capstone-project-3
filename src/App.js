import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './menu';
/* import Arraysort from './arraysort'; */
import Home from './home';
import image from './image/1.jpg';
import About from './about';
import Contact from './contact';
import Login from './login';
import Create from './create';
import Product from './product';
import Productcard from './productcard';
function App(){
  return(
<div className='App'>
  <BrowserRouter>
  <Menu />
    <Routes>
{/*       <Route path="/arraysort" element={<Arraysort/>}/> */}
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/create" element={<Create/>}/>
      <Route path="/productcard" element={<Productcard/>}/>
      <Route path="/product" element={<Product/>}/>
    </Routes>
  </BrowserRouter>
</div>
  );
}
export default App;