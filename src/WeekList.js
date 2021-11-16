import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';

const WeekList = (props) => {

    const week = props.week;
    const history = useHistory();

    return (
        <div>
            {week.map((day, index) => {
                return (
                    <Contents key={index} style={{display:'flex'}}>
                        <Day>{day}</Day>
                        <Circle key={1}></Circle>
                        <Circle key={2}></Circle>
                        <Circle key={3}></Circle>
                        <Circle key={4}></Circle>
                        <Circle key={5}></Circle>
                        <Square onClick={()=>{
                            history.push({
                                pathname:'/leaveARating',
                                state: day
                            })
                        }} day={day}></Square>
                    </Contents>
                );
            })}
        </div>
    );
}

const Contents = styled.div`
    margin-left : 30px;
`;

const Day = styled.h1`
    font-size: 18px;
    margin: 10px;
`;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #ddd;
  margin: 5px;
`;

const Square = styled.div`
    width: 0px;
    height: 0px;
    margin-top: 5px;
    margin-left: 10px;
    border-bottom: 15px solid transparent;
    border-top: 15px solid transparent;
    border-left: 30px solid skyblue;
    border-right: 30px solid transparent;
`;

export default WeekList;