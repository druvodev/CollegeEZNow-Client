import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [student, setStudent] = useState(null);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch student data using the user's email
        const response = await useAxiosSecure.get(`/students/${user?.email}`);
        setStudent(response.data);
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };

    fetchData();
  }, [user?.email]);

  const handleEdit = () => {
    navigate("/admission");
  };

  return (
    <div>
      <button
        onClick={() => document.getElementById("my_profile_modal").showModal()}
      >
        Profile
      </button>
      <dialog id="my_profile_modal" className="modal">
        <form
          method="dialog"
          className="modal-box bg-white dark:bg-white/20 backdrop-blur-3xl p-5"
        >
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          {student && (
            <div className="p-5">
              <div className="flex gap-5 items-center">
                <img
                  src={
                    user?.photoURL
                      ? user.photoURL
                      : "https://i.ibb.co/Ws1r9fp/images.png"
                  }
                  alt={user.displayName}
                  className="w-20 h-20 rounded-full"
                />
                <div className="">
                  <div className="text-lg font-semibold">{student.name}</div>
                  <div>{student.email}</div>
                </div>
              </div>
              <div className="flex justify-between mb-2 mt-3 dark:text-gray-50">
                <div>
                  <div className="font-bold">{student.college}</div>
                  <div className="">
                    <span className="font-semibold">Applied Date: </span>{" "}
                    {new Date(student.createdAt).toLocaleString()}
                  </div>
                </div>
              </div>
              <hr />
              <div className="mt-3">
                <span className="font-semibold">Address: </span>{" "}
                {student.address}
              </div>
              <div>
                <span className="font-semibold">Date of Birth: </span>{" "}
                {student.date}
              </div>
              <div>
                <span className="font-semibold">Gender: </span> {student.gender}
              </div>
              <div>
                <span className="font-semibold">Subject: </span>{" "}
                {student.subject}
              </div>

              <button
                onClick={handleEdit}
                className=" bg-green-500/60 backdrop-blur-md rounded-full mt-5 absolute bottom-4 right-4"
              >
                <FaEdit className="text-2xl text-white m-2" />
              </button>
            </div>
          )}
        </form>
      </dialog>
    </div>
  );
};

export default Profile;
