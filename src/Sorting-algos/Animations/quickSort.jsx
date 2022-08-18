import { randomIntFromInterval } from "../SortingAlgos";
import { timer } from "../SortingAlgos";

const animationsFromQuickSort = async () => {
  const arr = document.getElementsByClassName("array-bar");
  await quickSortHelper(0, arr.length - 1);
};

async function quickSortHelper(low, high) {
  if (low > high) return;
  const arr = document.getElementsByClassName("array-bar");
  let pivot = randomIntFromInterval(low, high);

  let hi = parseInt(arr[pivot].style.height);
  let hj = parseInt(arr[high].style.height);
  arr[pivot].style.height = `${hj}px`;
  arr[high].style.height = `${hi}px`;

  arr[high].style.backgroundColor = "pink";

  pivot = await findpos(low, high);

  await timer();

  arr[high].style.backgroundColor = "turquoise";
  arr[pivot].style.backgroundColor = "green";

  await quickSortHelper(low, pivot - 1);
  await quickSortHelper(pivot + 1, high);
}

async function findpos(low, high) {
  const arr = document.getElementsByClassName("array-bar");
  let i = low - 1;
  let ref = parseInt(arr[high].style.height);

  for (let j = low; j < high; j++) {
    let hj = parseInt(arr[j].style.height);

    if (hj < ref) {
      i++;
      arr[i].style.backgroundColor = "red";
      arr[j].style.backgroundColor = "red";

      await timer();
      let hi = parseInt(arr[i].style.height);
      arr[i].style.height = `${hj}px`;
      arr[j].style.height = `${hi}px`;
      arr[i].style.backgroundColor = "turquoise";
      arr[j].style.backgroundColor = "turquoise";
    }
  }

  let hi = parseInt(arr[i + 1].style.height);
  arr[i + 1].style.height = `${ref}px`;
  arr[high].style.height = `${hi}px`;

  return i + 1;
}
export default animationsFromQuickSort;
