function solution(n, a, b) {
  let currentRound = 0;

  while (currentRound < 20) {
    if (currentRound > 0) {
      a = Math.ceil(a / 2);
      b = Math.ceil(b / 2);
    }

    if (
      // 두 번호 차이가 1 이어야하고, 홀수 < 짝수 여야함
      Math.abs(a - b) === 1 &&
      Math.max(a, b) % 2 === 0
    ) {
      return currentRound + 1;
    }

    currentRound++;
  }
}

function solution(n, a, b) {
  let currentRound = 0;

  while (a !== b && currentRound < 20) {
    // 두 번호의 차이가 1 이면, 다음  Math.ceil(a / 2) 에서 결국 a === b가 됨을 이용
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    currentRound++;
  }
}
