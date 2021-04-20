import React from "react"
import styled from "styled-components"

function StepperContent({className, children}) {
    return (
    <h2 className={className}>
        {children}
    </h2>
    )
}

// const StepperContent = ({className, children}) => <h2 className={className}>{children}</h2>

const StyledStepperContent = styled(StepperContent)`
  text-align: center;
  letter-spacing: 1px;
  font-size: 2em;
  color: #333;
`

export default StyledStepperContent

