// ACTION TYPE 정의
const CHANGE_COLOR = "counter/CHANGE_COLOR";
const INCREMENT = "counter/INCREMENT";
const DECREMENT = "counter/DECREMENT";

// ACTION 생성 함수 = ACTION 객체를 만드는 함수
export const changeColor = color => ({ type: CHANGE_COLOR, color });
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });

// 초기상태
const initialState = {
  color: 'red',
  number: 0,
};

// REDUCER 작성 = 변화를 일으키는 함수
export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CHANGE_COLOR:
      return {
        ...state,
        color: action.color,
      };
    case INCREMENT:
      return {
        ...state,
        number: state.number +1,
      };
    case DECREMENT:
      return {
        ...state,
        number: state.number -1,
      };
    default:
      return state;
  }
}
