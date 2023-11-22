import SignOutButton from "@/components/SignOutButton/SignOutButton";
import styles from "./page.module.scss";
import Popular from "@/components/Homepage/Movies/Popular/Popular";
import NowPlaying from "@/components/Homepage/Movies/NowPlaying/NowPlaying";
import TopRated from "@/components/Homepage/Movies/TopRated/TopRated";
import Upcoming from "@/components/Homepage/Movies/Upcoming/Upcoming";
import PopularSeries from "@/components/Homepage/Series/Popular/PopularSeries";
import TopRatedSeries from "@/components/Homepage/Series/TopRated/TopRatedSeries";
import OnTheAir from "@/components/Homepage/Series/OnTheAir/OnTheAir";
import AiringToday from "@/components/Homepage/Series/AiringToday/AiringToday";
import BestSeller from "@/components/Homepage/BestSeller/BestSeller";
//import { getServerSession } from "next-auth";
//import { authOptions } from "./api/auth/[...nextauth]/route";

export default function Home() {
  //const session = await getServerSession(authOptions);
  return (
    <div className={styles.main}>
      <BestSeller />
      <Popular />
      <NowPlaying />
      <Upcoming />
      <TopRated />
      <TopRatedSeries />
      <OnTheAir />
      <PopularSeries />
      <AiringToday />
      <SignOutButton />
    </div>
  );
}
