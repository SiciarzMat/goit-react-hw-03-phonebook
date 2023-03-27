import styled from "styled-components";
import PropTypes from 'prop-types';

const StyledTitle = styled.h2`
margin-left: 10px;
`

export const Section = ({ title, children }) => (
    <section>
        <StyledTitle>{title}</StyledTitle>
        {children}
    </section>
)

Section.propTypes = {
    title: PropTypes.string.isRequired
}