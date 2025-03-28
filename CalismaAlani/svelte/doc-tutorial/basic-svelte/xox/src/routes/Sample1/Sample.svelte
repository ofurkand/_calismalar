<script lang="ts">
    let board: string[][] = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""]
    ];
    let currentPlayer: string = "X"; // Başlangıçta X oynar
    let gameOver: boolean = false;
    let winner: string = "";
  
    // Oyun tahtasında bir hücreye tıklama
    function makeMove(row: number, col: number) {
      if (gameOver || board[row][col] !== "") return; // Oyun bitti veya hücre doluysa hareket yapılmaz
      board[row][col] = currentPlayer;
      if (checkWinner()) {
        gameOver = true;
        winner = currentPlayer;
      } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X"; // Sıradaki oyuncuya geç
      }
    }
  
    // Kazananı kontrol etme
    function checkWinner(): boolean {
      // Satırlar, sütunlar ve çaprazlar kontrol edilir
      const lines = [
        // Satırlar
        [board[0][0], board[0][1], board[0][2]],
        [board[1][0], board[1][1], board[1][2]],
        [board[2][0], board[2][1], board[2][2]],
        // Sütunlar
        [board[0][0], board[1][0], board[2][0]],
        [board[0][1], board[1][1], board[2][1]],
        [board[0][2], board[1][2], board[2][2]],
        // Çaprazlar
        [board[0][0], board[1][1], board[2][2]],
        [board[0][2], board[1][1], board[2][0]],
      ];
  
      return lines.some(line => line.every(cell => cell === currentPlayer));
    }
  
    // Oyunu sıfırlama
    function resetGame() {
      board = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
      ];
      currentPlayer = "X";
      gameOver = false;
      winner = "";
    }
  </script>
  
  <style>
    .board {
      display: grid;
      grid-template-columns: repeat(3, 100px);
      grid-template-rows: repeat(3, 100px);
      gap: 5px;
      margin: 20px auto;
      max-width: 320px;
    }
    .cell {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100px;
      height: 100px;
      font-size: 2rem;
      background-color: #f4f4f4;
      border: 1px solid #ccc;
      cursor: pointer;
    }
    .cell.x {
      color: #ff6347;
    }
    .cell.o {
      color: #4682b4;
    }
    .message {
      text-align: center;
      font-size: 1.5rem;
      margin-top: 20px;
    }
    button {
      display: block;
      margin: 20px auto;
      padding: 10px;
      background-color: #4CAF50;
      color: white;
      border: none;
      cursor: pointer;
    }
    button:hover {
      background-color: #45a049;
    }
  </style>
  
  <div class="board">
    {#each board as row, rowIndex}
      {#each row as cell, colIndex}
        <div
          class="cell {cell === 'X' ? 'x' : cell === 'O' ? 'o' : ''}"
          on:click={() => makeMove(rowIndex, colIndex)}
        >
          {cell}
        </div>
      {/each}
    {/each}
  </div>
  
  {#if gameOver}
    <div class="message">
      {winner === "X" || winner === "O" ? `${winner} kazandı!` : "Beraberlik!"}
    </div>
  {/if}
  
  {#if !gameOver}
    <div class="message">
      {currentPlayer === "X" ? "X sırası" : "O sırası"}
    </div>
  {/if}
  
  <button on:click={resetGame}>Oyunu Yeniden Başlat</button>
  