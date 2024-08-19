/*


park[i] = S | O | X

routes = "op n"[]

const OP = [N, S, W, E]
*/

const OP = {
  N: [-1, 0],
  S: [1, 0],
  W: [0, -1],
  E: [0, 1],
};

function solution(park, routes) {
  let currentPoint;

  // 시작위치 찾기
  for (let i = 0; i < park.length; i++) {
    if (park[i].indexOf("S") !== -1) {
      currentPoint = [i, park[i].indexOf("S")];
      break;
      // 시작위치를 찾으면 break로 반복문 종료
    }
  }

  routes.forEach((el) => {
    const [x, y] = currentPoint;
    const [direction, distance] = el.split(" ");
    const [dx, dy] = OP[direction];
    const [afterX, afterY] = [x + dx * distance, y + dy * distance];

    let canMove = true;

    // 한 칸씩 이동하면서 검사
    for (let step = 1; step <= +distance; step++) {
      if (
        !park[afterX] ||
        !park[afterX][afterY] ||
        park[x + dx * step][y + dy * step] === "X"
      ) {
        canMove = false;
        break;
      }
    }

    // 이동 가능한 경우에만 currentPoint 업데이트
    if (canMove) {
      currentPoint = [afterX, afterY];
    }
  });

  return currentPoint;
}
