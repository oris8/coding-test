function solution(h1, m1, s1, h2, m2, s2) {
  const hourRadFirst = h1 * 60 * 60 + m1 * 60 + s1;
  const hourRadLast = h2 * 60 * 60 + m2 * 60 + s2;

  let hourRad = (h1 % 12) * 60 * 60 + m1 * 60 + s1;
  let minRad = (m1 * 60 + s1) * 12;
  let secRad = s1 * 720;

  let answer = 0;

  for (let i = 0; i < hourRadLast - hourRadFirst; i++) {
    if (hourRad >= secRad && hourRad + 1 < secRad + 720) answer++;
    if (minRad >= secRad && minRad + 12 < secRad + 720) answer++;

    hourRad = (hourRad + 1) % 43200;
    minRad = (minRad + 12) % 43200;
    secRad = (secRad + 720) % 43200;
  }

  // 마지막 부분
  if (hourRad === secRad) answer++;
  if (minRad === secRad) answer++;

  // 12시 정각에 시침, 분침, 초침이 동시에 만남
  if (hourRadFirst === 0) answer--;
  if (hourRadFirst <= 43200 && hourRadLast >= 43200) answer--;

  return answer;
}
