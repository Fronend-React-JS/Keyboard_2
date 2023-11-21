const keyboardLayout = [
  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z'],
  ['X', 'C', 'V', 'B', 'N', 'M', ';', ',', '.', '/'],
  [' '],
];

const outputElement = document.getElementById('output');
const btn = document.getElementById('btn');

btn.addEventListener('click', function() {
    location.reload(true);
});

function createKeyboard() {
  const keyboardElement = document.getElementById('keyboard');

  keyboardLayout.forEach(row => {
    row.forEach(key => {
      const keyElement = document.createElement('div');
      keyElement.classList.add('key');
      keyElement.textContent = key;
      keyElement.addEventListener('click', () => keyPressed(key));
      keyboardElement.appendChild(keyElement);
    });
  });
}

function keyPressed(key) {
  outputElement.value += key;
}

function clearOutput() {
  outputElement.value = '';
}

createKeyboard();
