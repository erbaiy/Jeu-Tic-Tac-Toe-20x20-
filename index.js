    let restartButton=document.getElementById('restart');
    let  board=document.getElementById('board');
    let scoreDisplayX=document.getElementById('scoreX');
    let scoreDisplayO=document.getElementById('scoreO');
    let currentPlayer="X";
    let gameActive=true;
    let playerStatus = document.getElementById('status');
    let defineBoard = Array(20).fill(null).map(() => Array(20).fill(null)); // Reset board state
    let scoreX;    // Player X score
    let scoreO;   // Player O score
    let recharger=document.getElementById('recharger');
    recharger.addEventListener('click',gameOver)
       

    function initializeScores() {
        scoreX = localStorage.getItem('scoreX') ? parseInt(localStorage.getItem('scoreX')) : 0;
        scoreO = localStorage.getItem('scoreO') ? parseInt(localStorage.getItem('scoreO')) : 0;
        changeScore();
    }
     

    function updateScoresInLocalStorage() {
        localStorage.setItem('scoreX', scoreX);
        localStorage.setItem('scoreO', scoreO);
    }
    function createBoard(){
        for(let i=0;i<20;i++){
            for(let j=0;j<20;j++){
                let cell=document.createElement('div');
                cell.classList.add('cell');
                cell.dataset.cellIndex = `${i}-${j}`; // Store the cell's position
                cell.addEventListener('click',handleClick);
                board.appendChild(cell); // Append the cell to the board

            }
        }
        
    }

    function handleClick(event) {
        let cell = event.target;
        const [row, col] = cell.dataset.cellIndex.split('-').map(Number);

        if(defineBoard[row][col]|| !gameActive) return;
        defineBoard[row][col] = currentPlayer;
        cell.textContent = currentPlayer;
        cell.style.backgroundColor = currentPlayer == "X" ? "red" : "green";
        if (checkForWinner(row, col)) {
            // alert('game over');
            playerStatus.textContent = `Joueur ${currentPlayer} a gagné !`;
            if(currentPlayer=="X"){
                scoreX++;
            }else scoreO++;
            updateScoresInLocalStorage();
            changeScore();
            gameActive = false;
            return;
        }
        // Switch player
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        playerStatus.textContent = `Joueur ${currentPlayer}, à vous de jouer !`;
    }
        function checkForWinner(row,col){
            const directions = [
                [[0, 1], [0, -1]],
                [[1, 0], [-1, 0]],
                [[1, 1], [-1, -1]],
                [[1, -1], [-1, 1]]
            ];
            
            for(const [[dx1,dy1],[dx2,dy2]] of directions){
                let count=1;
           count+=countInDirection(row,col,dx1,dy1);
           count+=countInDirection(row,col,dx2,dy2);
           if(count>=5) return true;

            }
             return false;
        }

        function countInDirection(row,col,dx,dy){
            let r=row+dx;
            let c=col+dy;
            let count = 0;
            while(r>=0 && r<20 && c>=0 && c<20 && defineBoard[r][c]==currentPlayer){
                count++;
                c+=dy;
                r+=dx
            }
            return count;
        }

        restartButton.addEventListener('click',()=>{
            board.innerHTML='';
            gameActive=true;
            currentPlayer="X";
            createBoard();
            
        })
      function  changeScore(){
scoreDisplayO.textContent=scoreO;
scoreDisplayX.textContent=scoreX;
console.log(scoreX);
        }

function gameOver(){
    window.localStorage.clear();
    board.innerHTML='';
    gameActive=true;
    currentPlayer="X";
    createBoard();
    initializeScores();
}
    

        initializeScores();
 
    createBoard();

