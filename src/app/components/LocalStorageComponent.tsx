"use client";
import { timeStamp } from "console";
import React, { useEffect, useState } from "react";
import { json } from "stream/consumers";
const LocalStorageComponent = () => {
  const [favouriteFood, setfavouriteFood] = useState<string>("");
  const [isClient, setisClient] = useState(false);
  let localfood;
  useEffect(() => {
    localfood = localStorage.getItem("favFoodsaved");
    if (localfood !== null) {
      const { food, timeStamp } = JSON.parse(localfood);
      //   this is the time of getting/retrival
      const currentTime = new Date().getTime();
      const myDesireDurationInMs = 5 * 1000;
      if (currentTime - timeStamp < myDesireDurationInMs) {
        setfavouriteFood(food);
      } else {
        localStorage.removeItem("favFoodsaved");
        console.log("20 seconds got over, removed");
      }
    }

    setisClient(true);
  }, [favouriteFood]);
  const saveToLocalStorage = (e: any) => {
    e?.preventDefault();
    const currentTime = new Date().getTime();
    // this time is the time when setting the item
    const data = {
      food: favouriteFood,
      timeStamp: currentTime,
    };
    // we will somehow set the value of food in localstorage
    localStorage.setItem("favFoodsaved", JSON.stringify(data));
  };

  return (
    isClient && (
      <div>
        <h1>LocalStorage check </h1>
        <p></p>
        <p className="text-red-900">{favouriteFood}</p>
        <form action="" onSubmit={saveToLocalStorage} className="">
          <input
            className="outline-black border-black border-solid box-border  text-black"
            type="text"
            placeholder="enter your fav food"
            onChange={(e) => {
              setfavouriteFood(e.target.value);
            }}
          />
          <input
            className="bg-rose-400 p-2 cursor-pointer"
            type="submit"
            value="save"
          />
        </form>
      </div>
    )
  );
};

export default LocalStorageComponent;
