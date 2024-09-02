// 최단거리 BFS
// 큐

// maps  n x m 크기의 게임 맵의 상태가 들어있는 2차원 배열, 0 또는 1
// 처음에 캐릭터는 게임 맵의 좌측 상단인 (1, 1) 위치에 있으며, 상대방 진영은 게임 맵의 우측 하단인 (n, m) 위치에 있습니다.

function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const queue = [[0, 0, 1]]; // [x, y, dist]

  const visited = Array.from({ length: n }, () => Array(m).fill(false));
  visited[0][0] = true; // 시작점을 방문 처리

  while (queue.length > 0) {
    const [x, y, dist] = queue.shift(); // 맨 앞을 빼서 확인 (큐)

    // 상대방 진영에 도착하면 경로 길이를 반환하고 종료
    if (x === n - 1 && y === m - 1) {
      return dist;
    }

    // 네 방향으로 이동
    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      // 유효한 범위 내에 있고, 방문하지 않았으며, 길이 있는 경우 (maps[nx][ny] === 1)
      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < n &&
        ny < m &&
        !visited[nx][ny] &&
        maps[nx][ny] === 1
      ) {
        visited[nx][ny] = true;
        queue.push([nx, ny, dist + 1]);
      }
    }
  }

  // 상대방 진영에 도달할 수 없는 경우
  return -1;
}

// 시간 복잡도 O(n * m)
