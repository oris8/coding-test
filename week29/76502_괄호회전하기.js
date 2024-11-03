function solution(s) {
  /**
   *
   * 대괄호, 중괄호, 그리고 소괄호로 이루어진 문자열 s가 매개변수로 주어집니다.
   * 이 s를 왼쪽으로 x (0 ≤ x < (s의 길이)) 칸만큼 회전시켰을 때
   * s가 올바른 괄호 문자열이 되게 하는 x의 개수를 return
   *
   * 단순 스택으로 개별 처리하면 n^2 ㅠ ㅠ
   * 붙어 있는 경우 하나의 묶음으로 처리
   *
   * 1. (예외처리) 단순 count로 불가능한 경우 early return
   * 2.
   */
  const DICTIONARY = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  // 예외 처리
  if (s.length % 2 !== 0) return 0;
  if ([...s].filter((str) => DICTIONARY[str]).length !== s.length / 2) return 0;

  // 괄호가 붙어 있는 경우 하나의 묶음("O")으로 처리하여 arrayS에 저장
  const arrayS = 붙어있는_괄호_묶기(s, DICTIONARY);

  let validRotationCount = 0;

  // 회전하여 올바른 괄호 문자열이 되는 경우의 수를 계산
  for (let i = 0; i < arrayS.length; i++) {
    const rotatedArray = [...arrayS.slice(i), ...arrayS.slice(0, i)];
    if (is_올바른_괄호(rotatedArray, DICTIONARY)) {
      validRotationCount++;
    }
  }

  return validRotationCount;
}

/**
 * 붙어 있는 괄호를 묶어 "O"로 대체한 배열을 반환
 */
function 붙어있는_괄호_묶기(s, DICTIONARY) {
  const result = [];

  for (let i = 0; i < s.length; i++) {
    // 연속된 여닫는 괄호가 있는 경우 묶음 처리
    if (DICTIONARY[s.charAt(i)] === s.charAt(i + 1)) {
      i++;
      result.push("O");
    } else {
      result.push(s.charAt(i));
    }
  }

  return result;
}

/**
 * 주어진 배열이 올바른 괄호 문자열인지 확인
 */
function is_올바른_괄호(arrayS, DICTIONARY) {
  const stack = [];

  for (const char of arrayS) {
    if (char === "O") continue; // 묶음("O")은 건너뜀

    if (DICTIONARY[char]) {
      stack.push(char);
    } else {
      if (stack.length === 0 || DICTIONARY[stack.pop()] !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
