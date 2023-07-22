import SortingAlgorithm from "../SortingAlgorithm";

export default class QuickSort extends SortingAlgorithm {

    static code = `
    static run = (array: number[]): number[] => {
        if (array.length <= 1) {
            return array;
          }
        
          const pivotIndex = Math.floor(array.length / 2);
          const pivot = array[pivotIndex];
          const left = [];
          const right = [];
        
          for (let i = 0; i < array.length; i++) {
            if (i === pivotIndex) {
              continue;
            }
        
            const current = array[i];
            if (current < pivot) {
              left.push(current);
            } else {
              right.push(current);
            }
          }
        
          return [...QuickSort.run(left), pivot, ...QuickSort.run(right)];
    }`

    constructor () {
        super('Quick Sort')
    }

    static run = (array: number[]): number[] => {
        if (array.length <= 1) {
            return array;
          }
        
          const pivotIndex = Math.floor(array.length / 2);
          const pivot = array[pivotIndex];
          const left = [];
          const right = [];
        
          for (let i = 0; i < array.length; i++) {
            if (i === pivotIndex) {
              continue;
            }
        
            const current = array[i];
            if (current < pivot) {
              left.push(current);
            } else {
              right.push(current);
            }
          }
        
          return [...QuickSort.run(left), pivot, ...QuickSort.run(right)];
    }

    static async animate(array: number[], updateArray: (array: number[], index: number) => void, shouldStopSorting: () => boolean): Promise<number[]> {
        const quickSort = async (arr: number[]): Promise<number[]> => {
            if (arr.length <= 1) {
                return arr;
            }
            
            const pivotIndex = Math.floor(arr.length / 2);
            const pivot = arr[pivotIndex];
            const left = [];
            const right = [];
            
            for (let i = 0; i < arr.length; i++) {
                if (i === pivotIndex) {
                    continue;
                }
            
                const current = arr[i];
                if (current < pivot) {
                    left.push(current);
                } else {
                    right.push(current);
                }
            }
            
            const sortedLeft = await quickSort(left);
            updateArray([...sortedLeft, pivot, ...right], pivotIndex);
            const sortedRight = await quickSort(right);
            updateArray([...sortedLeft, pivot, ...sortedRight], pivotIndex);
            return [...sortedLeft, pivot, ...sortedRight];
        };
    
        const sortedArray = await quickSort(array);
        return sortedArray;
    }
}