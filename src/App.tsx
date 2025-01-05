import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/Home";
import { BEST_BUTTON, BUSINESS_CARD, CLASSES_URL, HOME_URL, PROJECTS_URL } from "./consts";
import ProjectsPage from "./Pages/Projects";
import { ClassesPage } from "./Pages/Classes";
import BestButton from "./Pages/BestButton";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={HOME_URL} index element={<HomePage />} />
        <Route path={PROJECTS_URL} element={<ProjectsPage />} />
        <Route path={CLASSES_URL} element={<ClassesPage />} />
        <Route path={BEST_BUTTON} element={<BestButton />} />
        <Route path={BUSINESS_CARD} element={<BestButton />} />
      </Routes>
    </Router>
  );
}

export default App;
