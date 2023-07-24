import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../providers/AuthProvider";
import Feedback from "./Feedback";

const MyCollege = () => {
  const [student, setStudent] = useState(null);
  const { user } = useContext(AuthContext);
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
  console.log(student);
  return (
    <>
      {student && (
        <div className="mt-10 flex justify-center">
          <div className="relative sm:w-[800px] bg-white dark:bg-white/20 dark:text-gray-100 p-5 sm:p-10 rounded-xl">
            <div className="flex justify-between mb-2 -mt-4 dark:text-gray-50">
              <img
                src={student.logo}
                alt="College Logo"
                className="h-20 z-10"
              />
              <div>
                <div className="font-bold">{student.college}</div>
                <div className="">
                  <span className="font-semibold">Applied Date: </span>{" "}
                  {new Date(student.createdAt).toLocaleString()}
                </div>
                <Feedback
                  collegeId={student?.collegeId}
                  studentName={student?.name}
                />
              </div>
            </div>
            <hr />
            <div className="flex gap-5 items-center mt-7">
              <img
                src="https://i.ibb.co/Ws1r9fp/images.png"
                alt="Student"
                className="w-20 h-20 rounded-full"
              />
              <div>
                <div>
                  <span className="font-semibold">Name: </span> {student.name}
                </div>
                <div>
                  <span className="font-semibold">Email: </span> {student.email}
                </div>
              </div>
            </div>

            <div className="mt-3">
              <span className="font-semibold">Address: </span> {student.address}
            </div>
            <div>
              <span className="font-semibold">Date of Birth: </span>{" "}
              {student.date}
            </div>
            <div>
              <span className="font-semibold">Gender: </span> {student.gender}
            </div>
            <div>
              <span className="font-semibold">Subject: </span> {student.subject}
            </div>
            <div>
              <span className="font-semibold">
                Extracurricular Activities:{" "}
              </span>{" "}
              {student.extracurricular}
            </div>
            <div>
              <span className="font-semibold">Motivation Letter: </span>{" "}
              {student.motivationLetter}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MyCollege;
