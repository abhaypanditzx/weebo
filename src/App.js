import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Player from "./pages/Player";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Movies from "./pages/Movies";
import sweetReincarnation from "./assets/animes/SweetReincarnation.jpg";
import Akuma from "./assets/animes/Akuma-kun.jpg";
import Synduality from "./assets/animes/synduality.jpg";
import Ayakashi from "./assets/animes/ayakashi.jpg";
import BlueOrchestra from "./assets/animes/blue-orchestra.jpg";
import DarkGathering from "./assets/animes/dark-gathering.jpg";
import Zom from "./assets/animes/zom.jpg";
import TheDUke from "./assets/animes/theDukeOfDeath.jpg";
import Footer from "./components/Footer";
import TrendingPage from "./pages/TrendingPage";
import Ova from "./pages/Ova";
import Ona from "./pages/Ona";
import TVseries from "./pages/TVseries";
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
    setAbout(
      `Due to his exceptional talents, Pastry stands out as the probable future leader of Morteln, a region in dire need of help. Even  + More`
    );
    setName(" sweet Reincarnation");
    setAired("Jul 04, 2023 to Sep 19, 2023");
    setStatus("Completed");
    setGenres("Action, Fantasy, Slice of Life, Isekai, Magic");
    setCountry("Japan");
    setPremiered("Summer 2023");
    setDuration("23 min");
    setEpisodes("12");
    setStudios("SynergySP");
    setProducers(
      "Movic, KlockWorx, U-NEXT, MediaNet, Imagin, Crunchyroll, TO Books, CTW"
    );
  };

  const ayakashi = () => {
    setAnimeImg(Ayakashi);
    setAbout(
      `Most people are unable to perceive Ayakashi, supernatural beings that pose a threat to humanity as some of them feed on their life energy. In order t... + More`
    );
    setName("Ayakashi triangle");
    setAired("Jan 10, 2023 to Sep 26, 2023");
    setStatus("Completed");
    setGenres("Action, Comedy, Ecchi, Romance, Shounen, Supernatural");
    setCountry("Japan");
    setPremiered("Winter 2023");
    setDuration("23 min");
    setEpisodes("12");
    setStudios("Connect");
    setProducers(
      "Shueisha, Aniplex, BS11, Yomiuri Telecasting, Chugai Mining, Marui Group"
    );
  };
  const akuma = () => {
    setAnimeImg(Akuma);
    setAbout(
      `Dr. Faust, on the brink of death, prophesied the emergence of a new era of demonic presence. With no means to fight this impending danger, he + more `
    );
    setName("akuma-kun");
    setAired("Apr 15, 1989 to Mar 24, 1990");
    setStatus("Releasing");
    setGenres(
      "Adventure, Fantasy, Horror, Kids, Supernatural, Vampire, Demons, Magic"
    );
    setCountry("Japan");
    setPremiered("Spring 1989");
    setDuration("25 min");
    setEpisodes("42");
    setStudios("Toei Animation");
    setProducers("add some");
  };
  const synduality = () => {
    setAnimeImg(Synduality);
    setAbout(` The year is 2222. It has been years since Tears of the New Moon, a mysterious rain, poured and wiped out almost the entire human race. The poisonous rain
    + More`);
    setName("  Synduality Noir");
    setAired("  Jul 11, 2023 to 2022 ");
    setStatus("  Completed ");
    setGenres("   Mecha, Sci-Fi");
    setCountry("   Japan");
    setPremiered("  Summer 2023 ");
    setDuration("   24 min");
    setEpisodes("  12 ");
    setStudios("   8bit");
    setProducers(
      "  Bandai Namco Entertainment, Bandai Spirits, Bandai Namco Music Live, Bandai Namco Filmworks "
    );
  };

  const blueOrchestra = () => {
    setAnimeImg(BlueOrchestra);
    setAbout(`As a child, Hajime Aono revered his father, a renowned violinist who inspired him to pursue the same instrument. However, after his parents'
    + More`);
    setName(" Blue Orchestra");
    setAired(" Apr 09, 2023 to ?");
    setStatus("Releasing ");
    setGenres("Drama, Music, School, Seinen ");
    setCountry(" Japan");
    setPremiered("Spring 2023 ");
    setDuration(" 25 min");
    setEpisodes("24 ");
    setStudios(" Nippon Animation");
    setProducers("NHK, NHK Enterprises ");
  };

  const darkGathering = () => {
    setAnimeImg(DarkGathering);
    setAbout(`Despite Keitarou Gentouga's strong aversion to ghosts, he inexplicably feels drawn to them, a trait that caused a spiritual injury to a friend two years ago. This injury, coupled with his poor social skills, turned + Mor `);
    setName(" Dark Gathering");
    setAired(" Jul 10, 2023 to ?");
    setStatus(" Releasing");
    setGenres(" Horror, Shounen, Supernatural");
    setCountry("Japan ");
    setPremiered("Summer 2023 ");
    setDuration(" 23 min");
    setEpisodes(" 25");
    setStudios("OLM ");
    setProducers("Pony Canyon, Sotsu, Kansai Telecasting, NetEase, BS Asahi, CHOCOLATE ");
  };

  const zom = () => {
    setAnimeImg(Zom);
    setAbout(` Akira's life as a worker drains his strength and confines him to a dreary routine. He exists in a gloomy apartment and hides his feelings from a 
    + More`);
    setName(" Zom 100: Bucket List of the Dead");
    setAired("        Jul 09, 2023 to Oct 15, 2023 ");
    setStatus("        Releasing ");
    setGenres(
      "         Action, Comedy, Horror, Seinen, Shounen, Supernatural, Suspense"
    );
    setCountry("        Japan ");
    setPremiered("        Summer 2023 ");
    setDuration("         24 min");
    setEpisodes("        12 ");
    setStudios("        BUG FILMS ");
    setProducers("       Shogakukan-Shueisha Productions, dugout ");
  };
  const Duke = () => {
    setAnimeImg(TheDUke);
    setAbout(`    The follow-up installment of Shinigami Bocchan to Kuro Maid's series is its second season.
    + More
     `);
    setName("The Duke of Death and His Maid Season 2    ");
    setAired(" Jul 08, 2023 to 2023");
    setStatus(" Completed");
    setGenres("Comedy, Drama, Romance, Supernatural, Magic ");
    setCountry("Japan ");
    setPremiered("Summer 2023 ");
    setDuration(" 23 min");
    setEpisodes("12 ");
    setStudios("J.C.Staff ");
    setProducers(
      "NBCUniversal Entertainment Japan, BS11, Shogakukan, Shogakukan-Shueisha Productions, Yomiuri TV Enterprise, Shogakukan Music & Digital Entertainment, Bandai Spirits "
    );
  };

  return (
    <div className=" h-full w-full  bg-[#030909]">
      <Nav />
      <Sidebar />
      <Routes>
        <Route
          path="/"
          element={
            <Home path="/"
              sweetRein={sweetRein}
              akuma={akuma}
              Duke={Duke}
              zom={zom}
              synduality={synduality}
              darkGathering={darkGathering}
              blueOrchestra={blueOrchestra}
              ayakashi={ayakashi}
            />
          }
        />
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
        <Route path="TrendingPage" element={<TrendingPage />} />
        <Route path="Ova" element={<Ova/>} />
        <Route path="Tvseries" element={<TVseries />} />
        <Route path="Ona" element={<Ona />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
