import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';

const PracWeekList = (props) => {

    const week = props.week;
    const history = useHistory();

    let [starStyle, setStarStyle] = React.useState(['unStar', 'unStar', 'unStar', 'unStar', 'unStar'])
    // ['unStar', 'unStar', 'unStar', 'unStar', 'unStar']

    let randomStar = (day) => {

        const dayCheck = document.getElementById(day).id   
        // document.getElementById(day) -> <div id="월" class="sc-bdvvtL bejxkP" style="display: flex;"><h1 class="sc-gsDKAQ kSiiLT">월</h1><div class="sc-dkPtRN ezLQeb" style="width: 30px; height: 30px; border-radius: 50%; background-color: yellow; margin: 5px;"></div><div class="sc-dkPtRN ezLQeb" style="width: 30px; height: 30px; border-radius: 50%; background-color: yellow; margin: 5px;"></div><div class="sc-dkPtRN ezLQeb" style="width: 30px; height: 30px; border-radius: 50%; background-color: yellow; margin: 5px;"></div><div class="sc-dkPtRN ezLQeb" style="width: 30px; height: 30px; border-radius: 50%; background-color: rgb(221, 221, 221); margin: 5px;"></div><div class="sc-dkPtRN ezLQeb" style="width: 30px; height: 30px; border-radius: 50%; background-color: rgb(221, 221, 221); margin: 5px;"></div><div class="sc-hKwDye lbfBcO"></div></div>
        // document.getElementById(day).id -> 월
        // week[index]===dayCheck -> true

        let random = 0

        for (let i = 0; i <= week.length; i++) {

            if (dayCheck == week[i]) {
                random = Math.round(Math.random() * (5 - 1)) + 1

                for (let j = 1; j <= random; j++) {

                    // 색 변경을 어떻게 할 것인가
                    // state에서 배열의 값 변경하는 방법
                    if (j == 1) {
                        setStarStyle(['Star', 'unStar', 'unStar', 'unStar', 'unStar'])
                    } else if (j == 2) {
                        setStarStyle(['Star', 'Star', 'unStar', 'unStar', 'unStar'])
                    } else if (j == 3) {
                        setStarStyle(['Star', 'Star', 'Star', 'unStar', 'unStar'])
                    } else if (j == 4) {
                        setStarStyle(['Star', 'Star', 'Star', 'Star', 'unStar'])
                    } else if (j == 5) {
                        setStarStyle(['Star', 'Star', 'Star', 'Star', 'Star'])
                    }
                }
            }
        }
    }

    const unstar = {
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        backgroundColor: "#ddd",
        margin: "5px"
    }

    const star = {
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        backgroundColor: "yellow",
        margin: "5px"
    }

    return (
        <div>
            {week.map((day, index) => {
                return (
                    <Contents onClick={() => { randomStar(day) }} id={day} key={day} style={{ display: 'flex' }}>
                        <Day>{day}</Day>
                        <Circle style={starStyle[0] == 'unStar' ? unstar : star}></Circle>
                        <Circle style={starStyle[1] == 'unStar' ? unstar : star}></Circle>
                        <Circle style={starStyle[2] == 'unStar' ? unstar : star}></Circle>
                        <Circle style={starStyle[3] == 'unStar' ? unstar : star}></Circle>
                        <Circle style={starStyle[4] == 'unStar' ? unstar : star}></Circle>
                        <Square onClick={() => {
                            history.push({
                                pathname: '/leaveARating',
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

export default PracWeekList;