import "mocha";
//import { expect } from "chai";
import pkg from "chai";
const { expect } = pkg;
import { FilterMapAddReduce } from "../src/ejercicio-pe/FilterMapAddReduce.js";

describe("FilterMapAddReduce", () => {
  it("filter", () => {
    const filterMapAddReduce = new FilterMapAddReduce();
    const pred = (x: number) => x % 2 === 0; // Filter even numbers
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = filterMapAddReduce.filter(pred, list);
    expect(result).to.eql([2, 4, 6, 8, 10]);
  });
  it("map", () => {
    const filterMapAddReduce = new FilterMapAddReduce();
    const mapFunc = (x: number) => x + 1; // Map: Add 1 to each element
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = filterMapAddReduce.map(mapFunc, list);
    expect(result).to.eql([2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  });
  it("reduce", () => {
    const filterMapAddReduce = new FilterMapAddReduce();
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = filterMapAddReduce.reduce(list);
    expect(result).to.equal(55);
  });
});
