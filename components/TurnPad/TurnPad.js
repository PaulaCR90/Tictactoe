export const TurnPad = (callback) => {
  const turnSelector = document.createElement('div');
  turnSelector.className = 'turns';
  const title$$ = document.createElement('h4');
  title$$.textContent = 'Select player!';
  const buttonContainer = document.createElement('div');
  buttonContainer.className = 'buttonContainer';

  const turnOptions = ['logo', 'crash'];

  const handleTurn = (currentPlayer) => {
    console.log(currentPlayer);
    turnSelector.innerHTML = '';
    turnSelector.innerHTML = `It's <img class="symbols" src="../../../public/assets/${currentPlayer}.png" alt="${currentPlayer}" /> turn!`;

    callback(currentPlayer);
  };
  turnOptions.forEach((element) => {
    const playerButton = document.createElement('button');
    const playerImage =
      element === 'logo'
        ? '../../../public/assets/logo.png'
        : '../../../public/assets/crash.png';
    playerButton.innerHTML = `<img class="symbols" src="${playerImage}" alt="${element}" />`;
    playerButton.className = 'turnOption';
    playerButton.value = element;
    const currentPlayer = playerButton.value;
    playerButton.addEventListener('click', () => handleTurn(currentPlayer));
    buttonContainer.appendChild(playerButton);
  });
  turnSelector.appendChild(buttonContainer);
  return turnSelector;
};
