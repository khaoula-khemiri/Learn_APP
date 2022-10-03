/*https://www.w3schools.com/w3css/w3css_progressbar.asp*/

import React from 'react';
import styled from 'styled-components';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux"
import { deleteIncorrect } from '../redux/cartRedux';
import { useDispatch } from "react-redux";


const Container = styled.div`
margin:5px;
white-space: nowrap;
`;
const ProgContainer = styled.div`
width:80%;
display: inline-block;
`;
const ProgressNumber = styled.div`
display: inline-block;
margin-left: 3px;
font-size: 13px;
`;


const ProgrBar = () => {
    const quantity = useSelector(state => state.cart.quantity)
    const cart = useSelector(state => state.cart.root);
    const numberQuestion = quantity + 1;
    const now = numberQuestion * 12.5;
    const dispatch = useDispatch();

    console.log(cart)

    const handelverification = () => {
        dispatch(deleteIncorrect())
    }



    return (
        <Container>
            <Link to="/"><button type="button" className=" btn btn-xs btn-close"
                aria-label="Close" onClick={() => handelverification()}></button>
            </Link>
            <ProgContainer>
                <ProgressBar className="right" variant="success" now={now} />
            </ProgContainer>
            <ProgressNumber>{numberQuestion}/8</ProgressNumber>
        </Container>
    )
}

export default ProgrBar;
/* <ProgressBar className="right" variant="success" now={30} />*/