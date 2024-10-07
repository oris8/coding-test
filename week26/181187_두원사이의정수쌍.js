function solution(r1, r2) {
  let answer = 0;

  for (let i = 1; i <= r2; i++) {
    const max = Math.floor(Math.sqrt(r2 ** 2 - i ** 2));
    const min = r1 > i ? Math.ceil(Math.sqrt(r1 ** 2 - i ** 2)) : 0;

    // 1사분면에서만 계산하고, x4
    answer += (max - min + 1) * 4;
  }

  return answer;
}
