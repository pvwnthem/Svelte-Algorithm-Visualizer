export default class SortingAlgorithm {

    name: string
    run = (array: number[]) => array
    animate = (array: number[], updateArray: (array: number[], index: number) => void, shouldStopSorting: () => boolean) => array

    constructor(name: string) {
        this.name = name
    }

}