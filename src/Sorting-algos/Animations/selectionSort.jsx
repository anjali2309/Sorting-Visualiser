import { timer } from "../SortingAlgos";

const animationsFromSelectionSort = async () => {
  const arr = document.getElementsByClassName("array-bar");
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      arr[i].style.backgroundColor = "red";
      arr[j].style.backgroundColor = "red";
      const hi = parseInt(arr[i].style.height);
      const hj = parseInt(arr[j].style.height);

      await timer();

      if (hi > hj) {
        arr[i].style.height = `${hj}px`;
        arr[j].style.height = `${hi}px`;
      }

      arr[i].style.backgroundColor = "turquoise";
      arr[j].style.backgroundColor = "turquoise";
    }
    arr[i].style.backgroundColor = "green";
  }
};

export default animationsFromSelectionSort;
