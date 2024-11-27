function solution(players, callings) {
  const rank = new Map();
  for (let i = 0; i < players.length; i++) {
    rank.set(players[i], i);
  }

  for (const name of callings) {
    const currentRank = rank.get(name);
    const prevRank = currentRank - 1;

    const prevPlayer = players[prevRank];

    players[prevRank] = name;
    players[currentRank] = prevPlayer;

    rank.set(name, prevRank);
    rank.set(prevPlayer, currentRank);
  }

  return players;
}
