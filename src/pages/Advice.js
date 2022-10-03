import React from 'react';
import styled from 'styled-components';
import ProgrBar from '../components/ProgressBar';
import { Link } from 'react-router-dom';
import { addQuestion } from '../redux/cartRedux';
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
background-color: rgb(242, 8, 8);
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
@media only screen and (max-width:1000px){
    font-size: 15px;
}
@media only screen and (max-width:700px){
    font-size: 13px;
}
`;
const InfoParagrapheTitle = styled.div`
text-align: center;
font-weight: 800;
margin:5px;
`;
const InfoParagraphe = styled.div`
text-align: right;
color: grey;`;


const InfoCode = styled.div`
text-align: center;
margin-left=20px`;


const Button = styled.button`
background-color: #5AE4A8;
font-size: 20px;
color:white;
padding: 5px 10px;
border-radius: 15px;
cursor: pointer;
border: none;
width:90%;
&:hover{
    background-color: #82e6bb;
};`


const Advice = () => {
    const quantity = useSelector(state => state.cart.quantity)
    const cart = useSelector(state => state.cart.root)
    const dispatch = useDispatch()
    const nextRoot = cart[quantity+1]

  
    const handelverification = () => {
        dispatch(
            addQuestion()
        )
    }


    return (
        <Container>
            <ProgrBar />
            <InfoContainer>
                <InfoTitle>نصيحة  </InfoTitle>
                <InfoParagrapheContainer>
                    <InfoParagrapheTitle>Variables</InfoParagrapheTitle>
                    <InfoParagraphe>
                        كي تسمي متغير لازم اسمو يحترم القواعد هذي 
                        <hr/>
                        ميلزمش اسم يبدا برقم -
                        <br/>
                         "_"فيه كان حروف و أرقام و -
                        <hr/>
                        <strong> رد بالك في الكتيبة</strong>
                        <br/>  
                        en majuscules ou minuscules
                        <br/>  
                         مثلا فما فرق بين زوز متغيرات هاذم
                         <br/> 
                         <InfoCode>
                         <code>age = 5  </code> 
                       <br/>
                       <code>AGE = 5  </code> 
                       </InfoCode>
                    </InfoParagraphe>
                </InfoParagrapheContainer>
            </InfoContainer>
            <Link to={nextRoot}><Button onClick={() => handelverification()}>التالي</Button></Link>
        </Container>
    )
}
export default Advice;