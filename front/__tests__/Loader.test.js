import { cleanup, render, screen } from "@testing-library/react"
import Loader from "components/atoms/Loader"

afterEach(cleanup)

describe("Loader test", () => {

  it("Render without crash", () => {

    render(<Loader />)

    const loading = screen.getByText("Loading...")

    expect(loading).toBeInTheDocument()
  })

})