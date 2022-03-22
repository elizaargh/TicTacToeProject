console.log('TTT RULES RULES!!')

const squares = {
    squares: 1,
    squares: 2,
    squares: 3,
    squares: 4,
    squares: 5,
    squares: 6,
    squares: 7,
    squares: 8,
    squares: 9
}




const winningCombo = {
    rowOne: [1, 2, 3],
    rowTwo: [4, 5, 6],
    rowThree: [7, 8, 9],
    columnA: [ 1,4,7],
    columnB: [2, 5, 8],
    columnC: [3, 6, 9],
    diagonalTop: [1, 5, 6],
    diagonalBottom: [7, 5, 3]
};

// ON CLICK START

let playerOne = true;

// ON CLICK SQUARES

const theGameItself = function (buttonClicked) {
    for (let i = 0; 0 < squares.length; i++);{
    let playerOne  = true;
    let choice = buttonClicked;
    let currentPlayer = [];
        currentPlayer.push(choice);
        console.log(currentPlayer)
        return
        }
    } ;


// const roundOneplayerOne = function(){
//     let choices= [];
//     let roundOne= squares.push.choices[];
//     for (let i= 0; 0 <= choices.length; i++)
//     }
// };

// const winner = function (){
//     if (choices === winningCombo){ /* choices array matches any array in winningCombo. Regardless of order in Array.   */
//     console.log('You win!')
// }

// const playerTwo = function(){
//     let choices= [];
//     if (choices === winningCombo){ /* choices array matches any array in winningCombo. Regardless of order in Array.   */
//         return
//     }
// };


// const winningCombo = {
//     rowOne: ['1A', '1B', '1C'],
//     rowTwo: ['2A', '2B', '2C'],
//     rowThree: ['3A, 3B. 3C'],
//     columnA: [ 'A1', 'A2', 'A3',],
//     columnB: ['B1', 'B2', 'B3'],
//     columnC: ['C1', 'C2', 'C3'],
//     diagonalRight: ['1A', '2B', 'C3'],
//     diagonalLeft: ['3A', 'B2', 'C1']
// };