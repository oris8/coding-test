const solution = (n, arr1, arr2) => {
  const calcArr = arr1.map(
    (el, idx) => +el.toString(2) + +arr2[idx].toString(2) + ""
  );

  const replacedString = (str) => str.replace(/0/g, " ").replace(/[1-9]/g, "#");

  return calcArr.map((el) =>
    el.length < n
      ? replacedString("0".repeat(n - el.length) + el)
      : replacedString(el)
  );
};
