// https://school.programmers.co.kr/learn/courses/30/lessons/12909?language=javascript

function solution(s) {
  if (
    s.at(0) === ")" || // 첫 번째 문자가 ')'이면 false
    s.at(-1) === "(" || // 마지막 문자가 '('이면 false
    (s.match(/\(/g)?.length || 0) !== (s.match(/\)/g)?.length || 0) // 여는 괄호와 닫는 괄호의 개수 비교
  )
    return false;

  const stack = [];

  for (const el of s) {
    // 여는 괄호일 경우 검사없이 스택에 추가
    if (el === "(") stack.push(el);
    // 닫는 괄호일 경우, 검사
    else {
      if (stack.length === 0) return false;
      stack.pop(el);
    }
  }

  return stack.length === 0;
}
