import { FaUserFriends } from "react-icons/fa";
const ResearchPapers = () => {
  const researchPapers = [
    {
      title: "Artificial Intelligence in Healthcare: A Comprehensive Review",
      authors: "John Smith, Emily Johnson",
      description:
        "This paper examines the applications of artificial intelligence in healthcare and provides a comprehensive review of its impact on medical diagnosis and treatment.",
      link: "https://example.com/research-paper-1",
    },
    {
      title: "Sustainable Energy Solutions for the Future: A Case Study",
      authors: "Emma White, Michael Brown",
      description:
        "This case study investigates sustainable energy solutions and presents a detailed analysis of their implementation and impact on energy consumption and environmental conservation.",
      link: "https://example.com/research-paper-2",
    },
    {
      title: "Climate Change Impacts on Coastal Regions: Mitigation Strategies",
      authors: "Alex Johnson, Sarah Williams",
      description:
        "This research paper assesses the impacts of climate change on coastal regions worldwide and proposes effective mitigation strategies to combat rising sea levels and associated hazards.",
      link: "https://example.com/research-paper-3",
    },
    // Additional research papers
    {
      title: "Machine Learning Algorithms for Financial Forecasting",
      authors: "James Anderson, Sophia Lee",
      description:
        "This study investigates the use of various machine learning algorithms in financial forecasting, analyzing their accuracy and reliability in predicting stock prices and market trends.",
      link: "https://example.com/research-paper-4",
    },
    {
      title: "Advancements in Nanotechnology for Cancer Treatment",
      authors: "Michael Carter, Laura Parker",
      description:
        "This paper explores recent advancements in nanotechnology for cancer treatment, including targeted drug delivery systems and nanoparticle-based therapies, to enhance the effectiveness of cancer treatments.",
      link: "https://example.com/research-paper-5",
    },
    {
      title: "The Role of Blockchain in Supply Chain Management",
      authors: "Olivia Wilson, David Miller",
      description:
        "This research discusses the potential of blockchain technology in supply chain management, focusing on transparency, security, and traceability to improve efficiency and reduce fraud in global supply chains.",
      link: "https://example.com/research-paper-6",
    },
  ];

  return (
    <section className="mt-20">
      <h2 className="text-3xl font-bold text-center mb-3">
        Recommended Research Papers
      </h2>
      <div className="grid grid-cols-2 gap-10 bg-white p-5 rounded-lg">
        {researchPapers.map((paper, index) => (
          <div key={index} className="">
            <hr />
            <h3 className="text-xl font-semibold mb-2">{paper.title}</h3>
            <p className="text-gray-600 mb-4">{paper.description}</p>
            <p className="mb-2 flex gap-2">
              <span className="flex gap-1 items-center font-semibold">
                <FaUserFriends className="text-xl" /> Authors:
              </span>

              {paper.authors}
            </p>
            <a
              href={paper.link}
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
