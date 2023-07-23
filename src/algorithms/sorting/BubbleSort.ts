import SortingAlgorithm from "../SortingAlgorithm";

export default class BubbleSort extends SortingAlgorithm {

    static code = `
    const BubbleSort = (array: number[]): number[] => {
        let swapped = true
        let i = 0
        while (swapped) {
            swapped = false
            for (let j = 0; j < array.length - i - 1; j++) {
                if (array[j] > array[j + 1]) {
                    const temp = array[j]
                    array[j] = array[j + 1]
                    array[j + 1] = temp
                    swapped = true
                }
            }
            i++
        }
        return array
    }`

    constructor () {
        super('Bubble Sort')
    }
    

    static run = (array: number[]): number[] => {
        let swapped = true
        let i = 0
        while (swapped) {
            swapped = false
            for (let j = 0; j < array.length - i - 1; j++) {
                if (array[j] > array[j + 1]) {
                    const temp = array[j]
                    array[j] = array[j + 1]
                    array[j + 1] = temp
                    swapped = true
                }
            }
            i++
        }
        return array
    }
    static async animate(array: number[], updateArray: (array: number[], index: number) => void, shouldStopSorting: () => boolean, delay: number): Promise<number[]> {
        let swapped = true;
        let i = 0;
        while (swapped) {
            swapped = false;
            for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                swapped = true;
                await new Promise(resolve => setTimeout(resolve, delay));
                if (shouldStopSorting()) {
                return array;
                }
                updateArray([...array], j);
            }
            }
            i++;
        }
        return array;
    }
}