import PropTypes from 'prop-types';
import React from "react";
import styled from "styled-components";

const StyledLabel = styled.label`
display: flex;
flex-direction: column;
margin-left: 10px;
`

const StyledInput = styled.input`
margin-top: 5px;
width: 200px;
`


export const Filter = ({ addFilterValue }) => {
    return (
        <>
            <StyledLabel>Find contacts by name
                <StyledInput type="text"
                    onChange={addFilterValue}></StyledInput>
            </StyledLabel>
        </>
    )
}

Filter.propTypes = {
    addFilterValue: PropTypes.func,
}