import { getRandomInt } from './random';
let squares: NodeList;

export function runApp() {
    // we need a random number 1 - 6
    const secretNumber = getRandomInt(1, 6);

    // find all the squares
    squares = document.querySelectorAll('.square');
    let currentSquare = 1;

    // Pick the one that is the secret number and "Bless"
    squares.forEach(function (square: HTMLDivElement) {
        if (currentSquare === secretNumber) {
            square.dataset.secret = 'true';
        }
        square.addEventListener('click', handleClick);
        currentSquare++;
    });

    // make it that when user clicks on the square, something happens

    function handleClick() {
        const clickedSquare = this as HTMLDivElement;
        const isSpecial = clickedSquare.dataset.secret === 'true';
        if (isSpecial) {
            clickedSquare.classList.add('winner');
            squares.forEach((sq: HTMLDivElement) => {
                if (sq !== clickedSquare) {
                    sq.classList.add('loser');
                    sq.removeEventListener('click', handleClick);
                }
            });
        } else {
            clickedSquare.classList.add('loser');
            clickedSquare.removeEventListener('click', handleClick);
        }
    }
}
