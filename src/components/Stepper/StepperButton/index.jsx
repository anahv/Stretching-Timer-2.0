import React from "react"
import styled from "styled-components"
import Button from "../../Button"

const StepperButton = styled(Button)`
  width: 35px !important;
  height: 35px !important;
  font-size: 11px;
  height: 35px;
  border-radius: 100px;
  text-align: center;
  margin: 5px 12px 0px 12px;
  background-color: #778ca3;
  color: ${({ theme }) => theme.colors.grey};
  border: none;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  i {
      margin-left: 3px;
  }
  :hover {
  transform: none;
  box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.2);
  transition:  all 0.3s ease 0s;
  }
`

export default StepperButton