//https://school.programmers.co.kr/learn/courses/30/lessons/17686

/**
 * 파일명을 기준으로 정렬하는 함수입니다.
 *
 * --------------------------------
 *
 * 파일명은 HEAD, NUMBER, TAIL로 구성되어 있습니다.
 * 영문 대소문자, 숫자, 공백(" "), 마침표("."), 빼기 부호("-")로만 구성되어 있습니다.
 * 영문자로 시작하며, 숫자를 하나 이상 포함합니다.
 *  1 <= 파일명의 길이 <= 100
 *
 * HEAD는 문자로만 구성되어 있으며 최소 1글자를 포함합니다.
 * NUMBER는 0부터 99999 사이의 숫자로, 00000이나 0101 등도 가능합니다.
 * TAIL은 나머지 부분입니다. ( 여기에는 숫자가 다시 나타날 수도 있으며, 아무 글자도 없을 수 있다.)
 *
 * --------------------------------
 *
 * 파일명 정렬 기준:
 * 1. HEAD 부분을 기준으로 사전 순으로 정렬합니다. 대소문자 구분 없이 비교합니다.
 * 2. HEAD가 동일한 경우, NUMBER 부분의 숫자를 기준으로 오름차순 정렬합니다. 숫자 앞의 0은 무시하며, 예를 들어 012와 12는 같은 값으로 처리됩니다.
 * 3. HEAD와 NUMBER가 동일한 경우, 원래 입력에서 주어진 순서를 유지합니다.
 *
 * --------------------------------
 *
 * @param {string[]} files - 정렬할 파일명 배열입니다. (배열의 길이 1000 이하)
 * @returns {string[]} - 정렬된 파일명 배열을 반환합니다.
 */
function solution(files) {
  // 0. 유효성 검사
  if (files.length === 0) return null;

  //   const isValidFileName = (fileName) => {
  //     const regex = /^[a-zA-Z][a-zA-Z0-9\s.-]*\d[a-zA-Z0-9\s.-]*$/;
  //     return (
  //       regex.test(fileName) && fileName.length >= 1 && fileName.length <= 100
  //     );
  //   };

  // 1. 파일명을 [HEAD, NUMBER, TAIL] 형태로 분리
  const splitFiles = files.map((file) => file.split(/(\d+)/));

  // 2. 정렬
  splitFiles.sort((a, b) => {
    // 2-1. head를 대소문자 구분없이 비교
    if (a[0].toLowerCase() < b[0].toLowerCase()) return -1;
    if (a[0].toLowerCase() > b[0].toLowerCase()) return 1;
    // 2-2. head 비교 결과가 동일할 경우, number 비교
    if (+a[1] !== +b[1]) return +a[1] - +b[1] > 0 ? 1 : -1;
    // 2-3 head, number 모두 동일한 경우 들어온 순서 유지
    return 0;
  });

  // 3. 분리된 파일명을 다시 문자열 형태로 변환
  return splitFiles.map((splitFile) => splitFile.join(""));
}
