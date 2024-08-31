function solution(X, Y) {
  const arrayY = [...Y];

  const filteredArray = [...X].map((num) => {
    const indexY = arrayY.indexOf(num);
    if (indexY !== -1) {
      arrayY[indexY] = "temp";
    }
    return indexY !== -1;
  });

  const result = filteredArray?.sort((a, b) => b - a)?.join("") || "-1";
  return result.replace(/^0+$/, "0");
}

function solution(X, Y) {
  const mapY = {};

  // 속도 개선을 위해 for문 사용
  for (const num of Y) {
    mapY[num] = (mapY[num] || 0) + 1;
  }

  const commonElements = [];

  for (let num of X) {
    if (mapY[num] > 0) {
      commonElements.push(num);
      mapY[num]--;
    }
  }

  const result = commonElements?.sort((a, b) => b - a).join("") || "-1";

  return result.replace(/^0+$/, "0");
}
