import CollegeCard from "./CollegeCard";

const AllColleges = () => {
  const colleges = [
    {
      id: 1,
      collegeName: "College A",
      collegeImage: "url_to_image_A",
      collegeRating: 4.5,
      admissionDate: "2023-09-01",
      researchCount: 50,
    },
    {
      id: 2,
      collegeName: "College B",
      collegeImage: "url_to_image_B",
      collegeRating: 4.2,
      admissionDate: "2023-08-15",
      researchCount: 30,
    },
    {
      id: 3,
      collegeName: "College C",
      collegeImage: "url_to_image_C",
      collegeRating: 4.7,
      admissionDate: "2023-09-10",
      researchCount: 70,
    },
    {
      id: 4,
      collegeName: "College D",
      collegeImage: "url_to_image_D",
      collegeRating: 4.8,
      admissionDate: "2023-09-05",
      researchCount: 90,
    },
    {
      id: 5,
      collegeName: "College E",
      collegeImage: "url_to_image_E",
      collegeRating: 4.1,
      admissionDate: "2023-09-20",
      researchCount: 20,
    },
    {
      id: 6,
      collegeName: "College F",
      collegeImage: "url_to_image_F",
      collegeRating: 4.6,
      admissionDate: "2023-08-30",
      researchCount: 60,
    },
  ];
  return (
    <div className="px-5 sm:px-10 mt-10 text-center">
      <h1 className="text-2xl font-semibold mb-4">Colleges</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {colleges.map((college, index) => (
          <CollegeCard key={index} {...college} />
        ))}
      </div>
    </div>
  );
};

export default AllColleges;
