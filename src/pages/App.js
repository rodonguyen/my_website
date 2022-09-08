
import NavBar from '../components/NavBar';
import ContactMe from './ContactMe';
import Project from './Project';
import Blog from './Blog';
import Resume from './Resume';
import Home from './Home';
import { Container } from 'reactstrap';
import { Outlet, BrowserRouter, Routes, Route } from 'react-router-dom';

import '../stylesheets/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const AppConstantElements = (
    <div className="App">
      <NavBar />
      <Container>
        <Outlet></Outlet>
      </Container>
    </div>
  );

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={AppConstantElements}>
            <Route path="/" element={<Home/>} />
            <Route path="contactme" element={<ContactMe/>} />
            <Route path="projects" element={<Project/>} />
            <Route path="resume" element={<Resume/>} />
            <Route path="blog" element={<Blog/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
