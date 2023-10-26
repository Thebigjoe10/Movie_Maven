import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Chinese_drama from "./Pages/Chinese_drama";
import Tv_Series from "./Pages/Tv_Series";
import Kdrama from "./Pages/Kdrama";
import How_to_download from "./Pages/How_to_download";
import Action from "./Pages/Genres/Action";
import Adventure from "./Pages/Genres/Adventure";
import Animations from "./Pages/Genres/Animations";
import Biography from "./Pages/Genres/Biography";
import Comedy from "./Pages/Genres/Comedy";
import Crime from "./Pages/Genres/Crime";
import Documentary from "./Pages/Genres/Documentary";
import Drama from "./Pages/Genres/Drama";
import Family from "./Pages/Genres/Family";
import Fantasy from "./Pages/Genres/Fantasy";
import Horror from "./Pages/Genres/Horror";
import Mystery from "./Pages/Genres/Mystery";
import Romance from "./Pages/Genres/Romance";
import Sci_Fi from "./Pages/Genres/Sci-Fi";
import Sport from "./Pages/Genres/Sport";
import Thriller from "./Pages/Genres/Thriller";
import War from "./Pages/Genres/War";
import International from "./Pages/Movies/international";
import Bollywood from "./Pages/Movies/asian_movies/Bollywood";
import Nollywood from "./Pages/Movies/african_movies/Nollywood";
import SouthAfrica from "./Pages/Movies/african_movies/SouthAfrica";
import Korean_movies from "./Pages/Movies/asian_movies/Korean_movies";
import Phillipines_movies from "./Pages/Movies/asian_movies/Phillipines_movies";
import Music from "./Pages/Genres/Music";


export default function App() {
 

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chinese-drama" element={<Chinese_drama />} />
        <Route path="/tv-series" element={<Tv_Series />} />
        <Route path="/k-drama" element={<Kdrama />} />
        <Route path="/how-to-download" element={<How_to_download />} />
        <Route path="/actions" element={<Action />} />
        <Route path="/adventure" element={<Adventure />} />
        <Route path="/animations" element={<Animations />} />
        <Route path="/biography" element={<Biography />} />
        <Route path="/comedy" element={<Comedy />} />
        <Route path="/crime" element={<Crime />} />
        <Route path="/documentary" element={<Documentary />} />
        <Route path="/drama" element={<Drama />} />
        <Route path="/family" element={<Family />} />
        <Route path="/fantasy" element={<Fantasy />} />
        <Route path="/horror" element={<Horror />} />
        <Route path="/music" element={<Music />} />
        <Route path="/mystery" element={<Mystery />} />
        <Route path="/romance" element={<Romance />} />
        <Route path="/sci-fi" element={<Sci_Fi />} />
        <Route path="/sport" element={<Sport />} />
        <Route path="/thriller" element={<Thriller />} />
        <Route path="/war" element={<War />} />
        <Route path="/international" element={<International />} />
        <Route path="/bollywood" element={<Bollywood />} />
        <Route path="/korean" element={<Korean_movies />} />
        <Route path="/phillipines" element={<Phillipines_movies />} />
        <Route path="/nollywood" element={<Nollywood />} />
        <Route path="/south-african" element={<SouthAfrica />} />
      </Routes>
    </BrowserRouter>
  );
}
