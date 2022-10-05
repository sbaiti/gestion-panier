// jest.setup.js
import "@testing-library/jest-dom/extend-expect"
jest.mock("next/image", () => ({
  __esModule: true,
  default: () => {
    return "Next image stub" // whatever
  },
}))
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})