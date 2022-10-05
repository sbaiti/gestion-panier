import {destructArrayObject} from "utils/functions"

const mockData = [
  { test: "a", name: "aa" },
  { test: "b", name: "ab" },
  { test: "c", name: "ac" },
  { test: "d", name: "ad" }
]

describe("Functions test", () => {

  it("Render list of name", () => {

    expect(destructArrayObject(mockData, "name")).toEqual(["aa", "ab", "ac", "ad"]);
  })

})