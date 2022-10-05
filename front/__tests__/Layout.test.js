import { render, screen, waitFor, fireEvent } from "@testing-library/react"
import Layout from "components/Templates/layout/Layout"

describe("Layout test", () => {

  it("Render without crash", () => {

    const { container } = render(<Layout />)

    expect(container).not.toBeNull()

  })

  it("renders without error", () => {

    const { container } = render(
      <Layout />)

    expect(container).not.toBeNull()
  })

  it("show loading first render", () => {

    render(<Layout />)

    const loading = screen.getByText("Loading gestion panier ...")

    expect(loading).toBeInTheDocument()
  })

  it("show full Header", async () => {

    render(<Layout />)

    await waitFor(() => {
      expect(screen.queryByText("Loading gestion panier ...")).toBeInTheDocument()
    })

  })

})