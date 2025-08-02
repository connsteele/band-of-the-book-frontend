import { describe, it, expect, vi } from "vitest";
import getPosts from "../../src/modules/getPosts";

describe("getPosts", () => {
    it("Fetches and returns post json", async () => {
        // All attributes
        const test1 = {
            title: "test review",
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
            title: "test review"
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
        const posts = await getPosts(index);
        expect(posts).toEqual([test1, test2]);
    });



    it("Missing content field", async () => {
        const test = {
            author: "test author",
            book: "test book",
            blogger: "test poster",
            date: "2025-07-30",
            title: "test review"
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
        await expect(getPosts(index)).rejects.toThrowError(`Required post attribute "content" is missing!`);

    });
});