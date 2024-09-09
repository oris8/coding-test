// 최단거리 x 전체 조합을 찾는 경우이기때문에 DFS (재귀로 진행)

function solution(numbers, target) {
  let count = 0;

  function dfs(depth, currentSum) {
    // 현재 depth가 마지막일때 최종 검사
    if (depth === numbers.length) {
      // target과 같으면 count ++, 아니면 return
      if (currentSum === target) {
        count++;
      }
      return;
    }

    // 다음 단계로 진행
    dfs(depth + 1, currentSum + numbers[depth]);
    dfs(depth + 1, currentSum - numbers[depth]);
  }

  dfs(0, 0);
  return count;
}

// 시간 복잡도 O(2^n)
