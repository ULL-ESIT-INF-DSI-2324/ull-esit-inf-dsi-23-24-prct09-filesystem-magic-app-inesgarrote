import "mocha";
//import { expect } from "chai";
import pkg from 'chai';
const { expect } = pkg;
import { FilterMapProdReduce } from "../src/ejercicio-pe/FilterMapProdReduce.js";

describe("FilterMapProdReduce", () => {
  it("filter", () => {
    const filterMapProdReduce = new FilterMapProdReduce();
    const pred = (x: number) => x % 2 === 0; // Filter even numbers
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = filterMapProdReduce.filter(pred, list);
    expect(result).to.eql([2, 4, 6, 8, 10]);
  });
  it("map", () => {
    const filterMapProdReduce = new FilterMapProdReduce();
    const mapFunc = (x: number) => x + 1; // Map: Add 1 to each element
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = filterMapProdReduce.map(mapFunc, list);
    expect(result).to.eql([2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  });
  it("reduce", () => {
    const filterMapProdReduce = new FilterMapProdReduce();
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = filterMapProdReduce.reduce(list);
    expect(result).to.equal(3628800);
  });
});