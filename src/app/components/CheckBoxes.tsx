"use client";
import React, { useEffect, useState } from "react";

const CheckBoxes = () => {
  const [checked, setChecked] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Component has mounted, now it's safe to access localStorage
    setIsMounted(true);

    if (typeof window !== "undefined") {
      const savedState = localStorage.getItem("checkboxstatus");
      if (savedState !== null) {
        setChecked(JSON.parse(savedState));
      }
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("checkboxstatus", JSON.stringify(checked));
    }
  }, [checked, isMounted]);
  const handleCheckboxChange = () => {
    setChecked((checked) => !checked);
  };
  return (
    <div className="">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
      />
      <label htmlFor="">Drink</label>
    </div>
  );
};

export default CheckBoxes;
