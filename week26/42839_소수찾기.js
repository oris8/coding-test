function solution(numbers) {
  // 모든 조합을 만들어서 소수인지 판단
  // 중복 없애기 위해서 Set 이용

  // 소수 판별 함수
  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  // 중복된 값을 포함하지 않기 위해 set 구조 사용
  const set = new Set();

  // 재귀적으로 숫자를 만들면서 소수인지 판단 후 set에 추가
  function permutations(current, list) {
    if (current.length > 0 && isPrime(+current)) {
      set.add(+current);
    }

    for (let i = 0; i < list.length; i++) {
      permutations(current + list[i], list.slice(0, i) + list.slice(i + 1));
    }
  }

  permutations("", numbers);

  return set.size;
}
