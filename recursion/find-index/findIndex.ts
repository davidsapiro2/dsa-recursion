/** findIndex: return index of val in arr (or -1 if val is not present). */



function findIndex(arr: number[], val: number): number {
  if (arr.length === 0) return -1;
  if (arr[0] === val) return 0;

  const foundIndex = findIndex(arr.slice(1), val); //

  return foundIndex !== -1 ? foundIndex + 1 : -1;

}

export { findIndex };