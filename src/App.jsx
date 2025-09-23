import "./App.css";
import NaveBar from "./components/NaveBar";
import Home from "./pages/Home";
import ScoreData from "./pages/ScoreData";
import PopularPlayers from "./pages/PopularPlayers";
import { Routes, Route } from "react-router";

function App() {
  return (
    <>
      <NaveBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leader-board" element={<Home />} />
        <Route path="/leader-board/score" element={<ScoreData />} />
        <Route
          path="/leader-board/popular-players"
          element={<PopularPlayers />}
        />
      </Routes>
    </>
  );
}

export default App;
