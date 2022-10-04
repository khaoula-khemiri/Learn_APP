import React from 'react';
import styled from 'styled-components';
import ProgrBar from '../components/ProgressBar';
import { Link } from 'react-router-dom';
import { addQuestion } from '../redux/cartRedux';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
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
background-color:rgb(243, 105, 6);
width: 40%;
padding: 5px 10px;
border-radius: 15px;
margin: auto;
color: white;
position: absolute; 
text-align: center;
left: 50%; 
transform: translate(-50%, -50%);
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
color: grey;
text-align: right;`;

const InfoCode = styled.div`
text-align: left;
margin-left=20px`;

const Button = styled.button`
background-color: #5AE4A8;
font-size: 20px;
color:white;
margin-left:15px;
padding: 5px 10px;
border-radius: 15px;
cursor: pointer;
border: none;
width:90%;
&:hover{
    background-color: #82e6bb;
};
`;

const Intro = () => {
    const quantity = useSelector(state => state.cart.quantity)
    const cart = useSelector(state => state.cart.root)
    const dispatch = useDispatch()

    const handelverification = () => {
        dispatch(
            addQuestion({})
        )
    }
    return (
        <Container>
            <ProgrBar />
            <InfoContainer>
                <InfoTitle>مقدمة  </InfoTitle>
                <InfoParagrapheContainer>
                    <InfoParagrapheTitle>Les Variables- المتغيرات </InfoParagrapheTitle>
                    <InfoParagraphe>
        
                        المتغير في لغات البرمجة نجمو نشبهوه بصندوق نعطيوه 
                         اسم ونحطو فيه قيمة معينة نجمو  نبدلوها كيما نحبو على هكا سميناه متغير
                         <hr/> 
                       كي تعرف متغير يكفي انك تكتب إسمو وتعطيه القيمة الي تحب تحطها فيه و 
                       type متستحقش  تحط   
                       <br/>
                       :كيف المثال هذا  
        
                       <InfoCode>
                       <code>x=5  </code> #x est de type entier 
                       <br/>
                       <code>x="hello!"  </code> #x est de type chaine 
                       </InfoCode>               
                    </InfoParagraphe>
                </InfoParagrapheContainer>
            </InfoContainer>
            <Link to={cart[quantity]}><Button>التالي</Button></Link>
        </Container>
    )
}
export default Intro;
