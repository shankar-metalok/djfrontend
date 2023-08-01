import React from 'react';
import Register from './components/register';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './components/signup';
import Events from './components/events'
import Map from './components/map'

const App = () => {


  return (
    <div>
       

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Events/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='signup' element={<Signup/>}/>
        <Route path='/map' element={<Map/>}/>
      </Routes>
    </BrowserRouter>
      

    </div>
  );
};

export default App;
