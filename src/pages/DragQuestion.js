import{React,useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import ProgrBar from '../components/ProgressBar';
import { DragQuestionArray } from '../Data/data';
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
const InfoParagraphe = styled.div`
text-align: center;
color: grey;`;

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
const ListContainer = styled.div`
display:flex;
flex-direction: row;
border: 2px solid rgb(224, 226, 227);
border-radius: 5px;`;

const ListItem = styled.div`
margin:10px;
background-color: rgb(224, 226, 227);
font-size: 20px;
padding: 10px;
border-radius: 5px;
@media only screen and (max-width:600px){
    font-size: 15px;
    margin:5px;
}
`;

const DragQuestion = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [answerItems, setAnswerItems] = useState(DragQuestionArray[id].answer);
    const [ansewVerified, setAnswerVerified] = useState("");
    const [show, setShow] = useState(false);
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart.root)
    const quantity = useSelector(state => state.cart.quantity)

     

    //save reference for dragItem and dragOverItem
    const dragItem = useRef(null)
    const dragOverItem = useRef(null)


    useEffect(() => {
        setAnswerItems(DragQuestionArray[id].answer);
      },[id]);

    //const handle drag sorting
    const handleSort = () => {
        //duplicate items
        let _answerItems = [...answerItems]
        //remove and save the dragged item content
        const draggedItemContent = _answerItems.splice(dragItem.current, 1)[0]
        //switch the position
        _answerItems.splice(dragOverItem.current, 0, draggedItemContent)
        //reset the position ref
        dragItem.current = null
        dragOverItem.current = null
        //update the actual array
        setAnswerItems(_answerItems)
    }


    const handelverification = () => {

        if (DragQuestionArray[id].correctAnswer.every((val, index) => val === answerItems[index])) {

            setAnswerVerified(true)
            dispatch(addQuestion())

        } else {

            setAnswerVerified(false)
            dispatch(addIncorrect(cart[quantity]));
            dispatch(removeQuestion(quantity));
            dispatch(countFalseQuestion());

        }

        setShow(true)
    }



  
    return (
        <Container>
            <ProgrBar />
            <InfoContainer>
                <InfoTitle>سؤال  </InfoTitle>
                <InfoParagrapheContainer>
                    <InfoParagrapheTitle>{DragQuestionArray[id].question}</InfoParagrapheTitle>
                    <InfoParagraphe>
                        <ListContainer>
                            {answerItems.map((item, index) => (
                                <ListItem
                                    key={index}
                                    draggable
                                    onDragStart={(e) => (dragItem.current = index)}
                                    onDragEnter={(e) => (dragOverItem.current = index)}
                                    onDragEnd={handleSort}
                                    onDragOver={(e) => e.preventDefault()}>
                                    {item}
                                </ListItem>
                            ))}
                        </ListContainer>
                    </InfoParagraphe>
                </InfoParagrapheContainer>
            </InfoContainer>
            <Button onClick={() => handelverification()} >تحقق من الإجابة </Button>
            <PopUp showvalue={show} ansewVerified={ansewVerified} setShow={setShow} />

        </Container>
    )
}
export default DragQuestion;