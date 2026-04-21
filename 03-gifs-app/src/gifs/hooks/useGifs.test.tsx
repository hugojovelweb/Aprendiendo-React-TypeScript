import { describe, expect, test } from "vitest";
import { act, renderHook } from "@testing-library/react";
import { useGifs } from "./useGifs";

describe("useGifs", () => {
  test("should return default values and methods", () => {
    const { result } = renderHook(() => useGifs());

    expect(result.current.gifs).toStrictEqual([]);
    expect(result.current.previousTerms).toStrictEqual([]);
    expect(result.current.handleSearch).toBeDefined();
    expect(result.current.handleTermCliked).toBeDefined();
  });

  test("should return gifs for a given term", async () => {
    // handleSearch("goku");
    const { result } = renderHook(() => useGifs());

    await act(async() => {
        await result.current.handleSearch("goku");  

       // await result.current.handleSearch("goku");
        });
        expect(result.current.gifs.length).toBe(10);
    });

    test('should return a list of gifs when handleTermClicked is called',async () => {
        const { result } = renderHook(() => useGifs());

        await act(async () => {            
            await result.current.handleTermCliked("goku");
        });
        expect(result.current.gifs.length).toBe(10);
    }); 
});
