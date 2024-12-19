// .....
const simulateRobotPaths = (route, logs, checkpoints, count) => {
  let [r, c] = route[0];
  const [er, ec] = route[1];

  const [nr, nc] = [er - r, ec - c];
  const nrDirection = nr > 0 ? 1 : -1;
  const ncDirection = nc > 0 ? 1 : -1;

  for (let i = 0; i <= Math.abs(nr) + Math.abs(nc); i++) {
    if (!logs[i]) {
      logs[i] = new Set();
    }

    if (!checkpoints[i]) {
      checkpoints[i] = new Set();
    }

    if (i !== 0 && i <= Math.abs(nr)) {
      [r, c] = [r + nrDirection, c];
    } else if (i !== 0) {
      [r, c] = [r, c + ncDirection];
    }

    if (logs[i].has(`${r},${c}`) && !checkpoints[i].has(`${r},${c}`)) {
      count++;
      checkpoints[i].add(`${r},${c}`);
    }

    logs[i].add(`${r},${c}`);
  }

  return { logs, count, checkpoints };
};

function solution(points, routes) {
  let logs = [];
  let count = 0;
  let checkpoints = [];

  function getRoutes(route) {
    return route.map((r) => points[r - 1]);
  }

  for (let route of routes) {
    const result = simulateRobotPaths(
      getRoutes(route),
      logs,
      checkpoints,
      count
    );
    logs = result.logs;
    count = result.count;
    checkpoints = result.checkpoints;
  }

  return count;
}
