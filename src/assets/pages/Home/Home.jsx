import GroupGallery from "./GroupGallery/GroupGallery";

import PopularCollage from "./PopularCollege/PopularCollege";
import ResearchPapers from "./ResearchPapers/ResearchPapers";
import ReviewSection from "./ReviewSection/ReviewSection";
import Search from "./Search/Search";

const Home = () => {
  return (
    <div className="px-5 sm:px-10">
      <Search />
      <PopularCollage />
      <GroupGallery />
      <ResearchPapers />
      <ReviewSection />
    </div>
  );
};

export default Home;
