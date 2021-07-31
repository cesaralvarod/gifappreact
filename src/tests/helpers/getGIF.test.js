import getGIF from "../../helpers/getGIF";

describe("Testing in getGIF.test.js", () => {
  test("Should return 16 elements", async () => {
    const gifs = await getGIF("Breaking Bad");

    jest.setTimeout(5000);

    expect(gifs.length).toBe(16);
  });
});
