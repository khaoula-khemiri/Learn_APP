import React from "react";
import { useRef,useEffect } from "react";
import styled from 'styled-components';
import { Modal } from "react-bootstrap";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {useSelector} from "react-redux";

const Container = styled.div`
`;

const ModalContainer = styled.div`
`;
const InfoParagraphe = styled.div`
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

const PopUp = (props) => {

    const quantity = useSelector(state=>state.cart.quantity)   
    const cart = useSelector(state=>state.cart.root) 
    
    console.log(cart[quantity])
  
    return (
        <Container>
            <ModalContainer>
                <Modal show={props.showvalue}  centered size="sm">
                    <Modal.Header closeButton>
                        {props.ansewVerified ? 
                            <Modal.Title>أحسنت صنعا</Modal.Title>
                            :<Modal.Title> خطأ، أعد المحاولة لاحقا</Modal.Title>
                        }
                    </Modal.Header>

                    <Modal.Body>
                    {props.ansewVerified ? 
                        <Image src="/img/happyRobot.jpg"></Image>
                        :<Image src="/img/sadRobot.jpg"></Image>
                    }
                    </Modal.Body>

                    <Modal.Footer>
                        <Link to={cart[quantity]}>
                            <Button variant="primary" onClick={()=>props.setShow(false)}>
                                التالي
                            </Button>
                        </Link>
                    </Modal.Footer>
                </Modal>
            </ModalContainer>
        </Container>)
}

export default PopUp;