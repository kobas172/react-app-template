import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import Dummy1 from "./pages/Dummy1";
import Dummy2 from "./pages/Dummy2";
import Dummy3 from "./pages/Dummy3";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dummy1" element={<Dummy1 />}>
          <Route path=":type?" element={<Dummy1 />} />
        </Route>
        <Route path="/dummy2" element={<Dummy2 />} />
        <Route path="/dummy3" element={<Dummy3 />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
