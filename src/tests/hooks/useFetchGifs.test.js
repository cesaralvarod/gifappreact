import useFetchGif from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe("Test custom hook useFetchGifs", () => {
  test("Should return inicial state", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGif("goku"));
    const { data, loading } = result.current;
    await waitForNextUpdate();
    expect(data).toEqual([]);
    expect(loading).toBeTruthy();
  });

  test("Should return images array and loading = false", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGif("goku"));
    await waitForNextUpdate();
    const { data, loading } = result.current;
    expect(data.length).toBe(16);
    expect(loading).toBeFalsy();
  });
});
