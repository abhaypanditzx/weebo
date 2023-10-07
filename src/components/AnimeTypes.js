import React from 'react'
import NewAdded from "./NewAdded";
import Completed from "./Completed";
import  NewRelease from "./NewRelease";
import TopAiring from './TopAiring';
function animeTypes() {
  return (
    
    <div className='w-full flex p-4 mt-[2rem] flex-wrap  max-[993px]:space-y-4 justify-around bg-[#171717] h-fit'>
<NewAdded/>
<NewRelease/>
<Completed/>
<TopAiring/>
    </div>
  
  )
}

export default animeTypes;