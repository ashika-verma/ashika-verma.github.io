import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/Home";
import { CLASSES_URL, HOME_URL, PROJECTS_URL } from "./consts";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={HOME_URL} index element={<HomePage />} />
        <Route path={PROJECTS_URL} element={<HomePage />} />
        <Route path={CLASSES_URL} element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
