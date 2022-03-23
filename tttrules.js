console.log('TTT RULES RULES!!')

    let playerOne = true;


const ticktackerButton = $('.ticktackers');
ticktackerButton.on('click', console.log('help', ));

let values = ['0', '1', '2', '3', '4', '5', '6', '7','8'];

const buttonClick = function (){
    console.log('im clicked.')
    let result = button.id
    console.log(result);
    return result;
}

function updateValue(ticktackerButton) {
    const boxNotClicked = ticktackerButton.innerText !== 'x' && ticktackerButton.innerText !== 'o';
  
    if (playerOne && boxNotClicked){
  
      ticktackerButton.innerText = 'x'
      values[ticktackerButton.id] = 'x';
      playerOne = !playerOne;
      console.log(values);
      checkWin(values);
  
    } else if (boxNotClicked){
   
      ticktackerButton.innerText = 'o'
      values[ticktackerButton.id] = 'o';
      console.log(values)
      playerOne = !playerOne;
      checkWin(values);
    }
   
    
}


const ticktackers = [...document.getElementsByClassName('ticktackers')];
// console.log('------ ticktackers: ', ticktackers);

function updateButtonValue() {
  ticktackers.map((ticktackerButton) => {
    ticktackerButton.addEventListener("click", () => updateValue(ticktackerButton));
       ticktackerButton.addEventListener("click", () => console.log('I clicked: ', ticktackerButton.id));
       
      
  
  })
}

updateButtonValue();

const checkWin = function (){
    
  // rows:                            
    const rowOne = values[0] ===  values[1] && values[0] === values[2] ; 
    const rowTwo = values[3] ===  values[4] && values[3] ===  values[5] ;
    const rowThree = values[6] ===  values[7] && values[6] === values[8];
  // colums:
    const columnA = values[0] === values[3] && values[0] === values[6] ;
    const columnB = values[1] === values[4] && values[1] === values[7] ;
    const columnC = values[2] ===  values[5] && values[2] === values[8];
  // diagonals:
    const diagonalTop = values[0] ===  values[4] && values[0] === values[8] ;
    const diagonalBottom = values[6] === values[4] && values[6] === values[2] ; 

    if (rowOne){
        // console.log(values[0] + ' wins!');
         $('.winner').css('visibility', 'visible');
      } else if (rowTwo) {
        $('.winner').css('visibility', 'visible');
        // console.log(values[3] + ' wins!');
      } else if (rowThree){
        $('.winner').css('visibility', 'visible');
        // console.log(values[6] + ' wins!')
      }  else if (columnA){
        $('.winner').css('visibility', 'visible');
        // console.log(values[0] + ' wins!')
      }  else if (columnB){
        $('.winner').css('visibility', 'visible');
        // console.log(values[1] + ' wins!')
      }  else if (columnC){
        $('.winner').css('visibility', 'visible');
        // console.log(values[2] + ' wins!')
      }  else if (diagonalTop){
        $('.winner').css('visibility', 'visible');
        // console.log(values[0] + ' wins!')
      }  else if (diagonalBottom){
        $('.winner').css('visibility', 'visible');
        // console.log(values[6] + ' wins!')
      }
      
  };

  let draw = function (){
    

  }

  
     

