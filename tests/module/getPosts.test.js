import { describe, it, expect, vi } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import usePosts from "../../src/components/usePosts";

describe("usePosts", () => {
    it("Fetches and returns post json", async () => {
        // All attributes
        const test1 = {
            type: "review",
            book: "test book",
            author: "test author",
            blogger: "test poster",
            date: "2025-07-30",
            content: "test content",
            series: "test series",
            coverImg: "test cover",
            rating: 1.50
        };
        // Only required attributes
        const test2 = {
            author: "test author",
            book: "test book",
            blogger: "test poster",
            content: "test content",
            date: "2025-07-30",
            type: "discussion"
        };

        // Mock fetch to get harcoded data
        globalThis.fetch = vi.fn(async (url) => {
            if (url.endsWith("tests.json")) {
                return {
                    json: async () => [
                        "test-1.json",
                        "test-2.json"
                    ]
                };
            }
            else if (url.endsWith("test-1.json")) {
                // all fields
                return { json: async () => (test1) };
            }
            else if (url.endsWith("test-2.json")) {
                // only required fields
                return { json: async () => (test2) };
            }
            else {
                throw new Error("URL not found");
            }
        });


        const index = "/posts/tests.json"
        const {result} = renderHook(() => usePosts(index));

        await waitFor(() => expect(result.current.posts).toEqual([test1, test2]));
    });



    it("Missing content field", async () => {
        const test = {
            author: "test author",
            book: "test book",
            blogger: "test poster",
            date: "2025-07-30",
            type: "review"
        };

        globalThis.fetch = vi.fn(async (url) => {
            if (url.endsWith("tests.json")) {
                return {
                    json: async () => [
                        "test.json",
                    ]
                };
            }
            else if (url.endsWith("test.json")) {
                // all fields
                return { json: async () => (test) };
            }
            else {
                throw new Error("URL not found");
            }
        });

        const index = "/posts/tests.json";
        const {result} = renderHook(() => usePosts(index));
        await waitFor(() => expect(result.current.error).toBe(true));

    });
});