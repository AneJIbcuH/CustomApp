import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Home'
import MyChart from "./MyChart";
import Nav from "./Nav";
import Share from "./Share";
import News from "./News";
import Trends from "./Trends";


function App() {
  return (
    <>
    <Router>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Share" element={<Share />}></Route>
          <Route path="/MyChart" element={<MyChart />}></Route>
          <Route path="/Trends" element={<Trends />}></Route>
          <Route path="/News" element={<News />}></Route>
        </Routes>
    </Router>
    </>
  );
}

export default App;
