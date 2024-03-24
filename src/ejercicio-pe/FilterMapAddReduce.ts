/*
Implemente, a través del patrón Template Method, un algoritmo que permita llevar a cabo los siguientes pasos:
Operación de filtrado sobre una lista de números (fíjese en cómo funciona la función filter de TypeScript e implemente su operación de filtrado sin hacer uso de dicha función filter). La operación de filtrado recibe como argumento un predicado lógico que se evalúa sobre cada elemento de la lista, esto es, una función que de resultar ser verdadera para el elemento correspondiente por el que se vaya iterando, haga que dicho elemento pase a formar parte de la lista devuelta por la operación de filtrado. En caso de que el predicado sea falso, el elemento se descartará de la lista resultante.
Operación map sobre la lista de números resultante de la operación de filtrado (sin hacer uso del propio método map proporcionado por TypeScript). En este caso, de un modo similar a la operación filter, la operación map recibe también una función como argumento que permite transformar cada elemento de la lista de entrada aplicándole dicha función.
Operación reduce (sin hacer uso del propio método reduce proporcionado por TypeScript) sobre la lista resultante de haber aplicado el map. En este caso, la lista de entrada se reduce a un único número.
En la clase base abstracta, la operación reduce debe ser abstracta (así tendremos que implementarla obligatoriamente en las subclases), mientras que las operaciones filter y map deberán proporcionar un comportamiento por defecto que podría sobreescribirse, si se deseara, en las subclases. Luego, en las subclases, que podrían ser, por ejemplo, FilterMapAddReduce, FilterMapSubReduce, FilterMapProdReduce y FilterMapDivReduce, particularice la implementación de la operación reduce según corresponda. También añada algunos métodos de enganche (hooks) entre los pasos que haya definido en su método de plantilla.
*/

import { AbstractFilterMapReduce } from "./AbstractFilterMapReduce.js";

/**
 * @brief Clase concreta que implementa el algoritmo de filtrado, mapeo y reducción sobre una lista de números. En el método de reducción, se realiza la operación de suma.
 * @tparam number Tipo de los elementos de la lista de entrada y de la lista de salida.
 * @tparam number Tipo de los elementos de la lista de entrada y de la lista de salida.
 */
export class FilterMapAddReduce extends AbstractFilterMapReduce<
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
    let sum = 0;
    for (const item of list) {
      sum += item;
    }
    return sum;
  }
}

/*
// Example usage:
const filterMapAddReduce = new FilterMapAddReduce();
const pred = (x: number) => x % 2 === 0; // Filter even numbers
const mapFunc = (x: number) => x + 1; // Map: Add 1 to each element
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = filterMapAddReduce.templateMethod(pred, mapFunc, list);
console.log(result); // Output: 35 (Sum of filtered and mapped elements)
*/
