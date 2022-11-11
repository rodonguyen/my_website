
import NavBar from '../components/NavBar';
import ContactMe from './ContactMe';
import Project from './Project';
import List100 from './List100';
import Resume from './Resume';
import Home from './Home';
import DateMe from './DateMe';
import NotFound from './NotFound';
import { Outlet, BrowserRouter, Routes, Route } from 'react-router-dom';
import '../stylesheets/App.css';

// import { Container } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const AppConstantElements = (
    <div className="App">
      <NavBar />
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
