import "./App.css";
import "antd/dist/antd.css";
import MindAudioPlayer from "./Components/MindAudioPlayer";
import Login from "./Components/Authentication/Login";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <br />
      <br />
      <br />
      <div>
        <Login />
      </div>
      <MindAudioPlayer audioUrl="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />
    </div>
  );
}

export default App;
