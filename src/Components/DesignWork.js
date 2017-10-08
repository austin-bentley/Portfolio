import React from 'react';
import {Bootstrap, Grid, Row, Col} from 'react-bootstrap';
import styled from 'styled-components';

const Logo = styled.img `
	width: ${(props)=> props.small === 0? '100%' : '20vw'};
	height: ${(props)=> props.small === 0? '50vh' : '15vh'};
	display: block;
	margin: 0 auto; 
	transform: scale();
	margin-top: ${(props)=> props.small === 0? 'none' : '8.5vw'};

`;

const Layout = styled.img `
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
							<Logo src="./app/Components/images/LogoXviridis1.jpg" small={0}></Logo>
						</Col>
						<Col lg={6} md={6} sm={12} xs={12}>
							<Logo src="./app/Components/images/LogoXviridis2.png"></Logo>
						</Col>
					</Row>
					<Row>
						<h1>Wordpress layouts: </h1>
						<br/>
						<Col lg={6} md={6} sm={12} xs={12}>
							<Layout src="./app/Components/images/Nature.png"></Layout>
						</Col>
						<Col lg={6} md={6} sm={12} xs={12}>
							<Layout src="./app/Components/images/SaveTheFish.png"></Layout>
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