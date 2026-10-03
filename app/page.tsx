import BangladeshNews from "@/Components/Home/BangladeshNews/BangladeshNews";
import HealthNews from "@/Components/Home/HealthNews/HealthNews";
import IndiaNews from "@/Components/Home/IndiaNews/IndiaNews";
import MainNews from "@/Components/Home/MainNews/MainNews";
import OtherNews from "@/Components/Home/OtherNews/OtherNews";
import SelectedNews from "@/Components/Home/SelectedNews/SelectedNews";
import Video from "@/Components/Home/Video/Video";
import WorldNews from "@/Components/Home/WorldNews/WorldNews";
import MostRead from "@/Components/MostRead/MostRead";


export default function Home() {
  return (
    <div className="mx-37.5 my-10 grid grid-cols-3 justify-between items-start gap-10">
      <div className="flex flex-col col-span-2 justify-between items-start gap-10">
        <MainNews />
        <SelectedNews />
        <BangladeshNews />
        <IndiaNews />
        <WorldNews />
        <HealthNews />
        <Video />
        <OtherNews />
      </div>
      <MostRead />
    </div>
  );
}
