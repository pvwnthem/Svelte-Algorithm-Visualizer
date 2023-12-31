import SortingAlgorithm from "../SortingAlgorithm";


export default class SelectionSort extends SortingAlgorithm {

    static code = `
    const SelectionSort = (array: number[]): number[] => {
        for (let i = 0; i < array.length; i++) {
            let min = i
            for (let j = i + 1; j < array.length; j++) {
                if (array[min] > array[j]) {
                    min = j
                }
            }
            if (min !== i) {
                const temp = array[i]
                array[i] = array[min]
                array[min] = temp
            }
        }
        return array
    }`

    constructor () {
        super('Selection Sort')
    }

    static run = (array: number[]): number[] => {
        for (let i = 0; i < array.length; i++) {
            let min = i
            for (let j = i + 1; j < array.length; j++) {
                if (array[min] > array[j]) {
                    min = j
                }
            }
            if (min !== i) {
                const temp = array[i]
                array[i] = array[min]
                array[min] = temp
            }
        }
        return array
    }

    static async animate(array: number[], updateArray: (array: number[], index: number) => void, shouldStopSorting: () => boolean, delay: number): Promise<number[]> {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[min] > array[j]) {
        min = j;
      }
    }
    if (min !== i) {
      const temp = array[i];
      array[i] = array[min];
      array[min] = temp;
      await new Promise(resolve => setTimeout(resolve, delay));
      if (shouldStopSorting()) {
        return array;
      }
      updateArray([...array], i);
    }
  }
  return array;
}
}