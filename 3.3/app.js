function createStore() {
  // store를 모아서 넘겨줌
  let state;
  // 구독할 테니 데이터가 바뀌면 그 함수를 호출해줘 ("Pub and Subcribe" 구독 발행 모델)
  let handlers = [];

  // 2. worker호출
  function send(action) {
    state = worker(state, action);
    handlers.forEach((handler) => handler());
  }

  function subscribe(handler) {
    handlers.push(handler);
  }

  function getState() {
    return state;
  }

  return {
    send,
    getState,
    subscribe,
  };
}

// 3. 상태 변경
function worker(state = { count: 0 }) {
  // 새로운 상태 반환 => 항상 복사해서 Deep copy해서 새로운 객체로 반환
  switch (action.type) {
    case 'increase':
      return { ...state, count: state.count + 1 };
    default:
      return { ...state };
  }
}

// Store는 상태를 담고 있다. 상태들을 묶고 있는 객체
const store = createStore(worker);

// 데이터가 바뀔 때마다 구독기가 호출
store.subscribe(function () {
  console.log(store.getState());
});
// 1.호출
store.send({ type: 'increase' });
store.send({ type: 'increase' });
store.send({ type: 'increase' });
