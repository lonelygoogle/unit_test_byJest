import { generateConfig, generateAnotherConfig } from "./demo";

// test('测试generateConfig', () => {
//     expect(generateConfig()).toMatchSnapshot({
//         time: expect.any(Date)
//     })
// })

// test('测试generateAnotherConfig', () => {
//     expect(generateAnotherConfig()).toMatchSnapshot({
//         time: expect.any(Date)
//     })
// })

test("测试generateAnotherConfig", () => {
  expect(generateAnotherConfig()).toMatchInlineSnapshot(
    {
      time: expect.any(Date)
    },
    `
    Object {
      "port": 8080,
      "server": "http://localhost",
      "time": Any<Date>,
    }
  `
  );
});

// test('测试generateConfig', () => {
//     expect(generateConfig()).toMatchSnapshot({
//         time: expect.any(Date)
//     })
// })