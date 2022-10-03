import React from 'react';
import styled from 'styled-components';
import ProgrBar from '../components/ProgressBar';
import { Link } from 'react-router-dom';
import { mobile500, mobile800 } from '../responsive';

const Container = styled.div`
width: 25%;
height: 500px;
margin: auto;
margin-top: 15px;
padding:5px;
background-color:rgb(220, 216, 216);
border-radius:15px;
text-align: center;
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
background-color:rgb(255, 196, 0);
width: 40%;
padding: 5px 10px;
border-radius: 15px;
margin: auto;
color: white;
position: absolute; 
left: 50%; 
transform: translate(-50%, -50%);
`;

const InfoParagrapheContainer = styled.div`
margin-top: 30px;
`;
const InfoParagrapheTitle = styled.div`
text-align: center;
font-weight: 800;
margin:5px;
`;
const InfoParagraphe = styled.div`
text-align: center;
color: grey;`;

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
};
`;

const Conclusion = () => {
    return (
        <Container>
          <ProgrBar/>
          <InfoContainer>
          <InfoTitle>خلاصة  </InfoTitle>
                <InfoParagrapheContainer>
                    <InfoParagrapheTitle>أحسنت</InfoParagrapheTitle>
                    <InfoParagraphe>
                        يعطيك الصحة كملت الدرس لول المتغيرات وعرفت كفاه تكتبهم
                        <hr/>
                        مزالو برشا حجات بش نتعلموهم مع بعضنا نتقابلو مرة جاية
                    </InfoParagraphe>
                </InfoParagrapheContainer>
          </InfoContainer>
          <Link to="/Outro"><Button>التالي</Button></Link>
        </Container>
    )
}
export default Conclusion;