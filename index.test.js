import {capitalize, calc, caesarCipher, analyzeArray} from "./index.js"

test("capitalize", () => {
  expect(capitalize("string")).toBe("String")
})

test("calc.add", () => {
  expect(calc.add(2, 2)).toBe(4)
})

test("calc.substract", () => {
  expect(calc.substract(5, 2)).toBe(3)
})

test("calc.multiply", () => {
  expect(calc.multiply(6, 3)).toBe(18)
})

test("calc.divide", () => {
  expect(calc.divide(100, 2)).toBe(50)
})

test("caesarCipherHappyPath", () => {
  expect(caesarCipher("abc", 3)).toBe("def")
})

test("caesarCipherWrap", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc")
})

test("caesarCipherNonAlpha", () => {
  expect(caesarCipher("I am", 3)).toBe("L dp")
})

test("caesarCipherNonAlpha", () => {
  expect(caesarCipher("HeLLo, World!", 3)).toBe("KhOOr, Zruog!")
})

test("analyzeArrayAverage", () => {
  const result = analyzeArray([1,2,3]);
  expect(result.average).toBe(2);
})

test("analyzeArrayAverage2", () => {
  const result = analyzeArray([5,10,21]);
  expect(result.average).toBe(12);
})

test("analyzeArrayMax", () => {
  const result = analyzeArray([5,10,21]);
  expect(result.max).toBe(21);
})

test("analyzeArrayMin", () => {
  const result = analyzeArray([5,10,21]);
  expect(result.min).toBe(5);
})

test("analyzeArrayLength", () => {
  const result = analyzeArray([5,10,21]);
  expect(result.length).toBe(3);
})



