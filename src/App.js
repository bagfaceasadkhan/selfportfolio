import MainContainer from "./components/MainContainer";
import AllProjects from "./components/AllProjects";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainContainer />} />
        <Route path="/allprojects" element={<AllProjects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
