/*

board는 정사각 2차원 배열로 주어지며 5x5 이상 30x30 이하
각 칸에는 0이상 100이하 정수가 담기며 각 숫자는 같은 모양의 인형을 나타냄
인형을 잡아서 바구니에 넣고, 바구니에 동일한 인형 두개가 연속해서 쌓이면 같은 모양 인형 두개가 없어짐

크레인을 작동시킨 위치가 담긴 배열 moves(size: 1 ~ 1000, 배열내부의 원소: 1 ~ board 가로 크기 이하의 자연수)를 받아
크레인을 모두 작동시킨 후. 터트려 사라진 인형 개수를 return

board	moves	result
[[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]]	[1,5,3,5,1,2,1,4]	4


board[0][0] // 맨윗줄 첫번째
board[1][0] // 두번째줄 첫번째

바구니 = []
제거된_인형_수 = 0
moves를 순회하면서, 각 요소값(moveIndex)을 받아 
board[*][moveIndex-1]를 0부터 순회하면서 0이 아닌값을 발견하면 값을 바구니에 넣고 board내부 배열의 요소 값을 0으로 바꿈
바구니 마지막요소와 그 전 요소를 비교해서 같다면 pop 두번으로 제거해준뒤 제거된_인형_수에 +2

계속 반복 ~


*/

function solution(board, moves) {
  const 바구니 = [];
  let 제거된_인형_수 = 0;

  const 뽑힌_인형_바구니에_넣기 = (인형) => {
    바구니.push(인형);

    const 바구니_길이 = 바구니.length;

    if (바구니_길이 < 2 || 바구니[바구니_길이 - 1] !== 바구니[바구니_길이 - 2])
      return;

    바구니.pop();
    바구니.pop();

    제거된_인형_수 += 2;
  };

  moves.forEach((move) => {
    for (let i = 0; i < board.length; i++) {
      const 인형 = board[i][move - 1];

      if (인형 !== 0) {
        board[i][move - 1] = 0;
        뽑힌_인형_바구니에_넣기(인형);
        break;
      }
    }
  });

  return 제거된_인형_수;
}

/*
기존코드

const transpose = (matrix) =>
  matrix.reduce(
    (transposedMatrix, row) =>
      row.map((_, i) => [...(transposedMatrix[i] || []), row[i]]),
    []
  );
*/

// reduce안에서 map.. 또 그 내부에서 스프레드 연산자까지 사용하는게 좋아보이지 않아서
// transpose 함수만 나름대로 다시 작성해보았습니다

const transpose = (matrix) => {
  return matrix[0].map((_, colIndex) => matrix.map((row) => row[colIndex]));
};

const solution = (board, moves) => {
  const stacks = transpose(board).map((row) =>
    row.reverse().filter((el) => el !== 0)
  );

  const basket = [];
  let result = 0;

  for (const move of moves) {
    const pop = stacks[move - 1].pop();
    if (!pop) continue;
    if (pop === basket[basket.length - 1]) {
      basket.pop();
      result += 2;
      continue;
    }
    basket.push(pop);
  }

  return result;
};
