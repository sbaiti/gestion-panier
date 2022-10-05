import { cleanup, render, screen } from "@testing-library/react"
import ListText from "components/molecules/ListText"

afterEach(cleanup)

describe("ListText test", () => {

  it("Render without crash", () => {

    render(<ListText list={[
      { className: "sub__title__products__css", text: "Description" },
      { className: "detail__products__css", text: "test" }
    ]} />)

    const test = screen.getByText("test")
    const Description = screen.getByText("test")

    expect(Description).toBeInTheDocument()
    expect(test).toBeInTheDocument()
  })

})