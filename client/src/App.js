import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./common/Navbar";
import HomePage from "./pages/HomePage";
import StudentsPage from "./pages/StudentsPage";
import CoursesPage from "./pages/CoursesPage";
import AddNewResultPage from "./pages/AddNewResultPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/students" element={<StudentsPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/add-new-result" element={<AddNewResultPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
