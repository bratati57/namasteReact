import Contact from "../components/Contact";
import {render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
describe("Contact us page test case", ()=>{
    test("should load contact page", ()=>{
    render(<Contact/>)
    
const heading=screen.getAllByRole("textbox")
expect(heading).toBeInTheDocument
})
})
