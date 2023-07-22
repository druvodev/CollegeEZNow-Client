import { useState } from "react";
import StarRatings from "react-star-ratings";

const ReviewCard = ({ collegeName, reviewText, rating }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col justify-between bg-white h-52 p-3 rounded-lg">
      <h3 className="text-xl font-semibold mb-1">{collegeName}</h3>
      <hr />
      <p className="mt-3">{reviewText}</p>
      <div className="mt-auto">
        <div className="mt-1 mb-5 flex gap-1 items-center">
          <StarRatings
            rating={rating}
            starDimension="24px"
            starSpacing="0px"
            starRatedColor="#ffb700"
            starEmptyColor="#fbf1a9"
          />
          <span className="font-semibold">{rating}</span>
        </div>
        <button
          onClick={openModal}
          className="px-5 border border-[#ffb700] rounded text-black"
        >
          See Feedback
        </button>
      </div>
      {isModalOpen && (
        <div className="modal fixed inset-0 flex items-center justify-center z-50">
          <div className="modal-overlay absolute inset-0 bg-black opacity-50"></div>
          <div className="modal-container bg-white w-96 p-8 rounded-lg shadow-lg">
            <button
              onClick={closeModal}
              className="modal-close absolute top-0 right-0 m-3 text-2xl font-semibold"
            >
              ✕
            </button>
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Press ESC key or click on ✕ button to close</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewCard;
