import { add } from "../add.js";

describe("Name of the group", () => {
  test("1 + 2 = 3", () => {
    // 准备数据 -> given
    const a = 1;
    const b = 2;

    // 触发测试动作 -> when
    const result = add(a, b);

    // 验证 -> then
    expect(result).toBe(3);
  });

  test("判断两个对象是否相等", () => {
    const objA = {
      name: "objA",
    };

    const objB = {
      name: "objA",
    };

    expect(objA).toEqual(objB);
  });

  test("string contain str", () => {
    const str = "string";
    expect(str).toContain("str");
    expect(str).not.toContain("hello");
  });

  // it 等价于 test
  it("string contain str", () => {
    const str = "string";
    expect(str).toContain("str");
    expect(str).not.toContain("hello");
  });
});
