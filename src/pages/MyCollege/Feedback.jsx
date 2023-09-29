import { useContext, useState } from "react";
import StarRatings from "react-star-ratings";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-hot-toast";

const Feedback = ({ collegeId, studentName }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const { user } = useContext(AuthContext);

  const handleSubmit = async () => {
    try {
      // Make a POST request to the server to send feedback data
      await useAxiosSecure.post(`/feedback/${collegeId}`, {
        rating,
        comment,
        studentEmail: user?.email,
        studentName,
      });

      toast.success("Successfully!");
    } catch (error) {
      // Handle errors or show an error message to the user
      console.error("Error sending feedback:", error);
      console.log(error);
      if (error.response.status == 409) {
        toast.error("Feedback already submitted!");
      }
    }
  };

  const isSubmitDisabled = rating === 0 || comment.trim() === "";
  return (
    <>
      <button
        onClick={() => document.getElementById("my_feedback_modal").showModal()}
        className="px-3 border border-slate-400 hover:bg-slate-400 hover:text-white duration-200 mt-2"
      >
        Send Feedback
      </button>
      <dialog id="my_feedback_modal" className="modal">
        <form
          method="dialog"
          className="modal-box bg-white dark:bg-white/10 backdrop-blur-xl"
        >
          <h3 className="font-bold text-lg">Send valuable feedback</h3>
          <StarRatings
            starDimension="24px"
            starSpacing="0px"
            starRatedColor="#ffb700"
            starEmptyColor="#fbf1a9"
            rating={rating}
            changeRating={(newRating) => setRating(newRating)}
          />
          <p className="mt-3 ">Comment:</p>
          <textarea
            name="comment"
            id="comment"
            rows="3"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full dark:bg-white/10 backdrop-blur-2xl p-2 mt-2 border dark:border-0 outline-cyan-200"
          ></textarea>
          <div className="modal-action">
            <button className="btn btn-sm bg-rose-400 border-0 text-black hover:bg-rose-300">
              Close
            </button>
            <button
              onClick={handleSubmit}
              className="btn btn-sm bg-green-400 disabled:bg-green-200 text-black border-0 hover:bg-green-300"
              disabled={isSubmitDisabled}
            >
              Send
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default Feedback;
