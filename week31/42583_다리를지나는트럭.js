/**
 *
 * @param {number} bridge_length - 다리의 길이, 최대 다리에 동시에 올라갈 수 있는 트럭 수 (1 <= bridge_length <= 10000)
 * @param {number} weight - 다리가 견딜 수 있는 최대 무게 (1 <= weight <= 10000)
 * @param {number[]} truck_weights - 트럭별 무게 배열 (1 <= truck_weights.length <= 10000)
 * @returns {number} 모든 트럭이 다리를 건너는 데 걸리는 최단 시간 (초)
 */
function solution(bridge_length, weight, truck_weights) {
  const 다리를_건너는_트럭 = []; // [트럭 무게, 다리에서 경과 시간] 형태로 저장
  let count = 0;
  let currentTruck = 0;
  let currentWeight = 0;

  while (다리를_건너는_트럭.length > 0 || currentTruck < truck_weights.length) {
    count++; // 시간 증가

    // 다리에서 트럭이 빠져나가는 경우 처리
    if (다리를_건너는_트럭.length > 0) {
      if (다리를_건너는_트럭[0][1] === bridge_length) {
        const 트럭 = 다리를_건너는_트럭.shift();
        currentWeight -= 트럭[0]; // 다리에서 무게 감소
      }
    }

    // 새로운 트럭을 다리에 올리는 경우
    if (
      currentTruck < truck_weights.length &&
      currentWeight + truck_weights[currentTruck] <= weight &&
      다리를_건너는_트럭.length < bridge_length
    ) {
      const 트럭_무게 = truck_weights[currentTruck];
      다리를_건너는_트럭.push([트럭_무게, 0]); // 다리 위에 트럭 추가, 경과 시간 0
      currentWeight += 트럭_무게; // 다리 위 무게 증가
      currentTruck++; // 다음 트럭으로 이동
    }

    // 다리 위 트럭들의 경과 시간 증가
    다리를_건너는_트럭.forEach((트럭) => 트럭[1]++);

    // 다음 트럭이 다리에 오를 수 없으면 시간 점프
    if (
      currentTruck < truck_weights.length &&
      currentWeight + truck_weights[currentTruck] > weight
    ) {
      const 첫번째_트럭 = 다리를_건너는_트럭[0];
      const 추가시간 = bridge_length - 첫번째_트럭[1];

      // 전체 시간을 한번에 추가하고, 각 트럭의 경과 시간도 한번에 증가
      count += 추가시간;
      다리를_건너는_트럭.forEach((트럭) => (트럭[1] += 추가시간));
    }
  }

  return count;
}
