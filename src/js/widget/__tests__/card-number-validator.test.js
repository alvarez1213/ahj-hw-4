import checkCard from "../card-number-validator";

describe("luhnCheck", () => {
  it("should return true with valid credit card number", () => {
    const result = checkCard("4539346306480475");

    expect(result).toBe(true);
  });

  it("should return false with invaid credit card number", () => {
    const result = checkCard("4539346306480474");

    expect(result).toBe(false);
  });

  it("should return false with short number", () => {
    const result = checkCard("45393");

    expect(result).toBe(false);
  });
});
