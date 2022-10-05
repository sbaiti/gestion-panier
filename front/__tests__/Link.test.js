import { cleanup, render, screen } from "@testing-library/react"
import Link from "components/atoms/Link"

afterEach(cleanup)

describe("Link test", () => {

  it("Render without crash", () => {

    render(<Link href="/test" text="click me!" />)

    const link = screen.getByText("click me!")

    expect(link).toBeInTheDocument()
  })

  it("Make the right href", () => {

    render(<Link href="/test" text="click me!" />)

    expect(screen.getByText("click me!").closest("a")).toHaveAttribute("href", "/test")
  })

})