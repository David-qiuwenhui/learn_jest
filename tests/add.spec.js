const add = require("../add.js");

test("1 + 2 = 3", () => {
  // 准备数据 -> given
  const a = 1;
  const b = 2;

  // 触发测试动作 -> when
  const result = add(a, b);

  // 验证 -> then
  expect(result).toBe(3);
});
