import { useEffect, useState } from "react";
import CollegeCard from "./CollegeCard";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const PopularCollage = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await useAxiosSecure.get("/topcollege");
        setColleges(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(colleges);
  return (
    <section className="mt-10 sm:mt-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3  text-gray-800 dark:text-gray-50">
        Featured Colleges
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {colleges.map((college, index) => (
          <CollegeCard key={index} college={college} />
        ))}
      </div>
    </section>
  );
};

export default PopularCollage;
