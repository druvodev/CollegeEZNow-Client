import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="px-5 sm:px-10 py-5 sm:py-10 bg-black text-gray-300 mt-5 sm:mt-16">
      <div className="grid sm:grid-cols-12 gap-5">
        <div className="col-span-4">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-wide text-white mb-5">
            CollegeEZNow
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
          <div className="flex gap-3 mt-4">
            <Link
              href="https://web.facebook.com/prodipweb/"
              target="_blank"
              className="rounded-full bg-white"
            >
              <img
                className="w-9 h-9 p-2"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
                alt="facebook"
              />
            </Link>
            <a href="#" className="rounded-full bg-white">
              <img
                className="w-9 h-9 p-2"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/1200px-Logo_of_Twitter.svg.png"
                alt="twitter"
              />
            </a>
            <a href="#" className="rounded-full bg-white">
              <img
                className="w-9 h-9 p-2"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/300px-Instagram_logo_2022.svg.png"
                alt="instagram"
              />
            </a>
          </div>
        </div>
        <div className="col-span-2 flex gap-2 flex-col">
          <h3 className="text-lg sm:text-xl font-semibold mb-3 text-white">
            Company
          </h3>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
        <div className="col-span-2 flex gap-2 flex-col">
          <h3 className="text-lg sm:text-xl font-semibold mb-3 text-white">
            Resources
          </h3>
          <a href="#">Admission</a>
          <a href="#">Courses</a>
          <a href="#">Research</a>
          <a href="#">Events</a>
        </div>
        <div className="col-span-2 flex gap-2 flex-col">
          <h3 className="text-lg sm:text-xl font-semibold mb-3 text-white">
            Support
          </h3>
          <a href="#">Help Center</a>
          <a href="#">FAQs</a>
          <a href="#">Contact Us</a>
          <a href="#">Developers</a>
        </div>
        <div className="col-span-2 flex gap-2 flex-col">
          <h3 className="text-lg sm:text-xl font-semibold mb-3 text-white">
            Contact
          </h3>
          <a href="#">1234 College Street, City</a>
          <a href="#">+1 234-567-8901</a>
          <a href="#">info@mycollege.com</a>
        </div>
      </div>
      <div className="flex flex-wrap justify-between mt-14">
        <p>@{new Date().getFullYear()} CollegeEZNow. All Rights Reserved</p>
        <p>
          Powered by{" "}
          <Link
            to="https://prodip-dev.web.app/"
            target="_blank"
            className="text-lg font-semibold"
          >
            ❤️Prodip Karati
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
