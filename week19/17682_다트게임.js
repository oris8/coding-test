function solution(dartResult) {
  const optionTable = {
    "*": (n) => +n * 2,
    "#": (n) => +n * -1,
  };
  const bonusTable = {
    S: (n) => +n,
    D: (n) => Math.pow(+n, 2),
    T: (n) => Math.pow(+n, 3),
  };

  const splitResult = dartResult.split(/(?=\d)/);

  const resultArray = splitResult.reduce((acc, el, i) => {
    let number, bonus, option;

    if (el.includes("10")) {
      number = "10";
      bonus = el.charAt(2);
      option = el.charAt(3);
    } else {
      [number, bonus, option] = [...el];
    }

    // 10일경우 처리
    if (number == 1 && !bonus) {
      splitResult[i + 1] = 1 + splitResult[i + 1];
      return acc;
    }

    let score = bonusTable[bonus](number);

    if (option) {
      score = optionTable[el.charAt(2)](score);

      if (i > 0 && option === "*") {
        acc[i - 1] = optionTable["*"](acc[i - 1]);
      }
    }

    acc.push(score);
    return acc;
  }, []);

  return resultArray.reduce((acc, el) => acc + el, 0);
}
