import React from "react"
import PropTypes from 'prop-types';
import styled from "styled-components"

//className is now passed by the Control Button styled component
function Button({title, icon, testId, onClick, className, id}) {
  return (
    <button id={id} className={className} onClick={onClick}>{title} <i data-testid={testId} className={`fa fa-${icon}`}/></button>
  )
}

const StyledButton = styled(Button)`
  background: ${ ({color}) => color };
  border: none;
  border-radius: 45px !important;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  font-size: 11px;
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  :hover {
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-7px);
    transition:  all 0.3s ease 0s;
  }

`

// Add mandatory fields here:
Button.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
}

export default StyledButton
