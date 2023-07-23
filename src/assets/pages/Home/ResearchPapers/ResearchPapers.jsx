import { useContext, useEffect, useState } from "react";
import { FaUserFriends } from "react-icons/fa";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../../providers/AuthProvider";
const ResearchPapers = () => {
  const [researchPapers, setResearchPapers] = useState([]);
  const { setLoading } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await useAxiosSecure.get("/researchPapers");
        setResearchPapers(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [setLoading]);

  return (
    <section className="mt-10 sm:mt-20">
      <h2 className="text-3xl font-bold text-center mb-3">
        Recommended Research Papers
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 bg-white p-5 rounded-lg">
        {researchPapers.map((paper, index) => (
          <div key={index} className="flex flex-col shadow p-3 rounded-xl">
            <h3 className="text-xl font-semibold mb-1">
              {paper.researchPapers[0].title}
            </h3>
            <hr />
            <p className="text-gray-600 mb-4 mt-2">
              {paper.researchPapers[0].description}
            </p>
            <p className="mb-2 flex gap-2 mt-auto">
              <span className="flex gap-1 items-center font-semibold">
                <FaUserFriends className="text-xl" /> Author:
              </span>
              {paper.researchPapers[0].author}, {paper.collegeName}
            </p>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline underline-offset-2"
            >
              Read the Paper
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResearchPapers;
