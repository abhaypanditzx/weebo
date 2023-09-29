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
  const [Country, setCountry] = useState("japan");
  const [Premiered, setPremiered] = useState("unknown");
  const [aired, setAired] = useState("unknown");
  const [Producers, setProducers] = useState("unknown");
  const [Episodes, setEpisodes] = useState("unknown");
  const [Duration, setDuration] = useState("unknown");
  const [Name, setName] = useState("anime name");
  const [Studios, setStudios] = useState("unknown");
  const [about, setAbout] = useState("xyz...");
  const sweetRein = () => {
    setAnimeImg(sweetReincarnation);
    setAbout     (`Due to his exceptional talents, Pastry stands out as the probable future leader of Morteln, a region in dire need of help. Even  + More`);
    setName      (" sweet Reincarnation");
    setAired     ("Jul 04, 2023 to Sep 19, 2023");
    setStatus    ("Completed");
    setGenres    ("Action, Fantasy, Slice of Life, Isekai, Magic");
    setCountry   ("Japan");
    setPremiered ("Summer 2023");
    setDuration  ("23 min");
    setEpisodes  ("12");
    setStudios   ("SynergySP");
    setProducers ("Movic, KlockWorx, U-NEXT, MediaNet, Imagin, Crunchyroll, TO Books, CTW");
  };

  const ayakashi = () => {
    setAnimeImg(Ayakashi);
    setAbout     (`Most people are unable to perceive Ayakashi, supernatural beings that pose a threat to humanity as some of them feed on their life energy. In order t... + More`);
    setName      ("Ayakashi triangle");
    setAired     ("Jan 10, 2023 to Sep 26, 2023");
    setStatus    ("Completed");
    setGenres    ("Action, Comedy, Ecchi, Romance, Shounen, Supernatural");
    setCountry   ("Japan");
    setPremiered ("Winter 2023");
    setDuration  ("23 min");
    setEpisodes  ("12");
    setStudios   ("Connect");
    setProducers ("Shueisha, Aniplex, BS11, Yomiuri Telecasting, Chugai Mining, Marui Group");

    
  };
  const aykashi = () => {
    setAnimeImg(null);
    setAbout     (` `);
    setName      (" ");
    setAired     (" ");
    setStatus    (" ");
    setGenres    (" ");
    setCountry   (" ");
    setPremiered (" ");
    setDuration  (" ");
    setEpisodes  (" ");
    setStudios   (" ");
    setProducers ("");
  };

  return (
    <div className=" h-full w-full bg-[#030909]">
      <Nav />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home sweetRein={sweetRein}  ayakashi={ayakashi}/>} />
        <Route
          path="Player"
          element={
            <Player
              status={status}
              Premiered={Premiered}
              Studios={Studios}
              Name={Name}
              Genres={Genres}
              Country={Country}
              aired={aired}
              Duration={Duration}
              Episodes={Episodes}
              Producers={Producers}
              AnimeImg={AnimeImg}
              about={about}
            />
          }
        />
        <Route path="Movies" element={<Movies />} />
      </Routes>
    </div>
  );
}

export default App;
