import Slider from "../components/Slider";
import Recently from "../components/Recently_Updated";
import Trending from "../components/Trending";
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
    </div>
  );
}
export default Home;
