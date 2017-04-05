document.addEventListener('DOMContentLoaded', start);

// const row1Array = ['cat','dog', 'yes', 'why', 'big'];
// const row2Array = ['photo','margin', 'friend', 'feared', 'lovely'];
const row3Array = ['weird', 'kindness','alphabet', 'wonderingly', 'satisfying', 'greatness', 'sweetness', 'absolutely', 'effervescent', 'magnanimous', 'philosophy', 'psychology', 'accommodate', 'handkerchief', 'cemetery', 'conscience'];

const pressed = [];

function start() {
  // const row1text = document.getElementById('row1text');
  // const row2text = document.getElementById('row2text');
  const row3text = document.getElementById('row3text');

  const points = document.getElementById('points');

  const colors = ['red', 'green', 'blue', 'white', 'yellow', 'purple', 'orange', 'coral'];

  // row1Array.forEach(function(word, index) {
  //   setTimeout(displayWord.bind(null, word), index*1000);
  // });
  //
  // function displayWord(word) {
  //   row1text.innerHTML = word;
  // }
  //
  // row2Array.forEach(function(word, index) {
  //   setTimeout(displayWord.bind(null, word), index*3000);
  // });
  //
  // function displayWord(word) {
  //   row2text.innerHTML = word;
  // }

  row3Array.forEach(function(word, index) {
    setTimeout(displayWord.bind(null, word), index*3000);
  });

  function displayWord(word) {
    row3text.innerHTML = word;
  }

  window.addEventListener('keyup', (e) => {
    pressed.push(e.key);
    const wordShowing = row3text.innerHTML;
    pressed.splice(-wordShowing.length - 1, pressed.length - wordShowing.length);

    if (pressed.join('').includes(wordShowing)) {
      const randomColor = Math.floor(Math.random() * colors.length);
      row3text.style.color = colors[randomColor];
      // row3text.classList.add('win');
      console.log(randomColor);
      points.innerHTML = parseInt(parseInt(points.innerHTML) + 10);
    }
    // console.log(pressed);
  });

}
