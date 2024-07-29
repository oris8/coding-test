/* 

*/

function solution(arr) {
  return arr.reduce((acc, el, idx) => {
    if (el !== arr[idx + 1]) acc.push(el);
    return acc;
  }, []);
}

function solution(arr) {
  return arr.filter((el, idx) => el !== arr[idx + 1]);
}
