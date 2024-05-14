import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import AdminPage from "./component/AdminPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adminpage" element={<AdminPage />} />
      </Routes>
    </div>
  );
}

export default App;
