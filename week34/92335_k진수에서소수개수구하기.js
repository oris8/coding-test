function solution(n, k) {
  const kBase = n.toString(k);

  const candidates = kBase.split("0").filter((num) => num !== "");

  const isPrime = (num) => {
    if (num <= 1) return false;
    const sqrt = Math.sqrt(num);
    for (let i = 2; i <= sqrt; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  let primeCount = 0;
  for (const candidate of candidates) {
    if (isPrime(Number(candidate))) primeCount++;
  }

  return primeCount;
}
