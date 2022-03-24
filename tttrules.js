console.log('TTT RULES RULES!!')

let playerOne = true;


const ticktackerButton = $('.ticktackers');
ticktackerButton.on('click', console.log('help', ));

let values = ['0', '1', '2', '3', '4', '5', '6', '7','8'];
// let turn counter = 0 ; count up to 9 = 9 it has to be a tie. 

const draw = function (){
    // for (let i = 0; i < values.length; i++) {
     if (values[0] === '0'){
      //  console.log('do nothing')
    } else if (values[1] === '1'){
      // console.log('do nothing')
    } else if (values[2] === '2'){
        // console.log('do nothing')
    } else if (values[3] === '3'){
          // console.log('do nothing')
    } else if (values[4] === '4'){
            // console.log('do nothing')
    } else if (values[5] === '5'){
              // console.log('do nothing')
    } else if (values[6] === '6'){
                // console.log('do nothing')
    }else if (values[7] === '7'){
                  // console.log('do nothing')
    } else if (values[8] === '8'){
              // console.log('do nothing')
                    } else { return true }

};
// in click function. just add 1++ / add else if. is it [8] or [9]

const buttonClick = function (){
    console.log('im clicked.')
    let result = button.id
    console.log(result);
    return result;
}

function updateValue(ticktackerButton) {
    const boxNotClicked = ticktackerButton.innerText !== 'x' && ticktackerButton.innerText !== 'o';
  
    if (playerOne && boxNotClicked){
  
      ticktackerButton.innerText = 'x';
      values[ticktackerButton.id] = 'x';
      playerOne = !playerOne;
      console.log(values);
      checkWin(values);
      // draw();
  
    } else if (boxNotClicked){
   
      ticktackerButton.innerText = 'o'
      values[ticktackerButton.id] = 'o';
      console.log(values)
      playerOne = !playerOne;
      checkWin(values);
      // draw();
    } 
    
  
}


const ticktackers = [...document.getElementsByClassName('ticktackers')];
// console.log('------ ticktackers: ', ticktackers);

function updateButtonValue() {
        ticktackers.map((ticktackerButton) => {
        ticktackerButton.addEventListener("click", () => updateValue(ticktackerButton));
        ticktackerButton.addEventListener("click", () => console.log('I clicked: ', ticktackerButton.id));
//removeBox
        document.getElementById('0').addEventListener("click", () => $('#zero').css('visibility', 'hidden'));
        document.getElementById('1').addEventListener("click", () => $('#one').css('visibility', 'hidden'));
        document.getElementById('2').addEventListener("click", () => $('#two').css('visibility', 'hidden'));
        document.getElementById('3').addEventListener("click", () => $('#three').css('visibility', 'hidden'));
        document.getElementById('4').addEventListener("click", () => $('#four').css('visibility', 'hidden'));
        document.getElementById('5').addEventListener("click", () => $('#five').css('visibility', 'hidden'));
        document.getElementById('6').addEventListener("click", () => $('#six').css('visibility', 'hidden'));
        document.getElementById('7').addEventListener("click", () => $('#seven').css('visibility', 'hidden'));
        document.getElementById('8').addEventListener("click", () => $('#eight').css('visibility', 'hidden'));
//removeShadow
        document.getElementById('0').addEventListener("click", () => $('#shadowZero').css('visibility', 'hidden'));
        document.getElementById('1').addEventListener("click", () => $('#shadowOne').css('visibility', 'hidden'));
        document.getElementById('2').addEventListener("click", () => $('#shadowTwo').css('visibility', 'hidden'));
        document.getElementById('3').addEventListener("click", () => $('#shadowThree').css('visibility', 'hidden'));
        document.getElementById('4').addEventListener("click", () => $('#shadowFour').css('visibility', 'hidden'));
        document.getElementById('5').addEventListener("click", () => $('#shadowFive').css('visibility', 'hidden'));
        document.getElementById('6').addEventListener("click", () => $('#shadowSix').css('visibility', 'hidden'));
        document.getElementById('7').addEventListener("click", () => $('#shadowSeven').css('visibility', 'hidden'));
        document.getElementById('8').addEventListener("click", () => $('#shadowEight').css('visibility', 'hidden'));
       
      
  
  })
}

