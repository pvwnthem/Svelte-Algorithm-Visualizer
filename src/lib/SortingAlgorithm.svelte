<script lang="ts">
  import BubbleSort from "../algorithms/sorting/BubbleSort";
  import { onMount } from 'svelte';

  let originalArray = generateRandomArray(30);
  let sortedArray = [];
  let currentIndex = 0;
  let isSorting = false;

  async function startSorting() {
    isSorting = true;
    currentIndex = 0;
    sortedArray = await BubbleSort.animate([...originalArray], updateArray);
    isSorting = false;
  }

  function resetArray() {
    originalArray = generateRandomArray(30);
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

  onMount(() => {
    sortedArray = originalArray;
  });
</script>

<div>
  <button on:click={startSorting} disabled={isSorting}>
    {isSorting ? 'Sorting...' : 'Start Sorting'}
  </button>
  <button on:click={resetArray} disabled={isSorting}>
    Reset Array
  </button>
  <div class="array-container">
    {#each sortedArray as value, index}
      <div
        class={`array-bar ${currentIndex === index ? 'current' : ''}`}
        style={`height: ${value * 2}px; transition: height 0.01s ease-out;`}
      ></div>
    {/each}
  </div>
</div>

<style>
  .array-container {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: 300px;
    width: 100%;
    background-color: #f0f0f0;
  }

  .array-bar {
    width: 10px;
    margin: 0 1px;
    background-color: #007bff;
  }

  .current {
    background-color: #ff4500;
  }
</style>