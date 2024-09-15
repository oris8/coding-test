/**
 * "mm:ss" 형식의 문자열을 초로 변환
 *
 * @param {string} timeStr - "mm:ss" 형식의 시간 문자열
 * @returns {number} - 총 초 단위의 시간
 */
function mmssToSeconds(timeStr) {
  const [minutes, seconds] = timeStr.split(":").map(Number);
  return minutes * 60 + seconds;
}

/**
 * 초 단위의 시간을 "mm:ss" 형식의 문자열로 변환
 *
 * @param {number} seconds - 총 초 단위의 시간
 * @returns {string} - "mm:ss" 형식의 문자열로 변환된 시간
 */
function secondsToMmss(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return `${String(minutes).padStart(2, "0")}:${String(
    remainingSeconds
  ).padStart(2, "0")}`;
}

const COMMAND_ACTIONS = {
  prev: (pos) => {
    return Math.max(0, pos - 10);
  },
  next: (pos, video_len) => {
    return Math.min(video_len, pos + 10);
  },
  skipOp: (pos, op_start, op_end) => {
    if (op_start <= pos && pos <= op_end) {
      return op_end;
    }
    return pos;
  },
};

function solution(video_len, pos, op_start, op_end, commands) {
  const intro = [mmssToSeconds(op_start), mmssToSeconds(op_end)];

  let currentTime = mmssToSeconds(pos);

  // 시작 위치가 오프닝이면 스킵
  currentTime = COMMAND_ACTIONS["skipOp"](currentTime, ...intro);

  commands.forEach((command) => {
    // command에 따라 이동
    currentTime = COMMAND_ACTIONS[command](
      currentTime,
      mmssToSeconds(video_len)
    );
    // 이동 후 위치가 오프닝이면 스킵
    currentTime = COMMAND_ACTIONS["skipOp"](currentTime, ...intro);
  });

  return secondsToMmss(currentTime);
}
