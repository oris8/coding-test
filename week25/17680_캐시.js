/**
 *
 * @param {*} cacheSize - 캐시 크기, 정수, 0 ~ 30
 * @param {*} cities - 영문자로만 구성된 도시이름 배열, 대소문자 구분하지 않으며 각 이름은 최대 20글자
 * @returns
 */
function solution(cacheSize, cities) {
  const HIT = 1,
    MISS = 5;
  if (cacheSize === 0) return cities.length * MISS;

  const cache = new Map();
  let time = 0;

  cities.forEach((city) => {
    city = city.toLowerCase();

    if (cache.has(city)) {
      time += HIT;
      cache.delete(city);
    } else {
      time += MISS;

      if (cache.size >= cacheSize) {
        const oldestCity = Array.from(cache.keys())[0];
        cache.delete(oldestCity);
      }
    }

    cache.set(city, time);
  });

  return time;
}
