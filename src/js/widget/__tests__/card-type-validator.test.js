import getCardType from "../card-type-validator";

describe("getCardType", () => {
  it('should return "visa" with Visa credit card number', () => {
    const result = getCardType("4539346306480475");

    expect(result).toBe("visa");
  });

  it('should return "mastercard" with MasterCard credit card number', () => {
    const result = getCardType("5112471272922508");

    expect(result).toBe("mastercard");
  });

  it('should return "amex" with AMEX credit card number', () => {
    const result = getCardType("341815537355827");

    expect(result).toBe("amex");
  });

  it('should return "discover" with Discover credit card number', () => {
    const result = getCardType("6011444416653172");

    expect(result).toBe("discover");
  });

  it('should return "jcb" with JCB credit card number', () => {
    const result = getCardType("3542642274072408183");

    expect(result).toBe("jcb");
  });

  it('should return "diners" with Diners credit card number', () => {
    const result = getCardType("30018190385969");

    expect(result).toBe("diners");
  });

  it('should return "mir" with Mir credit card number', () => {
    const result = getCardType("2013820000000135");

    expect(result).toBe("mir");
  });

  it('should return "Unknown" with Mir credit card number and wrong len', () => {
    const result = getCardType("201382000000013500000000000");

    expect(result).toBe("Unknown");
  });

  it('should return "Unknown" with unknown credit card number', () => {
    const result = getCardType("1013820000000137");

    expect(result).toBe("Unknown");
  });
});
