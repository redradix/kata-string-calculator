const { Add } = require("./index.js");

describe("Add", () => {
  it("returns 0 when empty argument is passed", () => {
    const result = Add("");

    expect(result).toBe(0);
  });
});
