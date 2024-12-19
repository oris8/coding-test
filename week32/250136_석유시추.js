function solution(land) {
  const n = land.length;
  const m = land[0].length;

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const oilChunks = Array.from({ length: n }, () => Array(m).fill(null));
  const chunkSizes = [];
  let chunkId = 0;

  function bfs(x, y) {
    const queue = [[x, y]];
    oilChunks[x][y] = chunkId;
    let size = 0;

    while (queue.length > 0) {
      const [cx, cy] = queue.pop();
      size++;

      for (const [dx, dy] of directions) {
        const nx = cx + dx;
        const ny = cy + dy;

        if (
          nx >= 0 &&
          nx < n &&
          ny >= 0 &&
          ny < m &&
          oilChunks[nx][ny] === null &&
          land[nx][ny] === 1
        ) {
          oilChunks[nx][ny] = chunkId;
          queue.push([nx, ny]);
        }
      }
    }
    return size;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (land[i][j] === 1 && oilChunks[i][j] === null) {
        chunkSizes.push(bfs(i, j));
        chunkId++;
      }
    }
  }

  let maxOil = 0;
  for (let col = 0; col < m; col++) {
    const seenChunks = new Set();
    let totalOil = 0;

    for (let row = 0; row < n; row++) {
      const chunkId = oilChunks[row][col];
      if (chunkId !== null && !seenChunks.has(chunkId)) {
        seenChunks.add(chunkId);
        totalOil += chunkSizes[chunkId];
      }
    }
    maxOil = Math.max(maxOil, totalOil);
  }

  return maxOil;
}
