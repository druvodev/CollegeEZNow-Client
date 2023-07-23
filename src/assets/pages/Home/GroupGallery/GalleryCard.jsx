const GroupGallery = ({ details }) => {
  console.log(details);
  return (
    <div className="relative rounded-2xl overflow-hidden">
      <img
        src={details?.image}
        alt=""
        className="w-full h-80 sm:h-[500px] object-cover"
      />
      <p className="absolute bottom-3 text-lg font-semibold left-0 p-1 sm:p-5 pr-10 sm:pr-20 rounded-r-full bg-white/60 backdrop-blur-md shadow">
        {details?.details}
      </p>
    </div>
  );
};

export default GroupGallery;
