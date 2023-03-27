import PropTypes from 'prop-types';
import { StyledButton } from './ContactForm';
import styled from "styled-components";

const StyledNumber = styled.span`
margin-right: 5px;
margin-left: 5px;
`
const StyledName = styled.span`
font-weight:bold;
`

export const ContactList = ({ contacts, filterValue, deleteContact }) => {
    return (
        <ul>
            {contacts.filter(contact => contact.name.toLowerCase().includes(filterValue.toLowerCase()))
                .map(contact => (
                    <li key={contact.id}>
                        <StyledName>{contact.name}: </StyledName>
                        <StyledNumber>{contact.number}</StyledNumber>
                        <StyledButton
                            id={contact.id} onClick={deleteContact}>
                            Delete
                        </StyledButton>
                    </li>
                ))}
        </ul>
    )
};

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    filterValue: PropTypes.string,
    deleteContact: PropTypes.func,
}
