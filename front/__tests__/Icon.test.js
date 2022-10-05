import { BellFilled } from "@ant-design/icons/lib/icons"
import { cleanup, render, screen } from "@testing-library/react"
import Icon from "components/atoms/Icon"

afterEach(cleanup)

describe("Icon test", () => {

  it("Render without crash", () => {

    render(<Icon icon={<BellFilled />} />)

    const icon = screen.getByRole("img")

    expect(icon).toBeInTheDocument()
  })

})