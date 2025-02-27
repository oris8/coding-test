function solution(order) {
    let stack = [];  // 보조 컨테이너 (스택)
    let current = 1; // 컨테이너 벨트에서 현재 진행 중인 상자 번호
    let count = 0;   // 트럭에 실은 상자 개수

    for (let i = 0; i < order.length; i++) {
        let target = order[i];

        // 컨테이너 벨트에서 원하는 상자가 나올 때까지 stack에 저장
        while (current <= target) {
            stack.push(current);
            current++;
        }

        // 보조 컨테이너의 맨 위가 order[i]와 일치하면 꺼내서 트럭에 적재
        if (stack[stack.length - 1] === target) {
            stack.pop();
            count++;
        } else {
            // 더 이상 진행 불가능 (스택의 맨 위가 order[i]가 아님)
            break;
        }
    }

    return count;
}