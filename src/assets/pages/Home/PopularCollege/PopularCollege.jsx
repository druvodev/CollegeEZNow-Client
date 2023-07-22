import { useEffect, useState } from "react";
import CollegeCard from "./CollegeCard";

const PopularCollage = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch("./popularCollege.json")
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);

  console.log(colleges);
  return (
    <section className="mt-20">
      <h2 className="text-3xl font-bold text-center mb-3">Featured Colleges</h2>
      <div className="grid grid-cols-3 gap-5">
        {colleges.map((college, index) => (
          <CollegeCard
            key={index}
            collegeImage={college.collegeImage}
            collegeName={college.collegeName}
            admissionDates={college.admissionDates}
            events={college.events}
            researchHistory={college.researchHistory}
            sports={college.sports}
          />
        ))}
      </div>
    </section>
  );
};

export default PopularCollage;
