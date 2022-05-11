import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Courses from './component/Courses';
import Course from './component/Course';
import Nav from './component/Nav';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<BrowserRouter>
<Nav/>
<Routes>
<Route path='/app' element={<App/>}/>
<Route path='/courses' element={<Courses/>}>
  <Route path=':subject' element={<Course/>}/> 
  </Route>
</Routes>

</BrowserRouter>






);

