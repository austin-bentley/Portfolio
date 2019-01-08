import React from 'react';
import styled from 'styled-components';
import Filter from 'bad-words';
import { Loader } from '../../subComponents/loader';
import { ErrorMessage } from '../../subComponents/ErrorMessage';
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
    
const ErrorContainer = InputContainer.extend `
    top: ${(props) => props.submitted? '10%': '46%'};
    left: 36%;
    
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
            inputTitle: {},
            loading: true,
            error: false
        }
    }
    
    componentWillMount() {
        this.getFromBackend();
    }

    handleChange(event) {
        this.setState({message: event.target.value});
    }

    async handleSubmit() {
        if (this.input.value !== '') {
            this.setState({
                submitted: true,
                loading: true,
                error: false
            });
            this.input.value = '';
            await this.postToBackend()
            await this.getFromBackend();
        } else {
            this.setState({ 
                error: { empty: true }
            });
        }

    }

    async postToBackend() {
        try {
            const res = await fetch(`https://pesahwuap7.execute-api.us-east-1.amazonaws.com/DEV/Portfolio_kitsu`, 
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({message: filter.clean(this.state.message)})
            });
            const json = await res.json();
    
            if(res.status === 400) {
                this.setState({ error: json.errorMessage });
            }
        } catch (err) {
            this.setState({ error: err });
        }
    }

    async getFromBackend() {
        try {
            const res = await fetch('https://pesahwuap7.execute-api.us-east-1.amazonaws.com/DEV/Portfolio_kitsu');
            const json = await res.json();
            this.setState({
                entries: json.Items,
                loading: false
            });
        } catch (err) {
            this.setState({ error: err });
        }
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
        const Items = this.formatEntries();
        const { error, loading, submitted } = this.state;
        return (
            <Page onChange={this.handleChange.bind(this)}>
                <InputContainer submitted={submitted}>
                    <Input type="text" placeholder="message" innerRef={comp => this.input = comp}></Input>
                    <Button onClick={this.handleSubmit.bind(this)}>Submit</Button>
                </InputContainer>
                <ErrorContainer submitted={submitted}>
                    { error? <ErrorMessage props={error}/> : null }
                </ErrorContainer>
                <ItemContainer submitted={submitted}>
                    {
                        loading? <Loader /> : Items
                    }
                </ItemContainer>
            </Page>
        );
    }
}