import SortingAlgorithm from "../SortingAlgorithm";

export default class QuickSort extends SortingAlgorithm {

    static code = `
    const QuickSort = (array: number[]): number[] => {
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

    static async animate(array: number[], updateArray: (array: number[], startIndex: number, endIndex: number) => void, shouldStopSorting: () => boolean): Promise<number[]> {
    const quickSort = async (arr: number[], start: number, end: number): Promise<number[]> => {
        if (end - start <= 0) {
            return arr;
        }
        
        const pivotIndex = Math.floor((start + end) / 2);
        const pivot = arr[pivotIndex];
        let left = start;
        let right = end;
        
        while (left <= right) {
            while (arr[left] < pivot) {
                left++;
            }
            
            while (arr[right] > pivot) {
                right--;
            }
            
            if (left <= right) {
                const temp = arr[left];
                arr[left] = arr[right];
                arr[right] = temp;
                updateArray(arr, left, right);
                await new Promise(resolve => setTimeout(resolve, 100));
                left++;
                right--;
            }
        }
        
        await quickSort(arr, start, right);
        await quickSort(arr, left, end);
        return arr;
    };

    const sortedArray = await quickSort(array, 0, array.length - 1);
    return sortedArray;
}
}