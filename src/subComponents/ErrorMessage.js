import React from 'react';
import styled from 'styled-components';

const Error = styled.p `
    color: #ff5e5e;
`;

export const ErrorMessage = (props) => {
    return (
        <div>
            {
                props.props.empty? <Error>Please enter a message</Error> : <Error>Something went wrong!</Error>
            }
        </div>
    );
}