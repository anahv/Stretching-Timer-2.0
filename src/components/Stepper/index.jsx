import React from "react"
import ButtonsRow from "../ButtonsRow"
import StepperButton from "./StepperButton"
import StyledStepperTitle from "./StepperTitle"
import StyledStepperContent from "./StepperContent"
import styled from "styled-components"

function Stepper({className, title, children, onPlus, onMinus, testId}) {
    return (
        <div className={className}>
            <StyledStepperTitle data-testid={testId}>{title}</StyledStepperTitle>
            <StyledStepperContent>{children}</StyledStepperContent>
            <ButtonsRow>
                <StepperButton onClick={onMinus} icon="minus"/>
                <StepperButton onClick={onPlus} icon="plus" />
            </ButtonsRow>
        </div>
    )
}

const StyledStepper = styled(Stepper)`
    display: flex;
    flex-direction: column;
`

export default StyledStepper



