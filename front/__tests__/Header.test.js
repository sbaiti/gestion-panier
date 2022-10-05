import { cleanup, render } from "@testing-library/react"
import Header from "components/Pages/header/HeaderCmp"

afterEach(cleanup)

describe("Header test", () => {

  it("Render without crash", () => {

    const { container } = render(<Header />)

    expect(container).not.toBeNull()

  })

  it("renders without error", () => {

    const { container } = render(<Header />)

    expect(container).not.toBeNull()
  })

})