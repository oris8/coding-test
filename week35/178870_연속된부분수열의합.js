function solution(sequence, k) {
  let startIdx = 0;
  let current = 0;
  let answer = [0, 1000000]; // 제한사항 최댓값으로 설정

  // 배열을 순회하며 부분합을 계산
  for (let endIdx = 0; endIdx < sequence.length; endIdx++) {
    current += sequence[endIdx];

    while (current > k) {
      current -= sequence[startIdx];
      startIdx++;
    }

    if (current === k && endIdx - startIdx < answer[1] - answer[0]) {
      answer = [startIdx, endIdx];
    }
  }

  return answer;
}
