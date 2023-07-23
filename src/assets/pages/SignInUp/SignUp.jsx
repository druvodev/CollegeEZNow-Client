import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { CgDanger } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";

import { updateProfile } from "firebase/auth";
import { AuthContext } from "../../../providers/AuthProvider";
import SocialLogin from "./SocialLogin";

const SignUP = () => {
  const { createUser, setLoading } = useContext(AuthContext);
  const [firstIsShow, setFirstIsShow] = useState(false);
  const [secondIsShow, setSecondIsShow] = useState(false);
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Automatic remove error message
  if (error) {
    setTimeout(() => {
      setError("");
    }, 5000);
  }

  // Register With Email & Password
  const handleEmailRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.profilePhoto.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    // Check password validation
    if (!password || !confirmPassword) {
      return setError("Please enter password!");
    } else if (password !== confirmPassword) {
      return setError("Password doesn't match!");
    } else if (password) {
      const regex =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])/;
      if (!regex.test(password)) {
        return setError("Enter a strong password!");
      } else if (password.length < 6) {
        return setError("Enter a password with at least 6 digits!");
      }
    }
    // Check terms and condition field
    if (!isTermsChecked) {
      return setError("Please agree to the terms and conditions!");
    }

    // Create new user with email
    createUser(email, password)
      .then((result) => {
        updateName(result.user, name, photo);
        navigate("/signIn");
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      });
    // update user name and photo url
    const updateName = (user, userName, profilePhoto) => {
      updateProfile(user, {
        displayName: userName,
        photoURL: profilePhoto,
      });
    };
    form.reset();
  };

  return (
    <div className="mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Register Your Account
      </h1>
      <form
        onSubmit={handleEmailRegister}
        className="w-full max-w-lg mx-auto bg-white p-4 sm:p-8 rounded-md sm:shadow-md"
      >
        <div className="mb-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-1"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-500"
            type="text"
            id="name"
            name="name"
            placeholder="Prodip Karati"
            required
          />
        </div>
        <div className="mb-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-1"
            htmlFor="profilePhoto"
          >
            Photo Url <small className="font-normal">(Optional)</small>
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-500"
            type="text"
            id="profilePhoto"
            name="profilePhoto"
            placeholder="https://example.com/user/profile.jpg"
          />
        </div>
        <div className="mb-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-1"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-500"
            type="email"
            id="email"
            name="email"
            placeholder="prodip@example.com"
            required
          />
        </div>
        <div className="mb-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-1"
            htmlFor="password"
          >
            Password
          </label>
          <div className="w-full flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus-within:border-amber-500">
            <input
              className="outline-none w-full"
              type={firstIsShow ? "text" : "password"}
              id="password"
              name="password"
              placeholder="******"
              required
            />
            {firstIsShow ? (
              <FaEye
                onClick={() => setFirstIsShow(false)}
                className="w-5 h-5 text-gray-400"
              />
            ) : (
              <FaEyeSlash
                onClick={() => setFirstIsShow(true)}
                className="w-5 h-5 text-gray-400"
              />
            )}
          </div>
        </div>
        <div className="mb-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-1"
            htmlFor="confirmPassword"
          >
            Confirm Password
          </label>
          <div className="w-full flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus-within:border-amber-500">
            <input
              className="outline-none w-full"
              type={secondIsShow ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              placeholder="******"
              required
            />
            {secondIsShow ? (
              <FaEye
                onClick={() => setSecondIsShow(false)}
                className="w-5 h-5 text-gray-400"
              />
            ) : (
              <FaEyeSlash
                onClick={() => setSecondIsShow(true)}
                className="w-5 h-5 text-gray-400"
              />
            )}
          </div>
        </div>
        <div className="flex gap-10">
          <div>
            <input
              type="checkbox"
              name="remember-me"
              id="remember-me"
              className="mr-2"
              checked={isTermsChecked}
              onChange={() => setIsTermsChecked(!isTermsChecked)}
            />
            <label htmlFor="remember-me" className="text-gray-500">
              I accept the{" "}
              <a
                href="#"
                className="underline underline-offset-2 font-semibold"
              >
                Terms and Conditions
              </a>
            </label>
          </div>
        </div>
        <p className="h-6">
          {error && (
            <small className="text-red-500 flex items-center gap-1">
              <CgDanger /> {error}
            </small>
          )}
        </p>
        <button
          className="w-full bg-[#00f1e8] font-bold py-2 px-4 mt-2 mb-4 rounded-md hover:bg-[#06e2db] transition duration-300"
          type="submit"
        >
          Registration
        </button>
        <p className="text-center text-sm">Or</p>
        <SocialLogin />
        <hr />
        <p className="text-center mt-2">
          Already have an account?{" "}
          <span className="text-amber-500 font-semibold underline underline-offset-2">
            <Link to={"/signIn"}>SignIn</Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignUP;
