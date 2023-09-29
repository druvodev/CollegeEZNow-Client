/* eslint-disable react/prop-types */

const CollegeCard = ({ college }) => {
  const {
    _id,
    collegeName,
    collegeImage,
    admissionDate,
    events,
    sportsFacilities,
  } = college;
  return (
    <div className="college-card bg-white dark:bg-white/10 shadow-lg rounded-xl overflow-hidden">
      <img
        className="w-full h-56 object-cover"
        src={collegeImage}
        alt={collegeName}
      />
      <div className="p-6 dark:text-gray-200">
        <h2 className="text-lg sm:text-2xl font-semibold mb-3 dark:text-gray-50">
          {collegeName}
        </h2>
        <div className="mb-2">
          <h3 className="text-lg font-medium">Admission Dates:</h3>
          <p>{admissionDate}</p>
        </div>
        <div className="mb-2">
          <h3 className="text-lg font-medium">Events:</h3>
          <p>{events}</p>
        </div>
        <div className="mb-2">
          <h3 className="text-lg font-medium">Research History:</h3>
          <p></p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-medium">Sports:</h3>
          <p>{sportsFacilities}</p>
        </div>
        <a href={`/colleges/${_id}`}>
          <button className="bg-cyan-300 dark:text-black px-7 py-2 font-semibold">
            Details
          </button>
        </a>
      </div>
    </div>
  );
};

export default CollegeCard;
