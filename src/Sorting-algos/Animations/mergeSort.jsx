import { timer } from "../SortingAlgos";

const animationsFromMergeSort = async () => {
  let arr = document.getElementsByClassName("array-bar");
  await mergeSortHelper(0, arr.length - 1);
};

async function mergeSortHelper(start, end) {
  if (start >= end) {
    return;
  }

  let mid = start + Math.floor((end - start) / 2);
  await mergeSortHelper(start, mid);
  await mergeSortHelper(mid + 1, end);

  await merge(start, mid, end);
}

async function merge(start, mid, end) {
  let arr = document.getElementsByClassName("array-bar");

  let left = new Array(mid - start + 1);
  let right = new Array(end - mid);
  for (let m = 0; m <= mid - start; m++) {
    left[m] = arr[start + m].style.height;
    arr[start + m].style.backgroundColor = "red";
  }

  for (let n = 0; n < end - mid; n++) {
    right[n] = arr[mid + n + 1].style.height;
    arr[mid + n + 1].style.backgroundColor = "orange";
  }

  let i = 0,
    j = 0,
    k = start;

  while (i < parseInt(left.length) && j < parseInt(right.length)) {
    let lh = parseInt(left[i]);
    let rh = parseInt(right[j]);

    if (end - start + 1 === arr.length) {
      arr[k].style.backgroundColor = "green";
    } else {
      arr[k].style.backgroundColor = "lightgreen";
    }

    let delayElement = document.querySelector("#Speed");
    let delay = 320 - parseInt(delayElement.value);

    await timer(delay);
    if (lh < rh) {
      arr[k].style.height = `${lh}px`;
      i++;
      k++;
    } else {
      arr[k].style.height = `${rh}px`;
      j++;
      k++;
    }
  }

  while (i < left.length) {
    let lh = parseInt(left[i]);

    let delayElement = document.querySelector("#Speed");
    let delay = 320 - parseInt(delayElement.value);

    await timer(delay);
    if (end - start + 1 === arr.length) {
      arr[k].style.backgroundColor = "green";
    } else {
      arr[k].style.backgroundColor = "lightgreen";
    }
    arr[k].style.height = `${lh}px`;
    i++;
    k++;
  }

  while (j < right.length) {
    let rh = parseInt(right[j]);

    await timer();
    if (end - start + 1 === arr.length) {
      arr[k].style.backgroundColor = "green";
    } else {
      arr[k].style.backgroundColor = "lightgreen";
    }
    arr[k].style.height = `${rh}px`;
    j++;
    k++;
  }
}

export default animationsFromMergeSort;
