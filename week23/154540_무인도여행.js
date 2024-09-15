/**
 *
 * @param {*} maps - 지도를 나타내는 배열로 각 요소는 X와 숫자로 조합된 문자열
 *
 * X는 바다, 숫자는 무인도를 의미하며
 * 숫자의 크기는 식량을 나타냅니다.
 *
 * 연결된 땅들은 하나의 무인도를 이룹니다.
 *
 * 식량 1개당 1일 머물 수 있습니다.
 *
 * @returns 각 섬에서 최대 며칠씩 머무를 수 있는지 오름차순으로 담은 배열 (없다면 -1)
 */
function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;
  const visited = Array.from({ length: n }, () => Array(m).fill(false));

  const directions = {
    dx: [-1, 1, 0, 0],
    dy: [0, 0, -1, 1],
  };

  function bfs(startX, startY) {
    const queue = [[startX, startY]]; // [x, y]
    let sum = +maps[startX][startY];
    visited[startX][startY] = true;

    while (queue.length > 0) {
      const [x, y] = queue.shift();

      for (let i = 0; i < 4; i++) {
        const nx = x + directions["dx"][i];
        const ny = y + directions["dy"][i];

        if (
          nx >= 0 &&
          nx < n &&
          ny >= 0 &&
          ny < m &&
          !visited[nx][ny] &&
          maps[nx][ny] !== "X"
        ) {
          visited[nx][ny] = true;
          sum = sum + +maps[nx][ny];
          queue.push([nx, ny]);
        }
      }
    }

    return sum;
  }

  const result = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (maps[i][j] !== "X" && !visited[i][j]) {
        // 아직 방문하지 않은 섬
        result.push(bfs(i, j));
      }
    }
  }

  return result.length ? result.sort((a, b) => a - b) : [-1];
}
