import React from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import styled from 'styled-components';

const Logo1 = require('./images/logoXviridis1.jpg');
const Logo2 = require('./images/logoXviridis2.png');
const Page1 = require('./images/SaveTheFish.png');
const Page2 = require('./images/Nature.png');

const Logo = styled.img `
	width: ${(props)=> props.small? '100%' : '20vw'};
	height: ${(props)=> props.small? '50vh' : '15vh'};
	display: block;
	margin: 0 auto; 
	transform: scale();
	margin-top: ${(props)=> props.small? 'none' : '8.5vw'};

`;

const Layout = styled.img `
	display: block;
	margin: 0 auto;
	width: 25vw;
	height: 60vh;
`;

export default class Design extends React.Component {

	render() {
		return (
			<div>
				<Grid>
					<Row>
						<h1>Logo: </h1>
						<Col lg={6} md={6} sm={12} xs={12}>
							<Logo src={Logo1} small></Logo>
						</Col>
						<Col lg={6} md={6} sm={12} xs={12}>
							<Logo src={Logo2}></Logo>
						</Col>
					</Row>
					<Row>
						<h1>Wordpress layouts: </h1>
						<br/>
						<Col lg={6} md={6} sm={12} xs={12}>
							<Layout src={Page1}></Layout>
						</Col>
						<Col lg={6} md={6} sm={12} xs={12}>
							<Layout src={Page2}></Layout>
						</Col>
					</Row>
				</Grid>
				<br/>
				<br/>
				<br/>
			</div>
		);
	}  
}