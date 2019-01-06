import React from 'react';
import { keyframes } from 'styled-components';
import styled from 'styled-components';

const animate = keyframes `
    0% {    
        top: 6px;
        height: 51px;
    }
    50%, 100% {
        top: 19px;
        height: 26px;
    }
`;

const Container = styled.div `
    left: 40%;
    display: inline-block;
    position: relative;
    width: 64px;
    height: 64px;
    animation: ${animate};
`;

const allDivs = styled.div `
    display: inline-block;
    position: absolute;
    left: 6px;
    width: 13px;
    background: #fff;
    animation: ${animate} 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
`;

const Div1 = allDivs.extend `
    left: 6px;
    animation-delay: -0.24s;
`;

const Div2 = allDivs.extend `
    left: 26px;
    animation-delay: -0.12s;
`;

const Div3 = allDivs.extend `
    left: 45px;
    animation-delay: 0;
`;

export const Loader = () => {
    return (
        <Container>
            <Div1>
            </Div1>
            <Div2>
            </Div2>
            <Div3>
            </Div3>
        </Container>
    );
}