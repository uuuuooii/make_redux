// action 객체를 만들어주는 도구
export const actionCreator = (type) => (payload) => ({
  // 데이터를 payload라고 하는 키에다 많이 넣음.
  type,
  payload,
});

// 상태를 사용자가 바꾸는 함수 reducer
export function createStore(reducer) {
  let state;
  let handlers = [];

  // action 객체를 보내는 함수 dispath
  function dispath(action) {
    state = reducer(state, action);
    handlers.forEach((handler) => handler());
  }

  function subscribe(handler) {
    handlers.push(handler);
  }

  function getState() {
    return state;
  }

  return {
    dispath,
    getState,
    subscribe,
  };
}
