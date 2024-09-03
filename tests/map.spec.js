import { map } from "../map.js";

describe("callback function", () => {
  it("map arr: [1, 2, 3] calls", () => {
    const mockFn = jest.fn((x) => x * 2);
    const arr = [1, 2, 3];
    map(arr, mockFn);
    expect(mockFn.mock.calls.length).toBe(3);
  });

  it("map arr: [1, 2, 3]  result", () => {
    const mockFn = jest.fn((x) => x * 2);
    const arr = [1, 2, 3];
    map(arr, mockFn);
    expect(mockFn.mock.results[0].value).toBe(2);
    expect(mockFn.mock.results[0].value).toBe(4);
    expect(mockFn.mock.results[0].value).toBe(6);
  });
});
