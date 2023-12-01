import React from "react";
import BestSeller from "./BestSeller/BestSeller";
import Popular from "./Movies/Popular/Popular";
import NowPlaying from "./Movies/NowPlaying/NowPlaying";
import TopRated from "./Movies/TopRated/TopRated";
import Upcoming from "./Movies/Upcoming/Upcoming";
import TopRatedSeries from "./Series/TopRated/TopRatedSeries";
import OnTheAir from "./Series/OnTheAir/OnTheAir";
import PopularSeries from "./Series/Popular/PopularSeries";
import AiringToday from "./Series/AiringToday/AiringToday";

const Homepage = () => {
  return (
    <div>
      <BestSeller />
      <Popular />
      <NowPlaying />
      <Upcoming />
      <TopRated />
      <TopRatedSeries />
      <OnTheAir />
      <PopularSeries />
      <AiringToday />
    </div>
  );
};
export default Homepage;
