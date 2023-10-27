function createStore() {
  // store를 모아서 넘겨줌
  let state;
  // 구독할 테니 데이터가 바뀌면 그 함수를 호출해줘 (Pub and Subcribe)
  let handlers;

  // 2. worker호출
  function send() {
    state = worker(state);
  }

  function getState() {
    return state;
  }

  return {
    send,
    getState,
  };
}

// 3. 상태 변경
function worker(state = { count: 0 }) {
  // 새로운 상태 반환 => 항상 복사해서 Deep copy해서 새로운 객체로 반환
  return { ...state, count: state.count + 1 };
}

// Store는 상태를 담고 있다. 상태들을 묶고 있는 객체
const store = createStore(worker);

// 1.호출
store.send();

console.log(store.getState());
