function solution(land) {
  const n = land.length;

  let prev = [...land[0]];

  for (let i = 1; i < n; i++) {
    const curr = [...land[i]];

    curr[0] += Math.max(prev[1], prev[2], prev[3]);
    curr[1] += Math.max(prev[0], prev[2], prev[3]);
    curr[2] += Math.max(prev[0], prev[1], prev[3]);
    curr[3] += Math.max(prev[0], prev[1], prev[2]);

    prev = curr;
  }

  return Math.max(...prev);
}
