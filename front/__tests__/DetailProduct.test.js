import { cleanup, render, screen } from "@testing-library/react"
import DetailProduct from "components/Pages/products/DetailProduct"

afterEach(cleanup)

const mockData = {
  "colors": ["Blue", "White", "Black"],
  "_id": "107fb5b75607497b96722bda5b504926",
  "name": "Kanap Sinopé",
  "price": 1849,
  "imageUrl": "kanap01.jpeg",
  "description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "altTxt": "Photo d'un canapé bleu, deux places"
}

describe("Product test", () => {

  it("Render without crash", () => {

    const { container } = render(<DetailProduct product={mockData} />)

    expect(container).not.toBeNull()

  })

  it("renders without error", () => {

    const { container } = render(<DetailProduct product={mockData} />)

    expect(container).not.toBeNull()
  })

  it("show data produit", () => {

    render(<DetailProduct product={mockData} />)

    expect(screen.getByText("Choisir une couleur :")).toBeInTheDocument()
    expect(screen.getByText("Nombre d'article(s) (1-100) :")).toBeInTheDocument()
  })

})