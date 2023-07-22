// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import ReviewCard from "./ReviewCard";

const ReviewSection = () => {
  const collegeReviews = [
    {
      collegeName: "Example University",
      reviewText: "Great college with excellent facilities.",
      rating: 4.5,
    },
    {
      collegeName: "Another College",
      reviewText: "Not happy with the administration.",
      rating: 2.5,
    },
    {
      collegeName: "XYZ College",
      reviewText: "Amazing professors and supportive staff.",
      rating: 4.8,
    },
    {
      collegeName: "ABC Institute",
      reviewText: "State-of-the-art facilities for research.",
      rating: 4.3,
    },
    {
      collegeName: "Awesome University",
      reviewText: "Top-notch curriculum and diverse student body.",
      rating: 4.7,
    },
    {
      collegeName: "College of Innovation",
      reviewText: "Incredible opportunities for internships.",
      rating: 4.6,
    },
    {
      collegeName: "Bright Minds College",
      reviewText: "Helpful career guidance and placement support.",
      rating: 4.4,
    },
    {
      collegeName: "Tech Institute",
      reviewText: "Cutting-edge technology labs and resources.",
      rating: 4.9,
    },
    {
      collegeName: "Greenfield College",
      reviewText: "Beautiful campus with a friendly atmosphere.",
      rating: 4.2,
    },
    {
      collegeName: "Institute of Arts",
      reviewText: "Inspiring faculty and creative learning environment.",
      rating: 4.7,
    },
  ];

  return (
    <section className="mt-20">
      <h2 className="text-3xl font-bold text-center mb-3">College Reviews</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
      >
        {collegeReviews.map((review, index) => (
          <SwiperSlide key={index}>
            <ReviewCard
              key={index}
              collegeName={review.collegeName}
              reviewText={review.reviewText}
              rating={review.rating}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ReviewSection;
