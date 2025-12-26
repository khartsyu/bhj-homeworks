let elementTimer = function () {
  let timerElement = document.getElementById("timer");
  let timer = parseInt(timerElement.textContent);
  timer--;
  timerElement.textContent = timer;
  console.log(timer);

  if (timer > 0) {
    setTimeout(elementTimer, 1000);
  } else {
    alert('Вы победили в конкурсе!');
  }
};

elementTimer();