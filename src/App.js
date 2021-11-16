import styled from "styled-components";
import './App.css';
import LeaveARating from './LeaveARating';
import WeekList from './WeekList'

function App() {

  const week = ['월', '화', '수', '목', '금', '토', '일']

  return (
    <Wrap>
      <Title>내 일주일은?</Title>
      <WeekList week={week}></WeekList>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 350px;
  height: 500px;
  margin: 50px auto;
  border: 1px solid gray;
`;

const Title = styled.h1`
  padding-top: 40px;
  font-size: 25px;
  text-align : center;
`;

export default App;
