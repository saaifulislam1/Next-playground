"use client";
import React, { useEffect, useState } from "react";

const StateButton = () => {
  const [saved, setSaved] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
    // getlocal
    if (typeof window !== "undefined") {
      const savedState = localStorage.getItem("ButtonStatus");
      if (savedState !== null) {
        setSaved(JSON.parse(savedState));
      }
    }
  }, []);
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("ButtonStatus", JSON.stringify(saved));
    }
  }, [isMounted, saved]);
  const handleButtonClick = () => {
    setSaved((saved) => !saved);
  };
  return (
    <div className="">
      <button
        className={`w-[130px] ${
          saved ? "bg-red-400" : "bg-purple-600"
        }  text-white p-4`}
        onClick={handleButtonClick}
      >
        {saved ? "Marked" : "Mark"}
      </button>
    </div>
  );
};

export default StateButton;
