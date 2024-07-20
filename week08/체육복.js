function solution(n, lost, reserve) {
  // 여분의 체육복을 가져온 학생 중 도난당한 학생을 제외한 리스트
  const realReserve = reserve.filter((el) => !lost.includes(el));
  // 도난당한 학생 중 여분의 체육복을 가져온 학생을 제외한 리스트
  const realLost = lost
    .filter((el) => !reserve.includes(el))
    .sort((a, b) => a - b);

  // 수업을 들을 수 있는 학생 수 (전체 학생 수 - 도난당한 학생 수)
  let number = n - realLost.length;

  // 여분의 체육복을 가지고 있는 학생들의 Set , has랑 delete 메서드를 쓰기 위해서 사용했습니다
  const reserveSet = new Set(realReserve);

  realLost.forEach((el) => {
    if (reserveSet.has(el - 1)) {
      number++;
      reserveSet.delete(el - 1);
    } else if (reserveSet.has(el + 1)) {
      number++;
      reserveSet.delete(el + 1);
    }
  });

  return number;
}
