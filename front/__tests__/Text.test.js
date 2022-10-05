import { cleanup, render, screen } from "@testing-library/react"
import Text from "components/atoms/Text"

afterEach(cleanup)

describe("Text test", () => {

  it("Render without crash", () => {

    render(<Text text="sbaiti" />)

    const text = screen.getByText("sbaiti")

    expect(text).toBeInTheDocument()
  })

})