

import Slider from "../components/Slider"
import Recently from "../components/Recently_Updated"
import Trending from "../components/Trending"
function Home() { 

  return (
    <div className="-mt-14 h-full ">
      
        <Slider/>
    
      <Trending/>
      <Recently/>

    </div>
  )
}
export default Home