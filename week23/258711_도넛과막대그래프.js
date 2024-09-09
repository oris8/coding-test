function solution(edges) {
  const graph = {}; // 각 정점에 들어오고 나가는 간선 수를 계산
  const answer = [0, 0, 0, 0]; // [생성된정점,도넛,막대,8자모양]

  edges.forEach(([a, b]) => {
    if (!graph[a]) graph[a] = { inCount: 0, outCount: 0 };
    if (!graph[b]) graph[b] = { inCount: 0, outCount: 0 };
    graph[a].outCount++;
    graph[b].inCount++;
  });

  const check = (vertex) => {
    // 그래프의 모양을 체크하는 함수
    const { inCount, outCount } = graph[vertex];

    if (outCount >= 2 && inCount === 0) {
      // 들어오는게 없고, 나가는게 2이상일 경우 생성된 정점임)
      answer[0] = +vertex;
      answer[1] = outCount; // 도넛 카운트에 임시 할당
    }
    if (outCount === 0) {
      answer[2] += 1; // 막대
    }
    if (inCount >= 2 && outCount >= 2) {
      answer[3] += 1; // 차수가 4인 경우 8자 모양의 중심(생성된 정점에 연결되어있는경우를 고려해 2이상으로 조건문 설정)
    }
  };

  Object.keys(graph).forEach((vertex) => {
    check(vertex);
  });

  // 도넛 = 생성된 정점에서 연결된 정점 수 - 막대 - 8자 모양
  answer[1] = answer[1] - answer[2] - answer[3];

  return answer;
}
