/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/131705
 *
 * 문제 설명
 * 한국중학교에 다니는 학생들은 각자 정수 번호를 갖고 있습니다. 이 학교 학생 3명의 정수 번호를 더했을 때 0이 되면 3명의 학생은 삼총사라고 합니다. 예를 들어, 5명의 학생이 있고, 각각의 정수 번호가 순서대로 -2, 3, 0, 2, -5일 때, 첫 번째, 세 번째, 네 번째 학생의 정수 번호를 더하면 0이므로 세 학생은 삼총사입니다. 또한, 두 번째, 네 번째, 다섯 번째 학생의 정수 번호를 더해도 0이므로 세 학생도 삼총사입니다. 따라서 이 경우 한국중학교에서는 두 가지 방법으로 삼총사를 만들 수 있습니다.
 *
 * 한국중학교 학생들의 번호를 나타내는 정수 배열 number가 매개변수로 주어질 때, 학생들 중 삼총사를 만들 수 있는 방법의 수를 return 하도록 solution 함수를 완성하세요.
 *
 * 제한사항
 * 3 ≤ number의 길이 ≤ 13
 * -1,000 ≤ number의 각 원소 ≤ 1,000
 * 서로 다른 학생의 정수 번호가 같을 수 있습니다.
 * 입출력 예
 * number	result
 * [-2, 3, 0, 2, -5]	2
 * [-3, -2, -1, 0, 1, 2, 3]	5
 * [-1, 1, -1, 1]	0
 * 입출력 예 설명
 * 입출력 예 #1
 *
 * 문제 예시와 같습니다.
 * 입출력 예 #2
 *
 * 학생들의 정수 번호 쌍 (-3, 0, 3), (-2, 0, 2), (-1, 0, 1), (-2, -1, 3), (-3, 1, 2) 이 삼총사가 될 수 있으므로, 5를 return 합니다.
 * 입출력 예 #3
 *
 * 삼총사가 될 수 있는 방법이 없습니다.
 *
 */

function solution(number) {
  // 합이 0이 되면 담을 결과 Count
  let resultCount = 0;

  // number length 만큼 booleanArray 생성
  const arr = Array.from({ length: number.length }, () => false);

  // 내부에서 호출할 재귀함수 선언
  /**
   *
   * @param {*} acc - 번호 합산값
   * @param {*} booleanArray - 사용했던 숫자인지 파악하는 array
   * @param {*} count : 몇번째 더하는지 확인하는 count
   * @param {*} startIdx : 시작 idx
   * @returns
   */
  function fuc(acc, booleanArray, count, startIdx) {
    if (count === 3 && acc === 0) {
      resultCount = resultCount + 1;
      return;
    } else if (count === 3) {
      return;
    }

    for (let idx = startIdx; idx < number.length; idx++) {
      if (booleanArray[idx]) continue;

      booleanArray[idx] = true;
      fuc(acc + number[idx], booleanArray, count + 1, idx + 1);
      booleanArray[idx] = false;
    }

    // 아래와 같이 startIdx를 정해주지 않고 전체를 순회하는 경우 제대로된 결과값이 나오지 않음 (중복 계산이 일어나게 됨)
    //     for (let i = 0; i < booleanArray.length; i++) {

    //       if (!booleanArray[i]) {
    //       booleanArray[i] = true;
    //       fuc(acc + number[i], booleanArray, count + 1);
    //       booleanArray[i] = false;}
    //     }
  }

  number.forEach((num, idx) => {
    arr[idx] = true;
    fuc(num, arr, 1, idx + 1);
  });

  return resultCount;
}
