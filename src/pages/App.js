import NavBar from "../components/NavBar";
import ContactMe from "./ContactMe";
import List100 from "./List100";
import Resume from "./Resume";
import Home from "./Home";
import DateMe from "./DateMe";
import TimeIHaveLeft from "./TimeIHaveLeft";
import NotFound from "./NotFound";
import "../stylesheets/App.css";

import { Outlet, BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  // Utilise cache/local storage to store themeMode, keep it consistent throughout the session
  let themeModeFromLS = localStorage.getItem("themeMode"); 
  const [themeMode, setThemeMode] = useState(themeModeFromLS || 'Light');

  useEffect(() => {
    if (themeMode === "Dark") {
      document.body.classList.add("dark");
      localStorage.setItem('themeMode', 'Dark')
    } else if (themeMode === "Light") {
      document.body.classList.remove("dark");
      localStorage.setItem('themeMode', 'Light')
    }
  }, [themeMode]);

  const AppConstantElements = (
    <div className="App">
      <NavBar themeMode={themeMode} setThemeMode={setThemeMode} />
      <Outlet />
    </div>
  );

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={AppConstantElements}>
            <Route path="contactme" element={<ContactMe />} />
            <Route path="resume" element={<Resume />} />
            <Route path="list-100" element={<List100 />} />
            <Route path="dateme" element={<DateMe />} />
            <Route path="timeihaveleft" element={<TimeIHaveLeft/>} />
            <Route path="/" exact element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
