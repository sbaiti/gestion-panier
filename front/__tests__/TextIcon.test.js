import { PhoneFilled } from "@ant-design/icons/lib/icons"
import { cleanup, render, screen } from "@testing-library/react"
import TextIcon from "components/molecules/TextIcon"

afterEach(cleanup)

describe("TextIcon test", () => {

  it("Render without crash", () => {

    render(<TextIcon icon={<PhoneFilled className="phone" />} text="01 01 01 01 01" />)

    const phone = screen.getByText("01 01 01 01 01")

    expect(phone).toBeInTheDocument()
  })

})