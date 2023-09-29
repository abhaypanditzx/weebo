import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Player from "./pages/Player";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Movies from "./pages/Movies";
import sweetReincarnation from "./assets/animes/SweetReincarnation.jpg";
import Akuma from "./assets/animes/Akuma-kun.jpg";
import synduality from "./assets/animes/synduality.jpg";
import Ayakashi from "./assets/animes/ayakashi.jpg";
import blueOrchestra from "./assets/animes/blue-orchestra.jpg";
import darkGathering from "./assets/animes/dark-gathering.jpg";
import zom from "./assets/animes/zom.jpg";
import theDUke from "./assets/animes/theDukeOfDeath.jpg";

function App() {
  const [AnimeImg, setAnimeImg] = useState(null);
  const [status, setStatus] = useState("completed");
  const [Genres, setGenres] = useState("unknown");
  const [Country, setCountry] = useState("unknown");
  const [Premiered, setPremiered] = useState("unknown");
  const [aired, setAired] = useState("unknown");
  const [Producers, setProducers] = useState("unknown");
  const [Episodes, setEpisodes] = useState("unknown");
  const [Duration, setDuration] = useState("unknown");
  const [Studios, setStudios] = useState("unknown");

  const sweetRein = () => {
    setAnimeImg(sweetReincarnation);
    setStatus(" ");
    setGenres(" ");
    setCountry(" ");
    setPremiered(" ");
    setAired(" ");
    setProducers(" ");
    setEpisodes(" ");
    setDuration(" ");
    setStudios(" ");
  };

  return (
    <div className=" h-full w-full bg-[#030909]">
      <Nav />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home sweetRein={sweetRein} />} />
        <Route
          path="Player"
          element={
            <Player
              status={status}
              Premiered={Premiered}
              Studios={Studios}
              Genres={Genres}
              Country={Country}
              aired={aired}
              Duration={Duration}
              Episodes={Episodes}
              Producers={Producers}
              AnimeImg={AnimeImg}
            />
          }
        />
        <Route path="Movies" element={<Movies />} />
      </Routes>
    </div>
  );
}

export default App;
