import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-black">
      {/* Rotating Netflix-Style Ring */}
      <div className="relative w-16 h-16 flex items-center justify-center">
        <div className="absolute w-full h-full border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
      </div>

      {/* Netflix Style Loading Text */}
      <p className="mt-4 text-2xl text-red-600 font-extrabold tracking-widest animate-pulse">
        C<span className="text-gray-400">H</span>ILLFLEX
        <span className="animate-pulse text-red-500">...</span>
      </p>
    </div>
  );
};

export default LoadingSpinner;
