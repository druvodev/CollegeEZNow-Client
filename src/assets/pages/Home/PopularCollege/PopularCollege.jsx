import { useContext, useEffect, useState } from "react";
import CollegeCard from "./CollegeCard";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../../providers/AuthProvider";

const PopularCollage = () => {
  const [colleges, setColleges] = useState([]);
  const { setLoading } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await useAxiosSecure.get("/topcollege");
        setColleges(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [setLoading]);

  console.log(colleges);
  return (
    <section className="mt-10 sm:mt-10">
      <h2 className="text-3xl font-bold text-center mb-3">Featured Colleges</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {colleges.map((college, index) => (
          <CollegeCard key={index} college={college} />
        ))}
      </div>
    </section>
  );
};

export default PopularCollage;
