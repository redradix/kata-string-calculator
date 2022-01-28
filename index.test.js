const { add } = require("./index.js");

describe("add", () => {
  it("returns 0 when empty argument is passed", () => {
    const result = add("");

    expect(result).toBe(0);
  });
});
