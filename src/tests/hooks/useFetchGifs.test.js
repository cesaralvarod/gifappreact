import React from "react";
import useFetchGif from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe("Testing in useFetchGifs.js", () => {
  const query = "Breaking bad";

  test("Hook useFetchGif should return init state", async () => {
    const res = renderHook(() => useFetchGif(query));

    const { result, waitForNextUpdate } = res;

    const { data, loading } = result.current;

    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test("Hook useFetchGif should return a image array", async () => {
    const res = renderHook(() => useFetchGif(query));

    const { result, waitForNextUpdate } = res;

    await waitForNextUpdate();

    const { data, loading } = result.current;

    expect(data.length).toBe(16);
    expect(loading).toBe(false);
  });
});
