// 예외처리 , 시간 효율성

// https://school.programmers.co.kr/learn/courses/30/lessons/12924

/**
 *
 * @param {number} n - 10,000 이하의 자연수
 * @returns - 연속된 자연수들로 n을 표현하는 방법의 수
 */
function solution(n) {
  // 직관적..인? 코드 ..?
  let answer = 0;
  for (let i = 1; i <= n / 2; i++) {
    let current = 0;
    let count = 0;
    while (current < n) {
      current += i + count;
      count++;
    }
    if (current === n) answer++;
  }
  return answer + 1;

  // 등차수열의 합을 이용한 방식
  // Sn = (n / 2) * (a1 + an)
  // n이 항의 개수이므로 = 연속된 수의 개수
  // ----> 2a1 + n - 1 = 2Sn / n
  // ---->  n 은 2Sn 의 약수여야함 = 약수의 개수구하기..
  //

  let answer = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i == 0 && i % 2 == 1) {
      answer++;
    }
  }
  return answer;

  let answer = 0;
  let i = 0;
  while (n > 0) {
    i++;
    if (n % i === 0) answer++;
    n -= i;
  }
  return answer;
}
