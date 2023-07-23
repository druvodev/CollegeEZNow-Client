import StarRatings from "react-star-ratings";

const CollegeCard = ({ college }) => {
  console.log(college);
  const {
    _id,
    collegeName,
    collegeImage,
    averageRating,
    admissionDate,
    researchCount,
  } = college;

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 text-left">
      <img
        src={collegeImage}
        alt={collegeName}
        className="w-full h-52 object-cover mb-2 rounded-lg"
      />
      <h2 className="text-xl font-semibold mb-2">{collegeName}</h2>
      <div className="mt-1 mb-5 flex gap-1 items-center">
        <StarRatings
          rating={averageRating}
          starDimension="24px"
          starSpacing="0px"
          starRatedColor="#ffb700"
          starEmptyColor="#fbf1a9"
        />
        <span className="font-semibold">{averageRating.toFixed(1)}</span>
      </div>
      <p>Admission Date: {admissionDate}</p>
      <p>Research Count: {researchCount}</p>
      <a href={`/colleges/${_id}`}>
        <button className="text-blue-600 font-semibold mt-2 inline-block p-1 border bg-slate-50">
          Details
        </button>
      </a>
    </div>
  );
};

export default CollegeCard;
