(() => {
  let deadCount = 0;
  let lostCount = 0;

  let deadElement = document.getElementById("dead"); //победа
  let lostElement = document.getElementById("lost"); //поражение

  function updateScore() {
    deadElement.textContent = deadCount;
    lostElement.textContent = lostCount;
  }

  function resetGame() {
    deadCount = 0;
    lostCount = 0;
    updateScore();
    for (let i = 1; i <= 9; i++) {
      document.getElementById(`hole${i}`).className = 'hole';
    }
  }

  function checkGameStatus() {
    if (lostCount >= 5) {
      alert('Проигрыш!');
      resetGame();
    } else if (deadCount >= 10) {
      alert('Победа!');
      resetGame();
    }
  }

  function handleHoleClick(holeNumber) {
  
    const hole = document.getElementById(`hole${holeNumber}`);
    
    if (hole.className.includes('hole_has-mole')) {
      deadCount++;
      hole.className = 'hole';
    } else {
      lostCount++;
    }
    updateScore();
    checkGameStatus();
  }

  for (let i = 1; i <= 9; i++) {
    const hole = document.getElementById(`hole${i}`);
    
    hole.addEventListener('click', function() {
  
      handleHoleClick(i);
    });
  }


  resetGame();

  
})();