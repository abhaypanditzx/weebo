

import Slider from "../components/Slider"
import Recently from "../components/Recently_Updated"
import Trending from "../components/Trending"
function Home(props) { 

  return (
    <div className="-mt-14 h-full ">
      
        <Slider/>
      <Trending/>
      <Recently ayakashi={props.ayakashi} sweetRein={props.sweetRein}/>

    </div>
  )
}
export default Home