let moBoxesMoShadows = function (){
  //removeBox
  $('.cube').css('visibility', 'hidden');
  $('.cube_shadow').css({'visibility': 'hidden', 'transition': 'none'});
  //i want to slow the text down
  // $('#0').text('T');
  $("#0").fadeOut(function() {
    $(this).text("T").fadeIn(4000);
  });
  $('#0').css({'color': 'red', 'transition': '2s'})
  // $('#1').text('I');
  $("#1").fadeOut(function() {
    $(this).text("I").fadeIn(5000);
  });
  $('#1').css({'color': '#fc03a1', 'transition': '1s'})
  // $('#2').text('C');
  $("#2").fadeOut(function() {
    $(this).text("C").fadeIn(6000);
  });
  $('#2').css({'color': '#fc5e03', 'transition': '2s'})

  // $('#3').text('T');  
  $("#3").fadeOut(function() {
  $(this).text("T").fadeIn(4000);
});
  $('#3').css({'color': '#fca903', 'transition': '2s'})

  // $('#4').text('A');
  $("#4").fadeOut(function() {
    $(this).text("A").fadeIn(5000);
  });
  $('#4').css({'color': '#39fc03', 'transition': '2s'})

  // $('#5').text('C');
  $("#5").fadeOut(function() {
    $(this).text("C").fadeIn(6000);
  });
  $('#5').css({'color': '#03fcd7', 'transition': '2s'})

  // $('#6').text('T');
  $("#6").fadeOut(function() {
    $(this).text("T").fadeIn(4000);
  });
  $('#6').css({'color': 'skyblue', 'transition': '2s'})

  // $('#7').text('0');
  $("#7").fadeOut(function() {
    $(this).text("O").fadeIn(5000);
  });
  $('#7').css({'color': 'orange', 'transition': '2s'})

  // $('#8').text('E');
  $("#8").fadeOut(function() {
    $(this).text("E").fadeIn(6000);
  });
  $('#8').css({'color': 'pink', 'transition': '2s'})
  };


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
  //DRAW:
  

    if (rowOne){
        // console.log(values[0] + ' wins!');
         $('.winner').css('visibility', 'visible');
         $('.winner').text(values[0] + ' wins!');
         moBoxesMoShadows();

      } else if (rowTwo) {
        $('.winner').css('visibility', 'visible');
        $('.winner').text(values[3] + ' wins!');
        moBoxesMoShadows();
      } else if (rowThree){
        $('.winner').css('visibility', 'visible');
        $('.winner').text(values[6] + ' wins!');
        moBoxesMoShadows();
      }  else if (columnA){
        $('.winner').css('visibility', 'visible');
        $('.winner').text(values[0] + ' wins!');
        moBoxesMoShadows();
      }  else if (columnB){
        $('.winner').css('visibility', 'visible');
        $('.winner').text(values[1] + ' wins!');
        moBoxesMoShadows();
      }  else if (columnC){
        $('.winner').css('visibility', 'visible');
        $('.winner').text(values[2] + ' wins!');
        moBoxesMoShadows();
      }  else if (diagonalTop){
        $('.winner').css('visibility', 'visible');
        $('.winner').text(values[0] + ' wins!');
         moBoxesMoShadows();
      }  else if (diagonalBottom){
        $('.winner').css('visibility', 'visible');
        $('.winner').text(values[6] + ' wins!');
        moBoxesMoShadows();
      } else if ( draw()){
        $('.winner').css('visibility', 'visible');
        $('.winner').text('Draw!');
        //draw sad colors. sorry ran out of time
        $("#0").fadeOut(function() {
          $(this).text("G").fadeIn(4000);
        });
        $('#0').css({'color': 'blue', 'transition': '2s'})
        // $('#1').text('I');
        $("#1").fadeOut(function() {
          $(this).text("A").fadeIn(4000);
        });
        $('#1').css({'color': 'blue', 'transition': '2s'})
        // $('#2').text('C');
        $("#2").fadeOut(function() {
          $(this).text("M").fadeIn(4000);
        });
        $('#2').css({'color': 'blue', 'transition': '2s'})
      
        // $('#3').text('T');  
        $("#3").fadeOut(function() {
        $(this).text("E").fadeIn(4000);
      });
        $('#3').css({'color': 'blue', 'transition': '2s'})
      
        // $('#4').text('A');
        $("#4").fadeOut(function() {
          $(this).text("O").fadeIn(4000);
        });
        $('#4').css({'color': 'red', 'transition': '2s'})
      
        // $('#5').text('C');
        $("#5").fadeOut(function() {
          $(this).text("V").fadeIn(4000);
        });
        $('#5').css({'color': 'red', 'transition': '2s'})
      
        // $('#6').text('T');
        $("#6").fadeOut(function() {
          $(this).text("E").fadeIn(4000);
        });
        $('#6').css({'color': 'red', 'transition': '2s'})
      
        // $('#7').text('0');
        $("#7").fadeOut(function() {
          $(this).text("R").fadeIn(5000);
        });
        $('#7').css({'color': 'red', 'transition': '2s'})
      
        // $('#8').text('E');
        $("#8").fadeOut(function() {
          $(this).text(".").fadeIn(6000);
        });
        $('#8').css({'color': 'pink', 'transition': '2s'})
        };
      };
       
    
  
// };
  
     

