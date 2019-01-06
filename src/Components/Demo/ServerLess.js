import React from 'react';
import styled from 'styled-components';
import Filter from 'bad-words';
const filter = new Filter();

const Input = styled.input `
    width: 400px;
    background-color: #333333;
    border: 1px solid #333333;
    border-bottom: 4px solid white;
    font-size: 32px;
    transition : border 500ms ease-out;
    color: white;

    ::placeholder { 
        color: grey; 
        font-size: 28px; 
    }
    
    :focus {        
        outline: 0;
        border-bottom: 4px solid #597fff;
    }

    @media (max-width : 992px) {
        width: 200px;
    }
`;
    
const Page = styled.div `
    position: relative;
    background-color: #333333;
    height: 100vh;
`;
    
const Button = styled.button `
    background-color: #597fff;
    border-radius: 5px;
    color: white;
    margin-left: 10px;
    font-size: 32px;
    border: 1px solid #333333;
`;

const InputContainer = styled.div `
    position: absolute;
    top: ${(props) => props.submitted? '10%': '40%'};
    left: 50%;
    transform: translate(-50%, -50%);
    transition : 500ms ease-out;
    
    @media (max-width : 992px) {
        width: 324px;
    }
    `;
    
    const ItemContainer = InputContainer.extend `
    top: ${(props) => props.submitted? '50%': '70%'};
    
    @media (max-width : 992px) {
        width: 350px;
    }
`;

const Container = styled.div `
    display: flex;
`;

const Items = styled.p `
    font-size: 16px;
    color: white;
    margin: 5px 10px 0px 0px;
`;

const Date = Items.extend `
    border-right: 1px solid white;
    padding-right: 5px;
`;

export default class ServerLess extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            message: '',
            entries: [],
            submitted: false,
            inputTitle: {}
        }
    }
    
    componentWillMount() {
        this.getFromBackend();
    }

    handleChange(event) {
        this.setState({message: event.target.value});
    }

    handleSubmit() {
        this.setState({submitted: true});
        this.inputTitle.value = '';
        this.postToBackend()
        .then(() => {
            this.getFromBackend();
        });

    }

    postToBackend() {
        return fetch(`https://pesahwuap7.execute-api.us-east-1.amazonaws.com/DEV/Portfolio_kitsu`, 
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({message: filter.clean(this.state.message)})
        })
        .then((res) => {
            return res.json();
        });
    }

    getFromBackend() {
        fetch('https://pesahwuap7.execute-api.us-east-1.amazonaws.com/DEV/Portfolio_kitsu')
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            this.setState({entries: res.Items});
        });
    }

    formatEntries() {
        return this.state.entries.map((key) => {
            return (
                <Container key={key.date}>
                    <Date>{key.date}</Date>
                    <Items>{key.message}</Items>
                </Container>
            )
        });
    };

    render() {
        let Items = this.formatEntries();
        return (
            <Page onChange={this.handleChange.bind(this)}>
                <InputContainer submitted={this.state.submitted}>
                    <Input type="text" placeholder="message" ref={el => this.inputTitle = el}></Input>
                    <Button onClick={this.handleSubmit.bind(this)}>Submit</Button>
                </InputContainer>
                <ItemContainer submitted={this.state.submitted}>
                    { Items }
                </ItemContainer>
            </Page>
        );
    }
}