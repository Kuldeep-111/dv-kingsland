"use client";
import React from "react";
import Image from "next/image";

const VideoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="relative w-full max-w-[800px] mx-4">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 bg-[#705118] p-2 rounded-full text-white hover:bg-[#8a6a2b] transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="relative pt-[56.25%]">
          <video
            className="absolute top-0 left-0 w-full h-full"
            src="/assets/video/walkthrough.mp4"
            controls
            autoPlay
            playsInline
          >
            Your browser does not support the video tag.
          </video>
          {/* <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/_FJBaSLDLkA"
            title="DN Kingsland Virtual Tour"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe> */}
        </div>
      </div>
    </div>
  );
};

export default VideoModal; 