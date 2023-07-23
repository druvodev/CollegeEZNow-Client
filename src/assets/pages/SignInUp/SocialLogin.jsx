import { useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const SocialLogin = () => {
  const { signInWithGoogle, signInWithGithub, setLoading } =
    useContext(AuthContext);
  const [, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // Sign In with Google
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(() => {
        setLoading(false);
        navigate(from, { replace: true });
      })
      .catch((error) => setError(error.message));
  };

  // Sign In with Github
  const handleGithubLogin = () => {
    signInWithGithub()
      .then(() => {
        setLoading(false);
        navigate(from, { replace: true });
      })
      .catch((error) => setError(error.message));
  };
  return (
    <>
      <ul className="flex gap-5 items-center justify-center mt-1 mb-4">
        <li
          onClick={handleGoogleLogin}
          className="w-8 bg-gray-200 p-1 rounded-full cursor-pointer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/150px-Google_%22G%22_Logo.svg.png"
            alt="logo"
          />
        </li>
        <li
          onClick={handleGithubLogin}
          className="w-8 bg-gray-200 p-1 rounded-full cursor-pointer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
            alt="logo"
          />
        </li>
        <li className="w-8 bg-gray-200 p-1 rounded-full cursor-pointer">
          <img
            src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png"
            alt="logo"
          />
        </li>
      </ul>
    </>
  );
};

export default SocialLogin;
