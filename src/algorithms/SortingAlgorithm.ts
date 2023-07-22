export default class SortingAlgorithm {

    name: string
    run = (array: number[]) => array
    animate = (array: number[], updateArray: (array: number[], index: number) => void) => array

    constructor(name: string) {
        this.name = name
    }

}