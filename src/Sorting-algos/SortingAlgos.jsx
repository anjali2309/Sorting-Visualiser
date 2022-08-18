import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./SortingAlgos.css";
import animationsFromBubbleSort from "./Animations/bubbleSort";
import animationsFromInsertionSort from "./Animations/insertionSort";
import animationsFromMergeSort from "./Animations/mergeSort";
import animationsFromQuickSort from "./Animations/quickSort";
import animationsFromSelectionSort from "./Animations/selectionSort";

function disableButtons() {
  const buttons = document.getElementsByClassName("buttons");
  for (let i = 0; i < 6; i++) {
    buttons[i].disabled = true;
  }
  const slider = document.getElementById("array-size");
  slider.disabled = true;
}

function enableButtons() {
  const buttons = document.getElementsByClassName("buttons");
  for (let i = 0; i < 6; i++) {
    buttons[i].disabled = false;
  }
  const slider = document.getElementById("array-size");
  slider.disabled = false;
}

export const randomIntFromInterval = (min, max) => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export function timer() {
  let delayElement = document.querySelector("#Speed");
  let delay = 320 - parseInt(delayElement.value);
  return new Promise((res) => setTimeout(res, delay));
}

const SortingAlgos = () => {
  const [array, setArray] = useState([]);
  const [speed, setSpeed] = useState("50");
  const [sizeArr, setSizeArr] = useState("60");

  const resetArray = () => {
    const arr = [];
    let arr2 = document.querySelectorAll(".array-bar");
    for (let i = 0; i < sizeArr; i++) {
      arr.push(randomIntFromInterval(1, 700));
      if (i < arr2.length) {
        arr2[i].style.backgroundColor = "turquoise";
      }
    }
    setArray(arr);
  };

  const mergeSort = async () => {
    disableButtons();
    await animationsFromMergeSort(speed);
    enableButtons();
  };

  const quickSort = async () => {
    disableButtons();
    await animationsFromQuickSort(speed);
    enableButtons();
  };

  const bubbleSort = async () => {
    disableButtons();
    await animationsFromBubbleSort(speed);
    enableButtons();
  };

  const insertionSort = async () => {
    disableButtons();
    await animationsFromInsertionSort(speed);
    enableButtons();
  };

  const selectionSort = async () => {
    disableButtons();
    await animationsFromSelectionSort(speed);
    enableButtons();
  };

  useEffect(() => {
    resetArray();
  }, [sizeArr]);

  return (
    <div className="sorting">
      <h1 className="header">Sorting Visualiser</h1>
      <div className="navbar">
        <button className="buttons" onClick={() => resetArray()}>
          Generate New Array
        </button>
        <span className="size">
          Size of Array
          <input
            type="range"
            id="array-size"
            min="5"
            max="300"
            step="1"
            value={sizeArr}
            onChange={(e) => {
              setSizeArr(e.target.value);
            }}
            onBlur={(e) => {
              setSizeArr(e.target.value);
            }}
          />
        </span>

        <span className="speed">
          Speed
          <input
            type="range"
            id="Speed"
            min="20"
            max="300"
            step="10"
            value={speed}
            onChange={(e) => {
              setSpeed(e.target.value);
            }}
          />
        </span>
        <button className="buttons" onClick={() => mergeSort()}>
          Merge Sort
        </button>
        <button className="buttons" onClick={() => quickSort()}>
          Quick Sort
        </button>
        <button className="buttons" onClick={() => bubbleSort()}>
          Bubble Sort
        </button>
        <button className="buttons" onClick={() => insertionSort()}>
          Insertion Sort
        </button>
        <button className="buttons" onClick={() => selectionSort()}>
          Selection Sort
        </button>
      </div>

      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              backgroundColor: "turquoise",
              height: `${value}px`,
              width: `5px`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SortingAlgos;
