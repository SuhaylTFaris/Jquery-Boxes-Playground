$(document).on('ready',function(){
  $('.boxType1').append("<a href='https://students.galvanize.com/'>Galvanize</a>");

  $('a').on('click',function(event){
    event.preventDefault();
    alert('You will not leave this page!');
  });

  $('.box').on('click',function(event){
  $(this).append("<img src='http://dreamatico.com/data_images/dog/dog-7.jpg'>");
  $('img').css({'height':'90%','width':'90%'});
});

$('.box').on('click','img',function(event){
  event.stopPropagation();
  $(this).remove();
});

$('#container').on('click',function(event){
  var target = event.target;
  console.log(target);
  if(this.id === 'container'){
    $(this).css('background-color','limegreen');
  }
  console.log($(this));
  if($(target).hasClass('box')){
    console.log('if');
    $(target).css('background-color','white');
    $(this).css('background-color','black');
  }
});
});
