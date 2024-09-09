/**
 *
 * @param {*} bridge_length - 다리의 길이, 1 <= length <= 10000
 * @param {*} weight  - 다리가 견딜 수 있는 무게, 1 <= weight <= 10000
 * @param {*} truck_weights - 트럭별 무게, 1 <= length <= 10000
 * @returns 순서대로 최단 시간 안에 다리를 건널때 걸리는 초
 */

function solution(bridge_length, weight, truck_weights) {
  const 다리를_지난_트럭 = [];
  const 다리를_건너는_트럭 = []; // [트럭 무게, 다리에서 경과 시간] 형태로 저장
  let time = 0;
  let currentTruck = 0;
  let currentWeight = 0;

  while (다리를_지난_트럭.length < truck_weights.length) {
    time++; // 시간증가

    // 다리에서 트럭이 빠져나가는 경우
    if (다리를_건너는_트럭.length > 0) {
      // 첫 번째 트럭이 다리 끝에 도달한 경우
      if (다리를_건너는_트럭[0][1] === bridge_length) {
        const 트럭 = 다리를_건너는_트럭.shift();
        currentWeight -= 트럭[0]; // 다리에서 무게 감소
        다리를_지난_트럭.push(트럭); // 다리를 지난 트럭 추가
      }
    }

    // 새로운 트럭을 다리에 올리는 경우
    if (
      currentTruck < truck_weights.length &&
      currentWeight + truck_weights[currentTruck] <= weight &&
      다리를_건너는_트럭.length < bridge_length
    ) {
      다리를_건너는_트럭.push([truck_weights[currentTruck], 0]); // 다리 위에 트럭 추가, 경과 시간 0
      currentWeight += truck_weights[currentTruck]; // 다리 위 무게 증가
      currentTruck++; // 다음 트럭으로 이동
    }

    // 다리 위에 있는 모든 트럭의 경과 시간 증가
    다리를_건너는_트럭.forEach((트럭) => 트럭[1]++);
  }
  return count;
}

// 시간 복잡도 O(n * bridge_length)
