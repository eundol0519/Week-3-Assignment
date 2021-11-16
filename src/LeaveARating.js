import React, { useEffect } from 'react'
import styled from 'styled-components';
import { useHistory } from 'react-router';

const LeaveARating = ({location}) => {

    const history = useHistory();
    const day = location.state;
    
    const check = React.useRef(null);

    const hoverEvent = ()=>{
        // check.current.style.background="yellow"
    }

    React.useEffect(()=>{

        console.log("마운트 될 때 실행된다.")
        // check.current.addEventListener("click",hoverEvent)

        return ()=>{
            // check.current.removeEventListener("click", hoverEvent)
        }
    }, []);

    return (
        <div style={{marginTop:"50px"}}>
            <Day><DayOfWeek>{day}요일</DayOfWeek><p style={{paddingTop:'1px', fontSize:"20px"}}>평점 남기기</p></Day>
            <div style={{display:'flex', marginLeft:'75px'}}>
                <Circle ref={check}></Circle>
                <Circle ref={check}></Circle>
                <Circle ref={check}></Circle>
                <Circle ref={check}></Circle>
                <Circle ref={check}></Circle>
            </div>
            <LeaveBtn onClick={() => {
                history.push({
                    pathname:'/'
                })
            }}>평점 남기기</LeaveBtn>
        </div>
    );
}

const Day = styled.h1`
    font-size: 18px;
    flex-direction: row;
    display: flex;
    width: 200px;
    height: 70px;
    margin: 0 auto;
    margin-top: 10px;
    padding-left: 10px;
`;

const DayOfWeek = styled.p`
    border: 1px solid orange;
    border-radius: 5px;
    background: orange;
    font-color: white;
    width: 80px;
    text-align:center;
    margin-right: 10px;
    padding-top: 5px;
    color: white;
`

const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #ddd;
  margin: 5px;
`;

const LeaveBtn = styled.button`
    width: 100px;
    height: 50px;
    border: 1px solid orange;
    border-radius: 10px;
    background: orange;
    margin-top: 30px;
    margin-left: 130px;
    color: white;
`;

export default LeaveARating;