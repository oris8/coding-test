function solution(n) {
  let 점프할_거리 = 0;
  let 남은_거리 = n;

  while (남은_거리 / 2 > 0) {
    점프할_거리 += 남은_거리 % 2;
    남은_거리 = Math.trunc(남은_거리 / 2);
  }

  return 점프할_거리 + 남은_거리;
}
