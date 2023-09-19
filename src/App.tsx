import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Currency from './Currency'
import MyChart from "./MyChart";
import Nav from "./Nav";
import Share from "./Share";
import News from "./News";


function App() {
  return (
    <>
    <Router>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Currency />}></Route>
          <Route path="/Share" element={<Share />}></Route>
          <Route path="/MyChart" element={<MyChart />}></Route>
          <Route path="/News" element={<News />}></Route>
        </Routes>
    </Router>
    </>
  );
}

export default App;
