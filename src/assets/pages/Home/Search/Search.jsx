import { useState, useRef, useEffect } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import StarRatings from "react-star-ratings";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [modalData, setModalData] = useState(null);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      const response = await useAxiosSecure.get(`/college/${searchTerm}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error searching colleges:", error);
    }
  };

  const handleInputChange = async (e) => {
    const inputValue = e.target.value;
    setSearchTerm(inputValue);

    // Perform the search only if the input value is not empty
    if (inputValue.trim() !== "") {
      try {
        const response = await useAxiosSecure.get(`/search?name=${inputValue}`);
        setSearchResults(response.data);
      } catch (error) {
        console.error("Error searching colleges:", error);
      }
    } else {
      // If the input is empty, clear the search results
      setSearchResults([]);
    }
  };

  useEffect(() => {
    // Function to close the search results when clicked outside
    const handleOutsideClick = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchResults([]);
      }
    };

    // Attach the event listener when the component mounts
    document.addEventListener("mousedown", handleOutsideClick);

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleModal = async (collegeId) => {
    try {
      const response = await useAxiosSecure.get(`/college/${collegeId}`);
      setModalData(response.data);
      console.log("Modal Data:", response.data); // Add this line
    } catch (error) {
      console.error("Error fetching college data:", error);
    }

    // Show the modal
    const modal = document.getElementById("my_search_modal");
    if (modal) {
      modal.showModal();
    }
  };

  // Function to handle navigation to college details page
  const handleCollegeDetails = (collegeId) => {
    navigate(`/colleges/${collegeId}`);
  };

  return (
    <div
      className="border w-fit p-0 mx-auto rounded-full mt-3 sm:mt-10 relative"
      ref={searchRef}
    >
      <input
        type="text"
        className="sm:w-96 bg-slate-200 py-1 px-3 rounded-l-full outline-cyan-100"
        placeholder="Search College"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <input
        type="button"
        value="Search"
        className="py-1 px-3 sm:px-5 font-semibold bg-cyan-300 rounded-r-full"
        onClick={handleSearch}
      />

      {searchResults.length > 0 && (
        <div className="mt-4 absolute z-50 bg-white/30 backdrop-blur-md pb-5 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold px-5">Search Results:</h2>
          <hr />
          <ul className="mt-1">
            {searchResults.map((college) => (
              <li
                onClick={() => handleModal(college._id)}
                className="cursor-pointer w-full px-5 py-1 sm:px-10 hover:bg-white/30"
                key={college._id}
              >
                {college.collegeName}
              </li>
            ))}
          </ul>
        </div>
      )}

      <dialog id="my_search_modal" className="modal">
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>

          <img
            src={modalData?.collegeImage}
            alt={modalData?.collegeName}
            className="w-full h-52 object-cover mb-2 rounded-lg"
          />
          <h2 className="text-xl font-semibold mb-2">
            {modalData?.collegeName}
          </h2>
          <div className="mt-1 mb-5 flex gap-1 items-center">
            <StarRatings
              rating={modalData?.averageRating}
              starDimension="24px"
              starSpacing="0px"
              starRatedColor="#ffb700"
              starEmptyColor="#fbf1a9"
            />
            <span className="font-semibold">
              {modalData?.averageRating.toFixed(1)}
            </span>
          </div>
          <p>Admission Date: {modalData?.admissionDate}</p>
          <p>Research Count: {modalData?.researchCount}</p>

          <button
            onClick={() => handleCollegeDetails(modalData?._id)}
            className="text-blue-600 font-semibold mt-2 inline-block p-1 border bg-slate-50"
          >
            Details
          </button>

          <dialog id="my_search_modal" className="modal">
            <form method="dialog" className="modal-box">
              <button className="btn btn-sm btn-circle btn-error absolute right-2 top-2">
                ✕
              </button>
            </form>
          </dialog>
        </form>
      </dialog>
    </div>
  );
};

export default Search;
