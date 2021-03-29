import React from "react"
import Button from "./index.jsx"
import {fireEvent, render} from "@testing-library/react"

describe("Button", () => {
    it("Shows a button", () => {
        const {getByRole} = render(<Button/>)
        expect(getByRole("button")).toBeDefined
    })
})