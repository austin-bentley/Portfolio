import React from 'react';
import styled from 'styled-components';
import { size } from '../../DeviceSizing';

const Background = require('../images/RSILogoLarge.png');

const HomeImg = styled.div`
	background-image: url(${(props)=> props.Background});
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
	height: 50vh;
    position: relative;
`; 

const Container = styled.div `
    padding-top: 20px;
    margin: 0 auto;
`; 

const P = styled.p`
    font-size: 16px;
`; 

const Subtitle = styled.h1`
    font-size: 24px;
    font-weight: 600;
`; 

export const RSI = () => {
    return (
        <div>
            <HomeImg Background={Background}/>
            <Container>
                <P>
                    Rural Sourcing is a company that contracts onshore devs at the same price as offshore(probably could have guessed by the name).
                    There are many different teams working on many different clients.
                    I work for a large company that leads the way in helping users find the perfect car online.
                </P>
                <P>
                    <Subtitle>My Team</Subtitle>
                    In more detail my team builds innovative new technology/integrates existing 3rd party technology onto our site.
                    Recently we built an embedded implementation of a chat bot that can help answer your questions about the car you are viewing, dealership hours, and even connect you to a sales person without any change to the interface.
                </P>
            </Container>
        </div>
    ); 
}