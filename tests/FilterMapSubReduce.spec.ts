import "mocha";
//import { expect } from "chai";
import pkg from 'chai';
const { expect } = pkg;
import { FilterMapSubReduce } from "../src/FilterMapSubReduce.js";

describe("FilterMapSubReduce", () => {
  it("filter", () => {
    const filterMapSubReduce = new FilterMapSubReduce();
    const pred = (x: number) => x % 2 === 0; // Filter even numbers
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = filterMapSubReduce.filter(pred, list);
    expect(result).to.eql([2, 4, 6, 8, 10]);
  });
  it("map", () => {
    const filterMapSubReduce = new FilterMapSubReduce();
    const mapFunc = (x: number) => x + 1; // Map: Add 1 to each element
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = filterMapSubReduce.map(mapFunc, list);
    expect(result).to.eql([2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  });
  it("reduce", () => {
    const filterMapSubReduce = new FilterMapSubReduce();
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = filterMapSubReduce.reduce(list);
    expect(result).to.equal(-55);
  });
});
