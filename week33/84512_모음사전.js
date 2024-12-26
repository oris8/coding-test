function solution(word) {
  // 사전의 문자 배열과 각 자릿수 가중치 설정
  const WORDS = ["A", "E", "I", "O", "U"];
  const 가중치 = [781, 156, 31, 6, 1];

  let answer = 0;

  for (let i = 0; i < word.length; i++) {
    const char = word.charAt(i);
    const index = WORDS.findIndex((c) => c === char);

    answer += index * 가중치[i];

    answer += 1;
  }

  return answer; // 1부터 시작하므로 +1은 반복 안에서 처리됨
}
