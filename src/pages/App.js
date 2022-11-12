
import NavBar from '../components/NavBar';
import ContactMe from './ContactMe';
import Project from './Project';
import List100 from './List100';
import Resume from './Resume';
import Home from './Home';
import DateMe from './DateMe';
import NotFound from './NotFound';
import '../stylesheets/App.css';

import { Outlet, BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from "react";

// import { Container } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [mode, setMode] = useState('Light')
  useEffect(() => {
    if (mode === 'Dark') {
      document.body.classList.add("dark");
    } else if (mode === 'Light') {
      document.body.classList.remove("dark");
    }
  }, [mode]);
  
  const AppConstantElements = (
    <div className="App">
      <NavBar mode={mode} setMode={setMode}/>
        <Outlet/>
    </div>
  );
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={AppConstantElements}>
            <Route path="contactme" element={<ContactMe/>} />
            <Route path="projects" element={<Project/>} />
            <Route path="resume" element={<Resume/>} />
            <Route path="list-100" element={<List100/>} />
            <Route path="dateme" element={<DateMe/>} />
            <Route path="/" exact element={<Home/>} />
            <Route path="*" element={<NotFound/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
