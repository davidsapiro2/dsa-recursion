/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present). */
// [1,2,3,3,4]
function binarySearch(arr: number[], val: number, left = 0, right = arr.length): boolean {
  if (left > right) return false;

  const mid = Math.floor(arr.length / 2); // 3

  if (arr[mid] === val) return true;
  if (arr[mid] > val) {
    return binarySearch(arr, val, left, mid - 1);
  } else {
    return binarySearch(arr, val, mid + 1, right);
  }
}

export { binarySearch };