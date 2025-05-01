"use client";
import React from "react";
import Image from "next/image";

const VideoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0c0c0c6b] ">
      <div className="relative w-full max-w-[800px] mx-4">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 bg-[#705118] p-2 rounded-full text-white hover:bg-[#8a6a2b] transition-all duration-300"
        >
         <Image src="/assets/icons/close.webp" alt="Close icon"  width="14" height="14"/>
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
        </div>
      </div>
    </div>
  );
};

export default VideoModal; 