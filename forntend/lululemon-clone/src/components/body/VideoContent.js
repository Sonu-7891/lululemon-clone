import React from "react";

const VideoContent = () => {
  return (
    <div className="container w-[90%] mx-auto h-auto pb-6 pt-6 bg-blue-300 flex justify-center items-center">
      <div className="w-full max-w-xl bg-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="font-bold text-xl md:text-2xl">
          You do the relaxing, we’ll do the rushing.
        </h1>
        <p className="text-md md:text-lg text-black mt-4">
          Order gifts by Dec. 22, get them by Dec. 24.{" "}
          <span className="italic">*Exclusions apply.</span>
        </p>

        {/* Button */}
        <button className="border border-black text-black bg-white px-4 py-2 md:px-6 md:py-3 text-sm md:text-lg font-bold rounded-lg hover:bg-black hover:text-white transition duration-300 mt-6">
          LEARN MORE
        </button>
      </div>
    </div>
  );
};

export default VideoContent;
