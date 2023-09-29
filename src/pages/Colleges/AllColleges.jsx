import { useEffect, useState } from "react";
import CollegeCard from "./CollegeCard";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AllColleges = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await useAxiosSecure.get("/colleges");
        setColleges(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="px-5 sm:px-10 mt-10 text-center">
      <h1 className="text-2xl sm:text-2xl font-semibold mb-4 dark:text-gray-50">
        Colleges
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {colleges.map((college) => (
          <CollegeCard key={college._id} college={college} />
        ))}
      </div>
    </div>
  );
};

export default AllColleges;
