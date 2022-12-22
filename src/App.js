import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Signup";
import Signin from "./Signin";
import Home from "./Home";
import AddTask from "./AddTask";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/addTask" element={<AddTask />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
