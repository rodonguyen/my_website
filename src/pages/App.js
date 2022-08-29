
import NavBar from '../components/NavBar';
import AboutMe from './AboutMe';
import { Container } from 'reactstrap';
import { Outlet, BrowserRouter, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../stylesheets/App.css';



function App() {
  const AppConstantElements = (
    <div className="App">
      <NavBar />
      <Container>
        <h1>Rodo Nguyen</h1>
        <Outlet></Outlet>
      </Container>
    </div>
  );

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={AppConstantElements}>
            <Route path="me" element={<AboutMe/>} />
            <Route path="blog" element={<AboutMe/>} />
            <Route path="myresume" element={<AboutMe/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
