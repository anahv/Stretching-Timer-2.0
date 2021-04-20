import React from "react"
import Button from "./index.jsx"
import {fireEvent, render} from "@testing-library/react"

describe("Button", () => {

    const testButtonProps = {
        title: "Test Title",
        icon: "play",
        testId: "button", 
        color: "green", 
        onClick: jest.fn(),
        id: "123"
    }

    it("shows a button", () => {
        const {getByRole} = render(<Button {...testButtonProps}/>)
        expect(getByRole("button")).toBeDefined
    }),

    it("has a title", () => {
        //const {getByText} = render(<Button {...testButtonProps}/>)
        // expect(getByText(testButtonProps.title)).toBeDefined
        const {getByRole} = render(<Button {...testButtonProps}/>)
        expect(getByRole("button").innerHTML).toContain(testButtonProps.title) //toBe would also return the icon
    }),

    it("has an icon", () => {
        const {getByTestId} = render(<Button {...testButtonProps}/>)
        expect(getByTestId(testButtonProps.testId)).toBeDefined
    }), 

    it("has a color", () => {
        const {getByRole} = render(<Button {...testButtonProps}/>)
        expect(getByRole("button").style.background).toBe(testButtonProps.color)
    }), 

    it("handles an onClick function", () => {
        const onClick = jest.fn()
        const {getByRole} = render(<Button {...testButtonProps} onClick={onClick}/>)
        expect(onClick).not.toBeCalled()
        fireEvent.click(getByRole("button"))
        expect(onClick).toBeCalled()
    })
})