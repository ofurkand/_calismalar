<script>
	import Cell from './Cell.svelte';
	export let gameBoard;
	// export let cellClick;

    export let cellClick: (event: CustomEvent) => void;  // cellClick fonksiyonu dışarıdan geliyor

  // Hücreye tıklama işlemi
  function handleClick(row: number, col: number) {
    dispatch('cellClick', { row, col });  // cellClick olayını yayımlıyoruz
  }
</script>

<div class="board">
	{#each gameBoard as row, rowIndex}
		<div class="row">
			{#each row as cell, colIndex}
				<Cell value={cell} on:click={() => cellClick(rowIndex, colIndex)} />
			{/each}
		</div>
	{/each}
</div>

<style>
	.board {
		display: grid;
		grid-template-rows: repeat(3, 1fr);
		gap: 5px;
	}
	.row {
		display: flex;
	}
</style>
