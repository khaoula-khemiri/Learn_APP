import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { deleteIncorrect } from '../redux/cartRedux';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { mobile500, mobile800 } from '../responsive';
const Container = styled.div`
width: 25%;
height: 500px;
margin: auto;
margin-top: 15px;
border-radius:15px;
text-align: center;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
${mobile800({width: "40%"})};
${mobile500({width: "70%"})}`;

const Title = styled.div`
color: white;
font-size: 24px;
font-weight: 600;
text-align: center;
padding-top:5px;
`;

const InfoContainer = styled.div`
background-color: white;
margin :5px;
border-radius:15px;
padding: 5px;
height: 70%;
position: relative;

`;
const Image = styled.img`
max-width: 80%;
height: auto;
display: block;
margin-left: auto;
margin-right: auto;
`;

const InfoTitle = styled.div`
background-color: orange;
width: 50%;
padding: 5px 10px;
border-radius: 15px;
margin: auto;
color: white;
`;

const InfoParagrapheContainer = styled.div`

`;
const InfoParagrapheTitle = styled.div`
text-align: center;
font-weight: 800;
margin:5px;
`;
const InfoParagraphe = styled.div`
text-align: center;
color: grey;
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
margin-top:10px;
&:hover{
    background-color: #82e6bb;
};
`;

const Answer = styled.div`
width:90%;
border: 2px solid rgb(227, 222, 222);
border-radius: 15px;
padding:10px;
margin:auto;
`;

const CorrectAnswerContainer = styled.div`

`;

const CorrectAnswer = styled.div`

`;
const RongAnswerContainer = styled.div`

`;
const RongAnswer = styled.div`

`;

const Outro = () => {
    const dispatch = useDispatch();
    const falseQuestion = useSelector(state => state.cart.falseQuestion);
    const nombreQuestion=6;

    const handelverification = () => {
        dispatch(
            deleteIncorrect()
        )
    }

    console.log(falseQuestion)
    return (
        <Container>
            <InfoContainer>
                <Image src="/img/robotLogo.jpg"></Image>
                <InfoTitle>الدرس الأول  </InfoTitle>
                <InfoParagrapheContainer>
                    <InfoParagrapheTitle>أحسنت صنعا</InfoParagrapheTitle>
                    <InfoParagraphe>
                        لقد أنهيت هذا التمرين 
                    </InfoParagraphe>
                </InfoParagrapheContainer>
            </InfoContainer>
            <Answer>
                <CorrectAnswerContainer>
                 <CorrectAnswer> {nombreQuestion-falseQuestion} إجابات صحيحة</CorrectAnswer>
                </CorrectAnswerContainer>
                <RongAnswerContainer>
                <RongAnswer>{falseQuestion} إجابات خاطئة</RongAnswer>
                </RongAnswerContainer>
            </Answer>
            <Link to="/"><Button onClick={() => handelverification()}>أعد التجربة</Button></Link>
        </Container>

    );
}


export default Outro;