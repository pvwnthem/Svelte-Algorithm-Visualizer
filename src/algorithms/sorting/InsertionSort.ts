import SortingAlgorithm from "../SortingAlgorithm";

export default class InsertionSort extends SortingAlgorithm {

    static code = `
    const InsertionSort = (array: number[]): number[] => {
        for (let i = 1; i < array.length; i++) {
            const current = array[i]
            let j = i - 1
            while (j >= 0 && array[j] > current) {
                array[j + 1] = array[j]
                j--
            }
            array[j + 1] = current
        }
        return array
    }`

    constructor () {
        super('Insertion Sort')
    }

    static run = (array: number[]): number[] => {
        for (let i = 1; i < array.length; i++) {
            const current = array[i]
            let j = i - 1
            while (j >= 0 && array[j] > current) {
                array[j + 1] = array[j]
                j--
            }
            array[j + 1] = current
        }
        return array
    }

    static async animate(array: number[], updateArray: (array: number[], index: number) => void, shouldStopSorting: () => boolean): Promise<number[]> {
        for (let i = 1; i < array.length; i++) {
            const current = array[i]
            let j = i - 1
            while (j >= 0 && array[j] > current) {
                array[j + 1] = array[j]
                updateArray(array, j + 1)
                j--
                await new Promise(resolve => setTimeout(resolve, 100));
                if (shouldStopSorting()) {
                    return array;
                }
            }
            array[j + 1] = current
        }
        return array
    }
}