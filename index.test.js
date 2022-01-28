const { add } = require("./index.js");

describe("add", () => {
  it("returns 0 when empty argument is passed", () => {
    const result = add("");
    expect(result).toBe(0);
  });
  it("returns '1' when single '1' argument is passed", () => {
    const result = add("1");
    expect(result).toBe(1);
  });
});
