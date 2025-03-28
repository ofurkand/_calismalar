<script lang="ts">
	import Board from './Board.svelte';

	let currentPlayer = "X"; // Başlangıçta "X" başlıyor
    let gameBoard = Array(3).fill(null).map(() => Array(3).fill(null));
	let winner = "";

	// function handleClick(row:number, col:number) {
	// 	// Eğer hücre doluysa veya oyun bitmişse tıklama kabul edilmez
	// 	if (gameBoard[row][col] || winner) return;

	// 	// Oynayan kişiyi tahtaya ekleyelim
	// 	gameBoard = gameBoard.map((r, i) =>
	// 		i === row ? r.map((c, j) => (j === col ? currentPlayer : c)) : r
	// 	);

	// 	// Kazananı kontrol et
	// 	if (checkWinner()) {
	// 		winner = `${currentPlayer} kazandı!`;
	// 	} else if (gameBoard.flat().every(cell => cell !== null)) {
	// 		winner = "Berabere!";
	// 	} else {
	// 		// Sırayı değiştir
	// 		currentPlayer = currentPlayer === "X" ? "O" : "X";
	// 	}
	// }

	function checkWinner() {
		const lines = [
			// Satırlar
			[gameBoard[0][0], gameBoard[0][1], gameBoard[0][2]],
			[gameBoard[1][0], gameBoard[1][1], gameBoard[1][2]],
			[gameBoard[2][0], gameBoard[2][1], gameBoard[2][2]],
			// Sütunlar
			[gameBoard[0][0], gameBoard[1][0], gameBoard[2][0]],
			[gameBoard[0][1], gameBoard[1][1], gameBoard[2][1]],
			[gameBoard[0][2], gameBoard[1][2], gameBoard[2][2]],
			// Çaprazlar
			[gameBoard[0][0], gameBoard[1][1], gameBoard[2][2]],
			[gameBoard[0][2], gameBoard[1][1], gameBoard[2][0]]
		];

		return lines.some(line => line.every(cell => cell === currentPlayer));
	}

	function resetGame() {
		gameBoard = Array(3).fill(null).map(() => Array(3).fill(null));
		winner = "";
		currentPlayer = "X";
	}
    function handleClick(event: CustomEvent) {
    const { row, col } = event.detail;
    console.log(`Clicked on row: ${row}, col: ${col}`);
    }
</script>

<p>Şu anki oyuncu: {currentPlayer}</p>
{#if winner}
	<p>{winner}</p>
	<button on:click={resetGame}>Tekrar Oyna</button>
{:else}
	<Board {gameBoard} on:cellClick={handleClick} />
{/if}
