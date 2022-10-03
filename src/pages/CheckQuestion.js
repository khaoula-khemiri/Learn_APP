import React from 'react';
import styled from 'styled-components';
import ProgrBar from '../components/ProgressBar';
import { CheckQuestionArray } from '../Data/data';
import { Link } from 'react-router-dom';
import PopUp from '../components/PopUp';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { addQuestion, addIncorrect, removeQuestion,countFalseQuestion } from '../redux/cartRedux';
import { useDispatch, useSelector } from "react-redux";
import { mobile500, mobile800 } from '../responsive';

const Container = styled.div`
width: 25%;
height: 500px;
margin: auto;
margin-top: 15px;
padding:5px;
background-color:rgb(220, 216, 216);
border-radius:15px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
${mobile800({width: "40%"})};
${mobile500({width: "70%"})}`;

const InfoContainer = styled.div`
background-color: white;
margin :15px;
margin-top: 15px;
border-radius:15px;
padding: 5px;
height: 75%;
position: relative;
`;
const InfoTitle = styled.div`
background-color:rgb(0, 157, 255);
width: 40%;
padding: 5px 10px;
border-radius: 15px;
margin: auto;
color: white;
position: absolute; 
left: 50%; 
transform: translate(-50%, -50%);
text-align: center;
`;

const InfoParagrapheContainer = styled.div`
margin-top: 30px;
`;
const InfoParagrapheTitle = styled.div`
font-weight:500;
margin:5px;
`;
const InfoParagraphe = styled.div`
text-align: center;
color: grey;`;

const QuestionButton = styled.button`
background-color:${(props) => props.color};
font-size: 20px;
color:black;
padding: 5px 10px;
border-radius: 10px;
cursor: pointer;
border: 2px solid rgb(227, 222, 222);
width:90%;
margin:5px;
&:hover{
    background-color:rgb(242, 237, 237);
};
&:focus{
    background-color:#daeacf;
};
`;
const Button = styled.button`
background-color: #5AE4A8;
font-size: 20px;
color:white;
padding: 5px 10px;
border-radius: 15px;
cursor: pointer;
border: none;
width:90%;
margin-left:15px;
&:hover{
    background-color: #82e6bb;
};

`;

const Image = styled.img`
max-width: 70%;
height: auto;
display: block;
margin-left: auto;
margin-right: auto;
`;

const CheckQuestion = () => {
    const [anwerClicked, setAnswerClicked] = useState("");
    const [ansewVerified, setAnswerVerified] = useState("");
    const [show, setShow] = useState(false);
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart.root)
    const quantity = useSelector(state => state.cart.quantity)


    const handelverification = () => {
        if (anwerClicked !== "") {
            if (CheckQuestionArray[id].correctAnswer === anwerClicked.item) {
                setAnswerVerified(true)
                dispatch(addQuestion())
            } else {  
                setAnswerVerified(false);
                dispatch(addIncorrect(cart[quantity]));
                dispatch(removeQuestion(quantity));
                dispatch(countFalseQuestion());
            }

            setShow(true)
        }
    }

    return (
        <Container>
            <ProgrBar />
            <InfoContainer>
                <InfoTitle>سؤال  </InfoTitle>
                <InfoParagrapheContainer>
                    <InfoParagrapheTitle>{CheckQuestionArray[id].question}</InfoParagrapheTitle>
                    {CheckQuestionArray[id].image != ""?<Image src={CheckQuestionArray[id].image}></Image> :<div></div>}
                    <InfoParagraphe>
                        {CheckQuestionArray[id].answer.map(item => (
                            <QuestionButton key={item} color={"white"} onClick={() => setAnswerClicked({ item })}>{item}</QuestionButton>
                        ))}
                    </InfoParagraphe>
                </InfoParagrapheContainer>
            </InfoContainer>
            <Button onClick={() => handelverification()} >تحقق من الإجابة </Button>
            <PopUp showvalue={show} ansewVerified={ansewVerified} setShow={setShow} />
        </Container>
    )
}
export default CheckQuestion;