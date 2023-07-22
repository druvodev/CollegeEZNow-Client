import Navbar from "../Shared/Navbar";
import GroupGallery from "./GroupGallery/GroupGallery";

import PopularCollage from "./PopularCollege/PopularCollege";
import ResearchPapers from "./ResearchPapers/ResearchPapers";
import Search from "./Search/Search";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="px-10">
        <Search />
        <PopularCollage />
        <GroupGallery />
        <ResearchPapers />
      </div>
    </>
  );
};

export default Home;
