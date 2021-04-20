import React from "react"
import styled from "styled-components"

// function StepperTitle({className, testId, title}) {
//     return (
//         <p className={className} data-testid={testId}>{title}</p>
//     )
// }

// const StepperTitle = ({className, testId, children}) => <p className={className} data-testid={testId}>{children}</p>

const StyledStepperTitle = styled.p`
font-family: 'Roboto', sans-serif;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #333;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 8px;
`

export default StyledStepperTitle