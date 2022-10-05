import { BellFilled } from "@ant-design/icons/lib/icons"
import { cleanup, render, screen } from "@testing-library/react"
import Icon from "components/atoms/Icon"
import Navigation from "components/organisms/Navigation"

afterEach(cleanup)

describe("Navigation test", () => {

  it("Render without crash", () => {

    const itemsNavigation = [<Icon icon={<BellFilled />} key="icon" />, <h1 key="test">test</h1>]

    render(<Navigation itemsNavigation={itemsNavigation} />)

    const phone = screen.getByTestId("icon")
    const heading = screen.getByRole("heading", {
      name: /test/i,
    })

    expect(phone).toBeInTheDocument()
    expect(heading).toBeInTheDocument()

  })

  it("render Null if itemsNavigation empty", () => {

    const { container } = render(<Navigation itemsNavigation={[]} />)

    expect(container.firstChild).toBeEmptyDOMElement()

  })

})