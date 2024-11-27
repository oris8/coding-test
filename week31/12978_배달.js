function solution(N, road, K) {
  // 1번 마을에서 각 마을까지 최단 거리
  // 최단거리가 K 이하인 마을의 개수 구하기
  // road 각 요소 (a, b, c)

  const sortedRoad = road.map(([a, b, c]) => (a < b ? [a, b, c] : [b, a, c]));
  sortedRoad.sort((a, b) => a[0] - b[0]);
  const passedTime = Array(N + 1).fill(Infinity);
  passedTime[1] = 0;

  let updated = true;
  while (updated) {
    updated = false;
    for (const [a, b, c] of sortedRoad) {
      if (passedTime[a] + c < passedTime[b]) {
        passedTime[b] = passedTime[a] + c;
        updated = true;
      }
      if (passedTime[b] + c < passedTime[a]) {
        passedTime[a] = passedTime[b] + c;
        updated = true;
      }
    }
  }

  return passedTime.filter((time) => time <= K).length;
}
