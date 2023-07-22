<script lang="ts">
  import BubbleSort from "../algorithms/sorting/BubbleSort";
    import InsertionSort from "../algorithms/sorting/InsertionSort";
    import QuickSort from "../algorithms/sorting/QuickSort";
  import SelectionSort from "../algorithms/sorting/SelectionSort";
  import { onMount } from 'svelte';

  let arrayLength = 30;
  let originalArray = generateRandomArray(arrayLength);
  let sortedArray = [];
  let currentIndex = 0;
  let isSorting = false;
  let animate = true;
  let selectedAlgorithm = BubbleSort;
  let stopSorting = false;

  async function startSorting() {
    isSorting = true;
    currentIndex = 0;
    stopSorting = false;
    sortedArray = animate ? await selectedAlgorithm.animate([...originalArray], updateArray, shouldStopSorting) : selectedAlgorithm.run([...originalArray]);
    isSorting = false;
  }

  console.log(selectedAlgorithm.code )
  function resetArray() {
    originalArray = generateRandomArray(arrayLength);
    sortedArray = originalArray;
    currentIndex = 0;
    isSorting = false;
  }

  function updateArray(array: number[], index: number) {
    sortedArray = array;
    currentIndex = index;
  }

  function generateRandomArray(length: number): number[] {
    const array = [];
    for (let i = 0; i < length; i++) {
      array.push(Math.floor(Math.random() * 100) + 1);
    }
    return array;
  }

  function shouldStopSorting() {
    return stopSorting;
  }

  onMount(() => {
    sortedArray = originalArray;
  });
</script>

  <div class="container">
    <select class="algorithm-select" bind:value={selectedAlgorithm}>
      <option value={BubbleSort}>Bubble Sort</option>
      <option value={SelectionSort}>Selection Sort</option>
      <option value={QuickSort}>Quick Sort</option>
      <option value={InsertionSort}>Insertion Sort</option>
    </select>
    <input class="checkbox-input" name="animate" type="checkbox" bind:checked={animate} />
    <label class="checkbox-label" for="animate">Animate</label>
    <label for="array-length">Array Length:</label>
    <input name="array-length" type="range" min="10" max="100" step="1" bind:value={arrayLength} on:change={resetArray} />
    <div class="button-container">
      <button on:click={startSorting} disabled={isSorting}>
        {isSorting ? 'Sorting...' : 'Start Sorting'}
      </button>
      <button on:click={() => stopSorting = true} disabled={!isSorting}>
        Stop Sorting
      </button>
      <button on:click={resetArray} disabled={isSorting}>
        Reset Array
      </button>
    </div>
    <h1>{selectedAlgorithm.name}</h1>
    <div class="array-container">
      {#each sortedArray as value, index}
        <div
          class={`array-bar ${currentIndex === index ? 'current' : ''}`}
          style={`height: ${value * 2}px; transition: height 0.1s ease-out;`}
        ></div>
      {/each}
    </div>
    <div class="container2">
      <pre>
      <code class="">
      {selectedAlgorithm.code}
    </code>
  </pre>
    </div>
    
  </div>

<style>
  .container {
    margin: 20px auto;
    padding: 20px;
    max-width: 75%;
  }

  .containter2 {
    direction: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    text-align: center;
  } 

  code {
    text-align: center;
  }

  @media (max-width: 768px) {
    .container {
      max-width: 100%;
    }
  }

  .algorithm-select,
  .checkbox-input {
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 10px;
  }

  .checkbox-label {
    font-size: 16px;
    margin-right: 20px;
  }

  .button-container {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }

  .container2 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  
  pre {
    white-space: pre-wrap;
    text-align: left;
  }
  
  code {
    white-space: pre-wrap;
  }

  button {
    padding: 8px 16px;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #0056b3;
  }

  button[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .array-container {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: 300px;
    width: 100%;
    background-color: #242424;
  }

  .array-bar {
    width: 10px;
    margin: 0 1px;
    background-color: #007bff;
    transition: height 0.1s ease-out;
  }

  @media (max-width: 768px) {
    .array-bar {
      margin: 0 0.5px;
    }
  }

  .current {
    background-color: #ff4500;
  }
</style>
