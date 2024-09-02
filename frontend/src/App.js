
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Book from './components/Book';
import Available from './components/Available';
import Menu from './components/Menu';
import Confirm from './components/Confirm';

function App() {
  return (
    <>
      
    <BrowserRouter>
 <Navbar/>
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/about' element={<About/>}></Route>
  <Route path='/book' element={<Book/>}></Route>
  <Route path='/avail' element={<Available/>}></Route>
  <Route path='/menu' element={<Menu/>}></Route>
  <Route path='/confirm' element={<Confirm/>}></Route>
</Routes>
    </BrowserRouter>
    </>
   
  );
}

export default App;
