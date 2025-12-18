import { describe, expect, test } from "vitest";
import { renderHook } from "@testing-library/react";
import { useGif } from "./useGif";

describe('useGif', () => {

    test('Gifs array is empty by default', () => {
        const { result } = renderHook(() => useGif());
        const gifs = result.current.gifs;

        expect(gifs).toBeDefined();
    });

    // test('Handle search returns gifs', () => {
    //     const { result } = renderHook(() => useGif());

    //     act(() => {
    //         result.current.handleSearch("cats");
    //     });
 
    //     expect(result.current.gifs.length).toBeGreaterThan(0);
    // });
})