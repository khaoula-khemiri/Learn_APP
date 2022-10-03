import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { mobile500, mobile800 } from '../responsive';

const Container = styled.div`
width: 25%;
height: 500px;
margin: auto;
margin-top: 15px;
background-color: #5AE4A8;
border-radius:15px;
text-align: center;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
${mobile800({width: "40%"})};
${mobile500({width: "70%"})}
`;

const Title = styled.div`
color: white;
font-size: 24px;
font-weight: 600;
text-align: center;
padding-top:5px;
${mobile800({fontsize: "20px"})}
`;

const InfoContainer = styled.div`
background-color: white;
margin 15px;
border-radius:15px;
padding: 5px;
height: 70%;
position: relative;

`;
const Image = styled.img`
max-width: 70%;
height: auto;
display: block;
margin-left: auto;
margin-right: auto;

`;

const InfoTitle = styled.div`
background-color:  #5AE4A8;
width: 60%;
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
background-color: #b5e1cef0;
font-size: 20px;
color:  #1d5a3f;
width: 50%;
padding: 5px 10px;
border-radius: 15px;
cursor: pointer;
border: none;
position: absolute;
bottom: -20px;
left:25%;
&:hover{
    background-color: #c6ded4f0;
};
`;

const Home = () => {
    return (
        <Container>
            <Title> Python تعلم</Title>
            <InfoContainer>
                <Image src="/img/homeImage.jpg"></Image>
                <InfoTitle>الدرس الأول  </InfoTitle>
                <InfoParagrapheContainer>
                    <InfoParagrapheTitle>les variables - المتغيرات</InfoParagrapheTitle>
                    <InfoParagraphe>
                في الدرس هذا بش نتعلمو كفاه نكتبو  
                <br/>
                    les variables-المتغيرات 
                    </InfoParagraphe>
                </InfoParagrapheContainer>
                <Link to="/Intro"><Button>هيا نبدأ </Button></Link>
            </InfoContainer>
            
        </Container>

    );
}

export default Home;