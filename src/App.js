import "./App.css";
import "antd/dist/antd.css";
import MindAudioPlayer from "./Components/MindAudioPlayer";
import Login from "./Components/Authentication/Login";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Navbar/Header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <br />
      <br />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} exact />
          <Route
            path="/voice"
            element={
              <MindAudioPlayer audioUrl="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />
            }
            exact
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
