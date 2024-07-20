function solution(k, dungeons) {
  // 던전을 최소 요구 피로도 기준으로 정렬
  dungeons.sort((a, b) => a[0] - b[0]);

  let maxCount = 0;

  // 백트래킹을 사용하여 던전을 탐험하는 함수 (전부 다 돌고 max를 반환)
  function explore(remainingK, exploredCount, isVisited) {
    maxCount = Math.max(maxCount, exploredCount);

    dungeons.forEach(([최소필요피로도, 소모피로도], index) => {
      if (!isVisited[index] && remainingK >= 최소필요피로도) {
        // 만약 방문하지 않았고, 남아있는체력이 최소필요도보다 크다면 if문 내부 진행
        isVisited[index] = true;
        explore(remainingK - 소모피로도, exploredCount + 1, isVisited);
        // 다음을 위해 false로 초기화
        isVisited[index] = false;
      }
    });
  }

  // 초기 상태에서 탐험 시작
  explore(k, 0, new Array(dungeons.length).fill(false));

  return maxCount;
}
