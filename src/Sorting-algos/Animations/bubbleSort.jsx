import { timer } from "../SortingAlgos";

const animationsFromBubbleSort = async () => {
  const arr = document.getElementsByClassName("array-bar");
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      arr[j + 1].style.backgroundColor = "red";
      arr[j].style.backgroundColor = "red";
      const hi = parseInt(arr[j + 1].style.height);
      const hj = parseInt(arr[j].style.height);

      await timer();

      if (hi < hj) {
        arr[j + 1].style.height = `${hj}px`;
        arr[j].style.height = `${hi}px`;
      }

      arr[j + 1].style.backgroundColor = "turquoise";
      arr[j].style.backgroundColor = "turquoise";
    }
    arr[arr.length - i - 1].style.backgroundColor = "green";
  }
};

export default animationsFromBubbleSort;
