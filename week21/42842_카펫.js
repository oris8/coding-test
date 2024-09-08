/**
 * 카펫의 가로 길이는 세로 길이와 같거나, 세로 길이보다 길다.
 * 카팻의 테두리는 갈색, 내부는 노란색 격자로 이루어져있다.
 * 따라서 카펫의 최소 사이즈는 3,3
 * @param {number} brown - 갈색 격자 수 (8 ≤ brown ≤ 5000)
 * @param {number} yellow  - 노란색 격자 수 (1 ≤ yellow ≤ 2000000)
 * @returns {number[]} 카펫의 가로, 세로 크기를 순서대로 배열에 담은 값
 *
 * @example
 * // returns [4, 3]
 * solution(10, 2);
 *
 * @example
 * // returns [3, 3]
 * solution(8, 1);
 */
function solution(brown, yellow) {
  const total = brown + yellow;

  for (let height = 3; height <= Math.sqrt(total); height++) {
    if (total % height === 0) {
      const width = total / height;
      if ((width - 2) * (height - 2) === yellow && width >= height) {
        return [width, height];
      }
    }
  }
}
