/**
 * 주어진 정수 k에 대해 콜라츠 추측을 수행하여 배열을 반환하는 함수
 *
 * 콜라츠 추측은 다음과 같은 규칙을 따릅니다:
 *  - k가 짝수인 경우, 다음 수는 k / 2
 *  - k가 홀수인 경우, 다음 수는 3 * k + 1
 *  - 이 과정을 k가 1이 될 때까지 반복
 *
 * @param {number} k - 콜라츠 추측을 시작할 양의 정수
 * @param {number[]} [array=[]] - 콜라츠 추측 과정에서의 숫자들을 저장할 배열 (재귀 호출 시 사용)
 * @returns {number[]} 주어진 k로부터 시작하여 콜라츠 추측을 따른 숫자들의 배열
 *
 */
const collatz = (k, array = []) => {
  const next = k % 2 === 0 ? k / 2 : k * 3 + 1;
  return next > 1 ? collatz(next, [...array, k]) : [...array, k, 1];

  // 반복문으로 콜라츠 추측 수행 (스택 오버플로 방지)
  // while (k !== 1) {
  //   array.push(k);
  //   k = k % 2 === 0 ? k / 2 : k * 3 + 1;
  // }
  // array.push(1);
  // return array;
};

/**
 * 아이디어
 * - k를 가지고 콜라츠 추측 과정 나온 결과를 모두 담은 배열을 생성, 각 배열의 인덱스는 x좌표이고 요소의 값은 y좌표가 된다.
 * - ranges를 돌면서 각 구간에 대한 정적분을 구한다. (유효하지 않은 구간일 경우 -1)
 *   - 점마다 사다리꼴 공식으로 누적합을 구한다. ( (x1 + x2) / 2 * y )
 * - 나온 결과를 answer배열에 차례대로 담은 뒤 반환
 *
 *
 * @param {number} k - 2 ≤ k ≤ 10,000
 * @param {[a:number, b:number][]} ranges - 1 ≤ ranges의 길이 ≤ 10,000, 0 ≤ a < 200, -200 < b ≤ 0
 *
 * 주어진 모든 입력에 대해 정적분의 결과는 2^27 을 넘지 않습니다.
 * 본 문제는 정답에 실수형이 포함되는 문제입니다. 입출력 예의 소수 부분 .0이 코드 실행 버튼 클릭 후 나타나는 결괏값, 기댓값 표시와 다를 수 있습니다.
 *
 * @returns {number[]} - 정적분 결과를 담은 배열
 **/
function solution(k, ranges) {
  const collatzArr = collatz(k);

  return ranges.map(([a, b]) => {
    // 각 점 구간마다 넓이 구하기
    const [x1, x2] = [a, b <= 0 ? collatzArr.length - 1 + b : b];

    if (x2 < x1) return -1;

    let result = 0;
    for (let i = x1; i < x2; i++) {
      result += (collatzArr[i] + collatzArr[i + 1]) / 2;
    }
    return result;
  });
}
