function solution(k, tangerine) {
  /**
   * 종류의 개수가 최소화 되는 k를 만들기.
   * 이때 다른 종류의 수의 최솟값을 return
   *
   * 1. 크기별로 개수를 카운트해서 저장하기
   * 2. 카운트별로 내림차순 정렬하기
   * 3. 앞에서부터 카운트 누적합 해가면서 k 만들기
   * 4. 3번 과정 중, 종류의 개수를 따로 count해서 return)
   *
   * 제한 사항
   * 1 ≤ k ≤ tangerine의 길이 ≤ 100,000
   * 1 ≤ tangerine의 원소 ≤ 10,000,000
   */

  const map = new Map();
  let answer = 0;

  for (const tan of tangerine) {
    map.set(tan, (map.get(tan) || 0) + 1);
  }

  // count 순으로 내림차순 정렬
  const sortedTangerineCount = Array.from(map.values()).sort((a, b) => b - a);

  for (let i = 0; i < k; i++) {
    answer += sortedTangerineCount[i];
    if (answer >= k) return i + 1;
  }
}
