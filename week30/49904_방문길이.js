function solution(dirs) {
  // -5 ~ 5 , 2차원
  let current = [0, 0];

  const directions = {
    U: [0, 1],
    D: [0, -1],
    L: [-1, 0],
    R: [1, 0],
  };

  let visited = new Set();

  for (const dir of dirs) {
    const [dx, dy] = directions[dir];
    const next = [current[0] + dx, current[1] + dy];

    // x, y -5 ~ 5
    if (next[0] >= -5 && next[0] <= 5 && next[1] >= -5 && next[1] <= 5) {
      // 경로를 "startX-startY_endX-endY" 형식으로 기록
      const path = `${current[0]}-${current[1]}_${next[0]}-${next[1]}`;
      const reversePath = `${next[0]}-${next[1]}_${current[0]}-${current[1]}`;

      // 경로가 새로 방문된 경우에만 추가
      if (!visited.has(path) && !visited.has(reversePath)) {
        visited.add(path);
      }

      // 현재 위치를 업데이트
      current = next;
    }
  }
  return visited.size;
}
