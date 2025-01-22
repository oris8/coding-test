function solution(diffs, times, limit) {
  let left = 1;
  let right = 100000;
  let result = right;

  while (left <= right) {
    const level = Math.floor((left + right) / 2);
    let total = 0;

    for (let i = 0; i < diffs.length; i++) {
      const diff = diffs[i];
      const time_cur = times[i];
      const time_prev = i > 0 ? times[i - 1] : 0;

      if (diff > level) {
        const failCount = diff - level;
        total += failCount * (time_cur + time_prev) + time_cur;
      } else {
        total += time_cur;
      }

      // 시간 제한 초과 시 조기 종료
      if (total > limit) break;
    }

    if (total > limit) {
      left = level + 1; // 레벨 증가
    } else {
      result = level; // 가능한 최솟값 갱신
      right = level - 1; // 더 낮은 레벨 시도
    }
  }

  return result;
}
