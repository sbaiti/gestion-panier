import { cleanup, render, screen } from "@testing-library/react"
import LoadingPanier from "components/atoms/LoadingPanier"

afterEach(cleanup)

describe("LoadingPanier test", () => {

  it("Render without crash", () => {

    render(<LoadingPanier />)

    const text = screen.getByText("Loading gestion panier ...")

    expect(text).toBeInTheDocument()
  })

})