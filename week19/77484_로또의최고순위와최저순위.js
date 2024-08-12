function solution(lottos, win_nums) {
  const result = [6, 6, 5, 4, 3, 2, 1];

  const [max, min] = lottos.reduce(
    ([max, min], number) =>
      win_nums.includes(number)
        ? [max + 1, min + 1]
        : number === 0
        ? [max + 1, min]
        : [max, min],
    [0, 0]
  );

  return [result[max], result[min]];
}
