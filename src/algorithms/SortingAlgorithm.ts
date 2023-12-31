export default class SortingAlgorithm {

    name: string
    code: string
    run = (array: number[]) => array
    animate = (array: number[], updateArray: (array: number[], index: number) => void, shouldStopSorting: () => boolean, delay: number) => array

    constructor(name: string) {
        this.name = name
    }
    

}