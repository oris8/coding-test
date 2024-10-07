// 점화식 - F(n) = F(n-1) + F(n-2)
function solution(n) {
  const MOD = 1234567;

  let prev = 0,
    curr = 1;

  for (let i = 2; i <= n; i++) {
    const next = (prev + curr) % MOD;
    prev = curr;
    curr = next;
  }

  return curr;
}

// 재귀 + 메모이제이션으로 구현했다가,
// 깊이제한으로 통과가 안돼서 반복문으로 구현
