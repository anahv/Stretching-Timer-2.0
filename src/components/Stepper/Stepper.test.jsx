import React from "react"
import Stepper from "./index.jsx"
import {render} from "@testing-library/react"


describe("Stepper", () => {

    const testStepperProps = {
        testId: "testId",
        title: "test title"
    }

    // it("has a test", () => {
    //     const testStepper = render(<Stepper title="test" tessstId="testId"/>).getByTestId
    //     expect(testStepper.testId).toBeDefined
    // })

    it("has a title", () => {
        const { getByTestId } = render(<Stepper {...testStepperProps}/>)
        expect(getByTestId(testStepperProps.testId)).toBeDefined
    })


})

