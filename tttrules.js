console.log('TTT RULES RULES!!')
const buttonClick = function (){
    console.log('im clicked.')
    let result = button.id
    return result;
}



const newArray = function (){
    let hold = ['', '', '', '', '', '', '', '',''];
    hold[0] = $('#one');
    hold[1] = $('#2');
    hold[2] = $('#3');
    hold[3] = $('#4');
    hold[4] = $('#5');
    hold[5] = $('#6');
    hold[6] = $('#7');
    hold[7] = $('#8');
    hold[8] = $('#9');
    hold[0] = ['x']
    console.log(hold)
}

// const buttonAdd = function (){
//     let smoosh = ['',];
//      smoosh[0] = 'x';
 
// }  
//     console.log(smoosh)  

// };
// const buttonClick = function (){
//     let smooosh = [];

//     let one = $('#one');
//         smooosh.push(1);
//         console.log(smooosh)
// }

// const two = function (){
//     let t = $('#2');
//     let smooosh = [];
//         smooosh.push(2);
//         console.log(smooosh)
// }

// const three = function (){
//     let t = $('#3');
//     // let smooosh = [];
//         smooosh.push(3);
//         console.log(smooosh)
// }

// const four = function (){
//     let t = $('#4');
//     let smooosh = [];
//         smooosh.push(4);
//         console.log(smooosh)
// }

// const five = function (){
//     let t = $('#5');
//     // let smooosh = [];
//         smooosh.push(5);
//         console.log(smooosh)
// }

// const six = function (){
//     let t = $('#6');
//     // let smooosh = [];
//         smooosh.push(6);
//         console.log(smooosh)
// }

// const seven = function (){
//     let t = $('#7');
//     // let smooosh = [];
//         smooosh.push(7);
//         console.log(smooosh)
// }

// const eight = function (){
//     let t = $('#8');
//     // let smooosh = [];
//         smooosh.push(8);
//         console.log(smooosh)
// }

// const nine = function (){
//     let t = $('#9');
//     // let smooosh = [];
//         smooosh.push(9);
//         console.log(smooosh)
// }









// const winningCombo = {
//     rowOne: [1, 2, 3],
//     rowTwo: [4, 5, 6],
//     rowThree: [7, 8, 9],
//     columnA: [ 1,4,7],
//     columnB: [2, 5, 8],
//     columnC: [3, 6, 9],
//     diagonalTop: [1, 5, 6],
//     diagonalBottom: [7, 5, 3]
// };

// ON CLICK START

let playerOne = true;

// ON CLICK SQUARES

const theGameItself = function (oneButton) {
    for (let i = 0; 0 < squares.length; i++);{
    let playerOne  = true;
    let choice = oneButton;
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

// const squares = {
//     squares: [1],
//     squares: [2],
//     squares: [3],
//     squares: [4],
//     squares: [5],
//     squares: [6],
//     squares: [7],
//     squares: [8],
//     squares: [9]
// }