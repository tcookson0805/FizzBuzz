$(document).ready(function(){
  
  $('body').on('click', 'button', function(){

    for(var i = 1; i <= 100; i++){
      if(i % 3 === 0 && i % 5 === 0){
        $('ul').append('FizzBuzz<br>')
      }else if(i % 3 === 0){
        $('ul').append('Fizz<br>')
      }else if (i % 5 === 0) {
        $('ul').append('Buzz<br>')
      }else{
        $('ul').append(i + '<br>')
      }
    }
  })
   
});


