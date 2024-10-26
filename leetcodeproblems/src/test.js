import React, { useState, useEffect } from "react";
import "./ImageCarousel.css";

const ImageCarousel = () => {
  const [dogs, setDogs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % dogs.length);
  };

  const handlePreviousClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + dogs.length) % dogs.length);
  };

  const getDogs = async () => {
    const response = await fetch(
      "https://img.cdn4dd.com/s/managed/interview/tps-dogs/api.json"
    );
    const data = await response.json();
    const dogsData = data.data.children
      .map((c) => {
        const title = c.data.title;
        const url = c.data.preview?.images[0]?.resolutions[2]?.url;
        return url ? { title, url: url.replaceAll("&amp;", "&") } : null;
      })
      .filter(Boolean); // Filter out any null values

    setDogs(dogsData.slice(0, 10)); // Set only the first 10 dogs
  };

  useEffect(() => {
    getDogs();
  }, []);

  if (dogs.length === 0) return null; // Show nothing if dogs are not available

  const { title, url } = dogs[currentIndex];

  return (
    <div className="Image-Carousel-Container">
      <h2>{title}</h2>
      <img src={url} alt={title} />
      <div className="Image-Icons">
        <div onClick={handlePreviousClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-left-short"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
            />
          </svg>
        </div>
        <div onClick={handleNextClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-right-square-fill"
            viewBox="0 0 16 16"
          >
            <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;

function throttle(func, wait) {
  let timeInvoked = null;

  return (...args) => {
    if (timeInvoked) {
      clearInterval(wait);
    }

    setInterval(() => {
      fn.apply(this, args);
    }, wait);
  };
}


const person = { name: 'Satish'}

const greet = (greeting, punctuation) =>{
    console.log(greeting+ ','+ this.name+ punctuation)
}

greet.call(person, 'Hello', '!')


/**
 * @param {any} thisArg
 * @param {...*} argArray
 * @return {any}
 */
Function.prototype.myBind = function (thisArg, ...argArray) {
  let outFunction = this;
  return function (...newArgs) {
    // Default thisArg to globalThis if it's null or undefined
    thisArg = thisArg || globalThis;
    // Create a unique symbol
    const sym = Symbol();
    // Assign the function to the symbol property on thisArg
    thisArg[sym] = outFunction;
    // Invoke the function with the combined arguments
    const result = thisArg[sym](...argArray, ...newArgs);
    // Delete the symbol property from thisArg
    delete thisArg[sym];
    // Return the result of the function call
    return result;
  };
};

