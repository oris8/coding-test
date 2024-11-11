class TrieNode {
  constructor() {
    this.children = new Map();
    this.isEnd = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let currentNode = this.root;
    for (let char of word) {
      if (!currentNode.children.has(char)) {
        currentNode.children.set(char, new TrieNode());
      }
      // 중복되는 글자이고, 단어의 끝인지 확인
      if (currentNode.isEnd) {
        return "중복";
      }
      // 현재 노드 이동
      currentNode = currentNode.children.get(char);
    }
    currentNode.isEnd = true;
  }
}

function solution(phone_book) {
  // 각 문자를 트리형식으로 저장(trie)
  // 트라이 구조를 구현할 때 Insert에 중복을 막는 코드를 추가
  const trie = new Trie();
  phone_book.sort((a, b) => a.length - b.length);

  for (const phone of phone_book) {
    const result = trie.insert(phone);
    if (result === "중복") return false;
  }
  return true;
}
