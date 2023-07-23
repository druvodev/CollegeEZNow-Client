import StarRatings from "react-star-ratings";

const ReviewCard = ({ collegeName, reviewText, rating }) => {
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
          onClick={() => document.getElementById("my_modal_3").showModal()}
          className="px-5 border border-[#ffb700] rounded text-black"
        >
          See Feedback
        </button>
      </div>
      <dialog id="my_modal_3" className="modal">
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </form>
      </dialog>
    </div>
  );
};

export default ReviewCard;
