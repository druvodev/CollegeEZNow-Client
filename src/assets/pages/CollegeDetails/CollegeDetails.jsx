import { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useParams } from "react-router-dom";
import { PuffLoader } from "react-spinners";

const CollegeDetails = () => {
  const { collegeId } = useParams();
  const [collegeDetails, setCollegeDetails] = useState(null);
  console.log(collegeDetails);

  useEffect(() => {
    let isMounted = true;

    const fetchCollegeDetails = async () => {
      try {
        const response = await useAxiosSecure.get(`/colleges/${collegeId}`);
        if (isMounted) {
          setCollegeDetails(response.data);
        }
      } catch (error) {
        console.error("Error fetching college details:", error);
      }
    };

    fetchCollegeDetails();

    return () => {
      isMounted = false;
    };
  }, [collegeId]);

  if (!collegeDetails) {
    return (
      <div className="min-h-screen flex justify-center items-center mb-16">
        <PuffLoader color="#00f1e8" />
      </div>
    );
  }

  const {
    collegeName,
    collegeImage,
    admissionDate,
    researchCount,
    events,
    sportsFacilities,
    logo,
    reviews,
    researchPapers,
  } = collegeDetails;
  // Calculate averageRating based on reviews
  const totalRatings = reviews.reduce((acc, review) => acc + review.rating, 0);
  const averageRating = totalRatings / reviews.length;

  console.log(collegeDetails);

  return (
    <div className="college-details max-w-4xl mx-auto bg-white">
      <img
        className="w-full h-80 object-cover rounded-b-2xl"
        src={collegeImage}
        alt={collegeName}
      />
      <div className="p-6 grid sm:grid-cols-2 sm:gap-x-10 px-3 sm:px-10">
        <h2 className="text-2xl font-semibold mb-3">{collegeName}</h2>
        <div className="mb-4">
          <h3 className="text-lg font-medium">Admission Dates:</h3>
          <p>{admissionDate}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-medium">Events:</h3>
          <p>{events}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-medium">Research History:</h3>
          <p>{researchCount}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-medium">Sports:</h3>
          <p>{sportsFacilities}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-medium">Average Rating:</h3>
          <StarRatings
            rating={averageRating}
            starDimension="24px"
            starSpacing="0px"
            starRatedColor="#ffb700"
            starEmptyColor="#fbf1a9"
          />
          <span className="font-semibold">{averageRating?.toFixed(1)}</span>
        </div>

        {/* Display College Logo */}
        {logo && (
          <div className="mb-4">
            <h3 className="text-lg font-medium">College Logo:</h3>
            <img
              className="w-24 h-24 object-contain"
              src={logo}
              alt={`${collegeName} Logo`}
            />
          </div>
        )}

        {/* Display Research Papers */}
        {researchPapers && researchPapers.length > 0 && (
          <div className="mb-4">
            <h3 className="text-lg font-medium">Research Papers:</h3>
            {researchPapers.map((paper, index) => (
              <div key={index} className="mb-2 border p-3 rounded-xl">
                <p className="font-semibold">{paper.title}</p>
                <hr />
                <p className="mt-2 text-sm">
                  <span className="font-semibold">Description:</span>{" "}
                  {paper.description}
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Author:</span> {paper.author}
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Publication Date:</span>{" "}
                  {paper.publicationDate}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Display Reviews */}
      <div className="mb-4 px-3 sm:px-10">
        <h3 className="text-lg font-medium">Reviews:</h3>
        <div className="grid sm:grid-cols-2 gap-5">
          {reviews.map((review, index) => (
            <div key={index} className="mb-2 shadow-md p-3 rounded-lg">
              <p className="font-semibold">{review.reviewerName}</p>
              <StarRatings
                rating={review.rating}
                starDimension="18px"
                starSpacing="1px"
                starRatedColor="#ffb700"
                starEmptyColor="#fbf1a9"
              />
              <p>{review.reviewText}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollegeDetails;
