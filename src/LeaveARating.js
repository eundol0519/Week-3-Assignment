import React from 'react'
import styled from 'styled-components';
import { useHistory } from 'react-router';

const LeaveARating = ({location}) => {

    const history = useHistory();
    const day = location.state;

    let [starStyle, setStarStyle] = React.useState(['unStar', 'unStar', 'unStar', 'unStar', 'unStar'])

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

    const change = (index)=>{

        for(let i = 1; i<=index; i++){
            // 색 변경을 어떻게 할 것인가
            // state에서 배열의 값 변경하는 방법
            if(i == 1){
                setStarStyle(['Star', 'unStar', 'unStar', 'unStar', 'unStar'])
            }else if(i == 2){
                setStarStyle(['Star', 'Star', 'unStar', 'unStar', 'unStar'])
            }else if(i == 3){
                setStarStyle(['Star', 'Star', 'Star', 'unStar', 'unStar'])
            }else if(i == 4){
                setStarStyle(['Star', 'Star', 'Star', 'Star', 'unStar'])
            }else if(i == 5){
                setStarStyle(['Star', 'Star', 'Star', 'Star', 'Star'])
            }
        }
    }

    return (
        <div style={{marginTop:"50px"}}>
            <Day><DayOfWeek>{day}요일</DayOfWeek><p style={{paddingTop:'1px', fontSize:"20px"}}>평점 남기기</p></Day>
            <div style={{display:'flex', marginLeft:'75px'}}>
                <Circle style={starStyle[0]==='unStar'?unstar:star} onClick={()=>{change(1)}}></Circle>
                <Circle style={starStyle[1]==='unStar'?unstar:star} onClick={()=>{change(2)}}></Circle>
                <Circle style={starStyle[2]==='unStar'?unstar:star} onClick={()=>{change(3)}}></Circle>
                <Circle style={starStyle[3]==='unStar'?unstar:star} onClick={()=>{change(4)}}></Circle>
                <Circle style={starStyle[4]==='unStar'?unstar:star} onClick={()=>{change(5)}}></Circle>
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
  color: #ddd;
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