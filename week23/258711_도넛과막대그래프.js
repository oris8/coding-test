function solution(edges) {
  const graph = {};
  const answer = [0, 0, 0, 0];

  edges.forEach(([a, b]) => {
    if (!graph[a]) graph[a] = { inCount: 0, outCount: 0 };
    if (!graph[b]) graph[b] = { inCount: 0, outCount: 0 };
    graph[a].outCount++;
    graph[b].inCount++;
  });

  Object.keys(graph).forEach((vertex) => {
    const check = (vertex) => {
      const { inCount, outCount } = graph[vertex];

      if (sendCount >= 2 && receiveCount === 0) {
        answer[0] = +vertex;
        answer[1] = outCount;
      }
      if (outCount === 0) {
        answer[2] += 1; // 막대
      }
      if (inCount >= 2 && outCount >= 2) {
        answer[3] += 1; // 차수가 4인 경우 8자 모양의 중심(생성된 정점에 연결되어있는경우를 고려해 2이상으로 조건문 설정)
      }
    };

    check(vertex);
  });

  // 도넛 = 생성된 정점에서 연결된 정점 수 - 막대 - 8자 모양
  answer[1] = answer[1] - answer[2] - answer[3];

  return answer;
}
