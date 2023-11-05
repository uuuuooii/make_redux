import * as ActionType from './action-type';

const InitializeState = { count: 0 };

// 상태와 관련된 변경사항은 reducer함수만 체크 하면 됨
export function reducer(state = InitializeState, action) {
  switch (action.type) {
    case ActionType.INCREASE:
      return { ...state, count: state.count + 1 };
    case ActionType.DECREASE:
      return { ...state, count: state.count - 1 };
    case ActionType.REASET:
      return { ...state, count: 0 };
    default:
      return { ...state };
  }
}
