/**
 * @brief Clase abstracta que define el comportamiento de un algoritmo que realiza operaciones de filtrado, mapeo y reducción sobre una lista de elementos.
 * @tparam T Tipo de los elementos de la lista de entrada.
 * @tparam U Tipo de los elementos de la lista de salida.
 */
export abstract class AbstractFilterMapReduce<T, U> {
  /**
   * @brief Método de plantilla que define el algoritmo de filtrado, mapeo y reducción sobre una lista de elementos.
   * @param pred
   * @param mapFunc
   * @param list
   * @returns
   */
  public templateMethod(
    pred: (item: T) => boolean,
    mapFunc: (item: T) => U,
    list: T[],
  ): U {
    const filteredList = this.filter(pred, list);
    const mappedList = this.map(mapFunc, filteredList);
    return this.reduce(mappedList);
  }
  /**
   * Operations that already have implementations in the skeleton.
   */

  /**
   * @brief Método que realiza la operación de filtrado sobre una lista de elementos.
   * @param pred
   * @param list
   * @returns devuelve una lista de elementos que cumple con el predicado.
   */
  protected filter(pred: (item: T) => boolean, list: T[]): T[] {
    const result: T[] = [];
    for (const item of list) {
      if (pred(item)) {
        result.push(item);
      }
    }
    return result;
  }

  /**
   * @brief Método que realiza la operación de mapeo sobre una lista de elementos.
   * @param func
   * @param list
   * @returns devuelve una lista de elementos que ha sido transformada por la función func.
   */
  protected map(func: (item: T) => U, list: T[]): U[] {
    const result: U[] = [];
    for (const item of list) {
      result.push(func(item));
    }
    return result;
  }

  /**
   * Operations that must be implemented by subclasses
   */

  /**
   * @brief Método abstracto que realiza la operación de reducción sobre una lista de elementos.
   * @param list
   */
  protected abstract reduce(list: U[]): U;
}
