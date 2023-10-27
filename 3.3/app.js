function createStore() {
  // store를 모아서 넘겨줌
  let state;

  // 2. worker호출
  function send() {
    state = worker(state);
  }

  return {
    send,
  };
}

// 3. 상태 변경
function worker(state) {
  // 새로운 상태 반환 => 항상 복사해서 Deep copy해서 새로운 객체로 반환
  return { ...state };
}

// Store는 상태를 담고 있다. 상태들을 묶고 있는 객체
const store = createStore(worker);

// 1.호출
store.send();
