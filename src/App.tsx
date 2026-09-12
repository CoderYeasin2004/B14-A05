import Navbar from "./component/nav";
import Hero from "./component/hero";
import Technologies from "./component/technologies";
import { Suspense } from "react";
import type { Itechnology } from "./types/technolgiesType";


    const technologiesFetch = async():Promise<Itechnology[]> => {
        const res = await fetch('./data.json')
        const data = await res.json();
        return data;
    }

 const App =() => {
    const technologiesPromise = technologiesFetch();
  return (
    <>
    <Navbar/>
    <Hero/> 
    <Suspense fallback={<></>}><Technologies technologiesPromise={technologiesPromise}/></Suspense>
    <Technologies technologiesPromise={technologiesPromise}/>
    </>
  )
}
export default App;