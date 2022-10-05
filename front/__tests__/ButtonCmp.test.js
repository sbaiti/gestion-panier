import { cleanup, render, screen } from "@testing-library/react"
import Button from "components/atoms/Button"

afterEach(cleanup)

describe("ButtonCmp test", () => {

  it("Render without crash", () => {

    render(<Button text="test" type="primary" onClick={() => null} />)

    const btn = screen.getByText("test")

    expect(btn).toBeInTheDocument()
  })

})