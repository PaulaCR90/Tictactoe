export const resetButton = (createTictactoe) => {
  const resetButton = document.createElement('button');
  resetButton.textContent = 'New Game';
  resetButton.addEventListener('click', createTictactoe);
  return resetButton;
};
