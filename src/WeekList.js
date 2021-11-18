import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';

const WeekList = (props) => {

    const history = useHistory();

    const day_text_arr = {
        0: "일",
        1: "월",
        2: "화",
        3: "수",
        4: "목",
        5: "금",
        6: "토",
    };
    // day_text_arr는 딕셔너리 형태라서 배열 함수를 사용 할 수 없음

    const week_days = Object.keys(day_text_arr).map((data) => {
        // Object.keys(day_text_arr) -> ['0', '1', '2', '3', '4', '5', '6']

        return day_text_arr[data];
    });
    // 1) Object.keys를 사용하면 day_text_arr의 key 값만 불러와서 배열로 만듬
    // 2) 배열함수 map을 돌려서 data를 인자로 받아오고
    // 3) return day_text_arr에 index 값으로 data(key 값)을 넣어서 value를 가져온다.

    // week_days -> ['일', '월', '화', '수', '목', '금', '토']

    const week_rates = week_days.map((w) => {
        return {
            day: w, // 월~일까지 들어가고
            rate: // 랜덤 함수 들어가고
                Math.floor(Math.random() * (Math.floor(5) - Math.ceil(1) + 1)) +
                Math.ceil(1),
        };
    });
    // -> week_rates
    // 0: { day: '일', rate: 1 }
    // 1: { day: '월', rate: 3 }
    // 2: { day: '화', rate: 5 }
    // 3: { day: '수', rate: 4 }
    // 4: { day: '목', rate: 4 }
    // 5: { day: '금', rate: 1 }
    // 6: { day: '토', rate: 2 }

    return (
        <div>
            {week_rates.map((w, idx) => {
                return (
                    <Contents key={`week_day_${idx}`}>
                        <WeekStyle>
                            {w.day}
                        </WeekStyle>
                        {Array.from({ length: 5 }, (item, idx) => {
                            return (
                                <SquareStyle
                                    key={idx}
                                    style={{ backgroundColor: w.rate < idx ? "#ddd" : "yellow" }}
                                ></SquareStyle>
                            );
                        })}
                        <ClickStyle
                            onClick={() => {
                                history.push({
                                    pathname: '/leaveARating', // 이동할 경로
                                    state: w.day // 가지고 갈 값
                                })
                            }}
                        ></ClickStyle>
                    </Contents>
                );
            })}
        </div>
    );
};

const Contents = styled.div`
    width: 100%;
    margin-top: 10px;
    align-items: center;
    // 세로축을 기준으로 정렬한다.
    justify-content: center;
    // 가로축을 기준으로 좌우를 정렬한다.
    display: flex;
    margin-Left: 10px;
`;

const WeekStyle = styled.p`
    margin: 10px;
    font-weight: bold;
`

const SquareStyle = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 30px;
    margin: 5px;
`

const ClickStyle = styled.div`
    appearance: none; // 외형 모습
    background-color: transparent;
    border-bottom: 15px solid transparent;
    border-top: 15px solid transparent;
    border-left: 30px solid skyblue;
    border-right: 30px solid transparent;
    margin-left: 10px;
    width: 0;
    height: 0;
    color: #fff;
    cursor: pointer;
`

export default WeekList;