import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Nabvar from "./components/Nabvar";
import Examens from "./pages/Examens";
import Profil from "./pages/profil";
import Formations from "./pages/Formations";
import Support from "./pages/Support";
import "./App.css";

function App() {
  return (
    <Router>
      <SideBar>
        <Nabvar/>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Examens" element={<Examens />} />
          <Route path="/Formations" element={<Formations />} />
          <Route path="/Profil" element={<Profil />} />
          <Route path="/support" element={<Support />} />

          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;
