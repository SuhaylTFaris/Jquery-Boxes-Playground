$(document).on('ready',function(){
  $('.boxType1').append("<a href='https://students.galvanize.com/'>Galvanize</a>");

  $('a').on('click',function(event){
    event.preventDefault();
    alert('You will not leave this page!');
  });

  
