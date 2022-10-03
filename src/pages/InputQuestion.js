import {React,useState} from 'react';
import styled from 'styled-components';
import ProgrBar from '../components/ProgressBar';
import { InputQuestionArray } from '../Data/data';
import PopUp from '../components/PopUp';
import { useLocation } from 'react-router-dom';
import { addQuestion, addIncorrect, removeQuestion,countFalseQuestion } from '../redux/cartRedux';
import { useDispatch,useSelector } from "react-redux";
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
const InfoParagraphe = styled.input`
color: grey;
width:100%;
margin-top:20px;
outline: none !important;
&:focus{
    border: 2px solid  #5AE4A8;
};`;


const QuestionButton = styled.button`
background-color: white;
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
const InputQuestion = () => {

    const [input, setInput] = useState('');
    const [ansewVerified, setAnswerVerified] = useState("");
    const [show, setShow] = useState(false);
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const cart = useSelector(state => state.cart.root);
    const quantity = useSelector(state => state.cart.quantity);
    const dispatch = useDispatch();



    const handelverification = () => {
        if (input !== "") {
            if (InputQuestionArray[id].correctAnswer.includes(input)) {
            
                setAnswerVerified(true)
                dispatch(addQuestion())

            } else {

                console.log("false")
                setAnswerVerified(false)
                dispatch(addIncorrect(cart[quantity]));
                dispatch(removeQuestion(quantity));
                dispatch(countFalseQuestion());

            }

            setShow(true)
            setInput("")
           
        }

    }
    const handleKeypress = (e) => {
        //it triggers by pressing the enter key
        if (e.keyCode === 13) {
            handelverification();
        }
    };


    return (

        <Container>
            <ProgrBar />
            <InfoContainer>
                <InfoTitle>سؤال  </InfoTitle>
                <InfoParagrapheContainer>
                    <InfoParagrapheTitle>{InputQuestionArray[id].question}</InfoParagrapheTitle>
                    <InfoParagraphe placeholder="Coding..." onInput={e => setInput(e.target.value)}
                        onKeyDown={(e) => handleKeypress(e)} value={input}>

                    </InfoParagraphe>
                </InfoParagrapheContainer>
            </InfoContainer>
            <Button onClick={() => handelverification()} >تحقق من الإجابة </Button>
            <PopUp showvalue={show} ansewVerified={ansewVerified} setShow={setShow}/>

        </Container>
    )
}
export default InputQuestion;