function solution(cards1, cards2, goal) {
  const dictionary = new Map();
  const cards = [cards1, cards2];

  cards1.forEach((word) => {
    if (!dictionary.has(word)) {
      dictionary.set(word, 0);
    }

    dictionary.set(word, 0);
  });
  cards2.forEach((word) => {
    if (!dictionary.has(word)) {
      dictionary.set(word, 0);
    }

    dictionary.set(word, 1);
  });

  for (let i = 0; i < goal.length; i++) {
    const word = goal[i];
    if (!dictionary.has(word)) return "No";
    if (cards[dictionary.get(word)].shift() !== word) return "No";
    dictionary.delete(word);
  }

  return "Yes";
}
