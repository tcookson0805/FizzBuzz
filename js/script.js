$(document).ready(function(){
  
  var number = prompt('Please supply a number')
  
  var fn = function(givenNumber){
    for(var i = 1; i <= givenNumber; i++){
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
  };
  
  
  $('body').on('click', 'button', function(){
    fn(number);
  });
   
});


