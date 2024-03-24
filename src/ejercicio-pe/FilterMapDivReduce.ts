import { AbstractFilterMapReduce } from "./AbstractFilterMapReduce.js";

/**
 * @brief Clase concreta que implementa el algoritmo de filtrado, mapeo y reducción sobre una lista de números. En el método de reducción, se realiza la operación de división.
 * @tparam number Tipo de los elementos de la lista de entrada y de la lista de salida.
 */
export class FilterMapDivReduce extends AbstractFilterMapReduce<
  number,
  number
> {
  /**
   * @brief Método que realiza la operación de filtrado sobre una lista de números.
   * @param pred
   * @param list
   * @returns
   */
  filter(pred: (item: number) => boolean, list: number[]): number[] {
    const result: number[] = [];
    for (const item of list) {
      if (pred(item)) {
        result.push(item);
      }
    }
    return result;
  }

  /**
   * @brief Método que realiza la operación de mapeo sobre una lista de números.
   * @param func
   * @param list
   * @returns
   */
  map(func: (item: number) => number, list: number[]): number[] {
    const result: number[] = [];
    for (const item of list) {
      result.push(func(item));
    }
    return result;
  }

  /**
   * @brief Método que realiza la operación de reducción sobre una lista de números.
   * @param list
   * @returns
   */
  reduce(list: number[]): number {
    let div = 1;
    for (const item of list) {
      div /= item;
    }
    return div;
  }
}
