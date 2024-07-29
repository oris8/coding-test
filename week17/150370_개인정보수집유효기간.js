/*
https://school.programmers.co.kr/learn/courses/30/lessons/150370

today: "YYYY.MM.DD"
terms: 1 ≤ terms.length ≤ 20 , "약관종류 유효기간" 형태
       약관종류: A~Z, terms 배열에서 약관 종류는 중복X
       유효기간: 개인정보를 보관할 수 있는 달 수를 나타내는 정수이며, 1 이상 100 이하
privacies: 1 ≤ privacies.length ≤ 100, "개인정보수집일자 약관종류"
 */

const addMonths = (date, months) => {
  let [year, month, day] = date.map(Number);

  month += +months;
  let newYear = year + Math.floor((month - 1) / 12);
  let newMonth = ((month - 1) % 12) + 1;

  newYear = newYear.toString();
  newMonth = newMonth.toString().padStart(2, "0");
  day = day.toString().padStart(2, "0");

  return [newYear, newMonth, day];
};

function solution(today, terms, privacies) {
  const termsMap = {};
  terms.map((term) => {
    const [type, period] = term.split(" ");
    termsMap[type] = period;
  });

  return privacies.reduce((acc, privacy, index) => {
    const [collectionDate, type] = privacy.split(" ");
    const expirationDate = addMonths(collectionDate.split("."), termsMap[type]);

    if (Number(expirationDate.join("")) <= Number(today.replaceAll(".", "")))
      acc.push(index + 1);
    return acc;
  }, []);
}

// 다른 풀이

function solution(today, terms, privacies) {
  const periodMap = terms.reduce((map, term) => {
    const [type, period] = term.split(" ");
    map[type] = +period;
    return map;
  }, {});

  return privacies.reduce((acc, privacy, index) => {
    const [date, type] = privacy.split(" ");

    const collectionDate = new Date(date);
    const expirationTimeStamp = new Date(collectionDate).setMonth(
      collectionDate.getMonth() + periodMap[type]
    );

    const isExpired = expirationTimeStamp <= new Date(today).getTime();

    if (isExpired) acc.push(index + 1);
    return acc;
  }, []);
}
