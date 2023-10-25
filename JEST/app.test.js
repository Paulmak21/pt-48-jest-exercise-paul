const findUniq = require('./app'); // Import the findUniq function

test('findUniq should return the unique number in the array', () => {
  expect(findUniq([1, 1, 1, 2, 1, 1])).toBe(2);
  expect(findUniq([24, 24, 24, 24, 20])).toBe(20);
  expect(findUniq([69, 69, 61, 69, 69])).toBe(61);
  expect(findUniq([21, 21, 21, 21, 211])).toBe(211);
  expect(findUniq([270, 2709, 270, 270, 270])).toBe(2709);
  expect(findUniq([666, 666, 0, 666, 666])).toBe(0);
});
