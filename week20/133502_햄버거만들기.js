const BURGER = "1231";

function solution(ingredient) {
  let count = 0;
  let stack = [];

  // 스택을 사용하여 재료를 순차적으로 처리
  for (let i = 0; i < ingredient.length; i++) {
    stack.push(ingredient[i]);

    // 스택의 마지막 네 개 요소가 BURGER와 일치하는지 확인
    if (stack.length >= 4 && stack.slice(-4).join("") === BURGER) {
      // BURGER를 발견하면 스택에서 제거하고, 카운트를 증가
      stack.splice(-4, 4);
      count++;
    }
  }

  return count;
}
