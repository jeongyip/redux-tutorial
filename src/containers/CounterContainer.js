import React, { Component } from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increment, decrement } from '../store/modules/counter';

class CounterContainer extends Component {

  //dumb Component 즉 props를 렌더링만 하는 컴포넌트에 넣어줄 함수를
  //connect로 연결해서 받아온 props 를 이용하여 만들어줌
  handleIncrement = () => {
    this.props.increment();
  }

  handleDecrement = () => {
    this.props.decrement();
  }

  render() {
    const { color, number } = this.props; // 여기도 마찬가지
    return (
      <Counter
        color={ color }
        value={ number }
        onIncrement={ this.handleIncrement }
        onDecrement={ this.handleDecrement }
      />);
  }
}

// props 로 넣어줄 스토어 상태값
// 스토어에 있는 state값에서 props로 넣어줄 것을 찾아서 넣어주기 - 즉 store에 있는 값 가져오기
const mapStateToProps = state => ({
  color: state.counter.color,
  number: state.counter.number,
});

// props 로 넣어줄 액션 생성함수
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  // bindActionCreators({ increment, decrement }, dispatch);
});

// 컴포넌트에 리덕스 스토어를 연동해줄 때에는 connect 함수 사용
// connect 를 통해서, store에 있는 내용을 PaletteContainer 에 props 로 넣어줄수 있는거임
// 그래서 결국 this.props.color, this.props.changeColor 을 쓸 수 있게 되는거임
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterContainer);
