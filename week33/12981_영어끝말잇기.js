function solution(n, words) {
  const cache = new Set();

  let prev = "";

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (
      word.length === 1 ||
      cache.has(word) ||
      (prev && prev.slice(-1) !== word[0])
    ) {
      return [(i % n) + 1, Math.floor(i / n) + 1];
    }
    cache.add(word);
    prev = words[i];
  }

  return [0, 0];
}
