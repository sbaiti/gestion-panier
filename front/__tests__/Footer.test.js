import { cleanup, render, screen } from "@testing-library/react"
import Footer from "components/Pages/footer/FooterCmp"

afterEach(cleanup)

describe("Footer test", () => {

  it("Render without crash", () => {

    render(<Footer />)

    const footerText = screen.getByText("© Droit d'auteur | Tous les droits sont réservés")

    expect(footerText).toBeInTheDocument()
  })

})