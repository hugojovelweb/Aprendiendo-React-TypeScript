import { act, renderHook } from "@testing-library/react";
import { describe, expect, test, vi, beforeEach, afterEach } from "vitest";
import { useGifs } from "./useGifs";
import * as gifActions from "../actions/get-gifs-by-query.action";
import type { Gif } from "../interfaces/gif.interface";

const mockGifs: Gif[] = Array(10)
  .fill(null)
  .map((_, i) => ({
    id: `${i}`,
    title: `Gif ${i}`,
    url: `https://example.com/${i}`,
    width: 200,
    height: 200,
  }));

describe("useGifs", () => {
  beforeEach(() => {
    vi.spyOn(gifActions, "getGifsByQuery").mockResolvedValue(mockGifs);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test("should return default values and methods", () => {
    const { result } = renderHook(() => useGifs());

    expect(result.current.gifs).toStrictEqual([]);
    expect(result.current.previousTerms).toStrictEqual([]);
    expect(result.current.handleSearch).toBeDefined();
    expect(result.current.handleTermCliked).toBeDefined();
  });

  test("should return gifs for a given term", async () => {
    const { result } = renderHook(() => useGifs());

    await act(async () => {
      await result.current.handleSearch("goku");
    });

    expect(result.current.gifs.length).toBe(10);
  });

  test("should return a list of gifs when handleTermClicked is called", async () => {
    const { result } = renderHook(() => useGifs());

    await act(async () => {
      await result.current.handleTermCliked("goku");
    });

    expect(result.current.gifs.length).toBe(10);
  });

  test("should return a list of gifs from cache", async () => {
    const { result } = renderHook(() => useGifs());

    await act(async () => {
      await result.current.handleTermCliked("goku");
    });

    expect(result.current.gifs.length).toBe(10);

    vi.spyOn(gifActions, "getGifsByQuery").mockRejectedValue(
      new Error("This is my custom error"),
    );

    await act(async () => {
      await result.current.handleTermCliked("goku");
    });

    expect(result.current.gifs.length).toBe(10);
  });

  test("should return no more than 8 previous terms", async () => {
    const { result } = renderHook(() => useGifs());

    vi.spyOn(gifActions, "getGifsByQuery").mockResolvedValue([]);

    const searches = [
      "goku1",
      "goku2",
      "goku3",
      "goku4",
      "goku5",
      "goku6",
      "goku7",
      "goku8",
      "goku9",
    ];

    for (const search of searches) {
      await act(async () => {
        await result.current.handleSearch(search);
      });
    }

    expect(result.current.previousTerms.length).toBe(8);
    expect(result.current.previousTerms).toStrictEqual([
      "goku9",
      "goku8",
      "goku7",
      "goku6",
      "goku5",
      "goku4",
      "goku3",
      "goku2",
    ]);
  });
});
