import Navbar from "./component/nav";
import Hero from "./component/hero";
import Technologies from "./component/technologies/technologies";

import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import type { Itechnology } from "./types/technologiesType";
import Footer from "./component/technologies/Footer";

const technologiesFetch = async (): Promise<Itechnology[]> => {
  const res = await fetch("./data.json");
  const data = await res.json();
  return data;
};

const technologiesPromise = technologiesFetch();

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />

      <Suspense fallback={<></>}>
        <Technologies technologiesPromise={technologiesPromise} />
      </Suspense>
      
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={2000}
      />
      
    </>
  );
};

export default App;