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
    <section className="mt-20">
      <h2 className="text-3xl font-bold text-center mb-3">Featured Colleges</h2>
      <div className="grid grid-cols-3 gap-5">
        {colleges.map((college, index) => (
          <CollegeCard key={index} college={college} />
        ))}
      </div>
    </section>
  );
};

export default PopularCollage;
