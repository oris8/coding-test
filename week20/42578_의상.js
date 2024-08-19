/*

clothes = [의상의 이름, 의상의 종류][]

*/

function solution(clothes) {
  const map = {};

  for (const [_, type] of clothes) {
    map[type] = (map[type] || 0) + 1;
  }

  const totalCombinations = Object.values(map).reduce(
    (acc, count) => acc * (count + 1),
    1
  );

  return totalCombinations;
}
