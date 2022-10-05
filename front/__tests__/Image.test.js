import { cleanup, render } from "@testing-library/react"
import ImageCmp from "components/atoms/ImageCmp"

afterEach(cleanup)

const mockData = {
  width: "100px",
  height: "100px",
  alt: "test",
  src: "http://localhost:5000/images/kanap03.jpeg"
}

describe("ButtonCmp test", () => {

  it("Render without crash", () => {

    const { container } = render(<ImageCmp {...mockData} />)
    expect(container).not.toBeNull()
  })

})