import getGIF from "../../helpers/getGIF";

describe("Test API getGif", () => {
  test("Should return 16 as length", async () => {
    const gifs = await getGIF("Goku");
    expect(gifs.length).toBe(16);
  });

  // test("If don't send query, length of array gifs should be 0", async () => {
  // const gifs = await getGIF("");
  // expect(gifs.length).toBe(0);
  // });
});
