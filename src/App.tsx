import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/Home";
import { CLASSES_URL, HOME_URL, PROJECTS_URL } from "./consts";
import ProjectsPage from "./Pages/Projects";

function App() {
  return (
    <div className="selection:text-slate-900 selection:bg-rose-600">
      <Router>
        <Routes>
          <Route path={HOME_URL} index element={<HomePage />} />
          <Route path={PROJECTS_URL} element={<ProjectsPage />} />
          <Route path={CLASSES_URL} element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
