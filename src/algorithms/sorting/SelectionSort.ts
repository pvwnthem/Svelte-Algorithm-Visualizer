import SortingAlgorithm from "../SortingAlgorithm";


export default class SelectionSort extends SortingAlgorithm {

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

    static async animate(array: number[], updateArray: (array: number[], index: number) => void): Promise<number[]> {
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
                await new Promise(resolve => setTimeout(resolve, 100));
                updateArray([...array], i);
            }
        }
        return array
    }
}