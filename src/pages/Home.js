import Slider from "../components/Slider";
import Recently from "../components/Recently_Updated";
import Trending from "../components/Trending";
import Genre from "../components/Genre";
import AnimeTypes from "../components/AnimeTypes";
import MostViewed from "../components/MostViewed";
function Home(props) {
  return (
    <div className="-mt-14 h-full ">
      <Slider />
      <Trending />
      <Recently
        ayakashi={props.ayakashi}
        zom={props.zom}
        synduality={props.synduality}
        darkGathering={props.darkGathering}
        sweetRein={props.sweetRein}
        Duke={props.Duke}
        blueOrchestra={props.blueOrchestra}
        akuma ={props.akuma}
        />
        <AnimeTypes/>
        <div className="flex max-sm:flex-col justify-around w-full  items-center">
        <MostViewed/>
        <Genre/>
        </div>
    </div>
  );
}
export default Home;
