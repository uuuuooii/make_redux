// redux만들기

function createStore() {
  // store를 모아서 넘겨줌
  let state;

  workerData(state);

  return {};
}

function worker(state) {
  // do sometiong
}

// Store는 상태를 담고 있다. 상태들을 묶고 있는 객체
const store = createStore(state);
