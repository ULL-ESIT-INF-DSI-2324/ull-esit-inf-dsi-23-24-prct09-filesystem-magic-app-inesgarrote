import "mocha";
//import { expect } from "chai";
import pkg from "chai";
const { expect } = pkg;
import { FilterMapDivReduce } from "../src/ejercicio-pe/FilterMapDivReduce.js";

describe("FilterMapDivReduce", () => {
  it("filter", () => {
    const filterMapDivReduce = new FilterMapDivReduce();
    const pred = (x: number) => x % 2 === 0; // Filter even numbers
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = filterMapDivReduce.filter(pred, list);
    expect(result).to.eql([2, 4, 6, 8, 10]);
  });
  it("map", () => {
    const filterMapDivReduce = new FilterMapDivReduce();
    const mapFunc = (x: number) => x + 1; // Map: Add 1 to each element
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = filterMapDivReduce.map(mapFunc, list);
    expect(result).to.eql([2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  });
  it("reduce", () => {
    const filterMapDivReduce = new FilterMapDivReduce();
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = filterMapDivReduce.reduce(list);
    expect(result).to.equal(2.7557319223985894e-7);
  });
});
