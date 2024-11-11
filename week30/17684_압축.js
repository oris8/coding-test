/**
 * LZW(Lempel–Ziv–Welch) 압축
 * 1.길이가 1인 모든 단어를 포함하도록 사전을 초기화한다.
 * 2.사전에서 현재 입력과 일치하는 가장 긴 문자열 w를 찾는다.
 * 3.w에 해당하는 사전의 색인 번호를 출력하고, 입력에서 w를 제거한다.
 * 4.입력에서 처리되지 않은 다음 글자가 남아있다면(c), w+c에 해당하는 단어를 사전에 등록한다.
 * 5. 단계 2로 돌아간다.
 *
 * @param {*} msg
 * @returns
 */

// 65-90 : 알파벳 대문자

function solution(msg) {
  // 트라이 구조에서 색인 번호를 저장하도록 구현
  const trie = new Trie();

  // 1. 사전 초기화 (영어 대문자 A - Z)
  for (let i = 65; i <= 90; i++) {
    trie.insert(String.fromCharCode(i));
  }

  let current = "";
  const result = [];

  for (let char of msg) {
    current += char;
    const trieIndex = trie.searchIndex(current);
    if (trie.searchIndex(current) !== null) {
      continue;
    }

    // 현재 존재하지 않는 문자열이 나오면 사전에 추가
    result.push(trie.searchIndex(current.slice(0, -1)));
    trie.insert(current);

    // 다음 검색을 위해 current 초기화
    current = char;
  }

  // 마지막 남은 current 문자열 처리
  if (current.length > 0) {
    result.push(trie.searchIndex(current));
  }

  return result;
}

class TrieNode {
  constructor() {
    this.children = new Map();
    this.index = null;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
    this.currentIndex = 1;
  }

  insert(word) {
    let currentNode = this.root;
    for (let char of word) {
      if (!currentNode.children.has(char)) {
        currentNode.children.set(char, new TrieNode());
      }
      currentNode = currentNode.children.get(char);
    }
    if (currentNode.index === null) {
      currentNode.index = this.currentIndex++;
    }
  }

  searchIndex(key) {
    let currentNode = this.root;
    for (let char of key) {
      if (!currentNode.children.has(char)) {
        return null;
      }
      currentNode = currentNode.children.get(char);
    }
    return currentNode.index;
  }
}
