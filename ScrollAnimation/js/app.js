document.addEventListener('DOMContentLoaded', start);

function start() {
  window.addEventListener('scroll', checkAnimations);
}

function checkAnimations(e){
  console.log(e);
  const textDivs = document.getElementsByClassName('textDiv');
  const textsArray = Array.from(textDivs);
  textsArray.forEach(text => {
    const textHeight = text.clientHeight;
    const slideInAt = (window.scrollY + window.innerHeight) - textHeight/2;

    const divBottom = text.offsetTop + text.clientHeight;

    const isHalfShown = slideInAt > text.offsetTop;
    const isNotScrolledPast = window.scrollY < divBottom;

    if (isHalfShown && isNotScrolledPast) {
      text.classList.add('activeText');
    } else {
      text.classList.remove('activeText');
    }
  });

  const squares = document.getElementsByClassName('square');
  const squaresArray = Array.from(squares);
  squaresArray.forEach(square => {
    console.log(square);
    const squareHeight = square.clientHeight;
    const slideInAt = (window.scrollY + window.innerHeight) - squareHeight/2;

    const squareBottom = square.offsetTop + square.clientHeight;

    const squareHalfShown = slideInAt > square.offsetTop;
    const squareNotScrolledPast = window.scrollY < squareBottom;

    const squareId = square.id;
    console.log(squareId);

    if (squareHalfShown && squareNotScrolledPast) {
      square.classList.add(`active${squareId}`);
      console.log(`active${squareId}`);
    } else {
      square.classList.remove(`active${squareId}`);
    }

  });
}
