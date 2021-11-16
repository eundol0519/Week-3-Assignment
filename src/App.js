import styled from "styled-components";
import './App.css';
import WeekList from './WeekList';
import LeaveARating from "./LeaveARating";
import NotFound from "./NotFound"
import { Route, Switch } from "react-router-dom";

function App() {

  const week = ['월', '화', '수', '목', '금', '토', '일']

  return (
    <Wrap>
      <Switch>
        <Route path="/" exact>
          <Title>내 일주일은?</Title>
          <WeekList week={week}></WeekList>
        </Route>
        <Route path='/weekList' exact component={WeekList}></Route>
        <Route path='/leaveARating' exact component={LeaveARating}></Route>
        <Route>
          <NotFound></NotFound>
        </Route>
      </Switch>
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
  font-size: 20px;
  text-align : center;
`;

export default App;
