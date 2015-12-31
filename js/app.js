var main = function () {
  /* Push the body and the nav over by 285px over */
  /*$('.sidebar').mouseover(function() {
    $('.menu').animate({
      left: "0px"
    }, 200);

    $('body').animate({
      left: "285px"
    }, 200);
  });*/

  /* Then push them back */
  /*$('.sidebar').mouseleave(function() {
    $('.menu').animate({
      left: "-285px"
    }, 200);

    $('body').animate({
      left: "0px"
    }, 200);
  });*/







/*


  $('#developer').click(function() {
    window.location.href=
  });



*/



























/*
  $('.has-children').mouseover(function(){
    $(this).addClass('sidebar-box-active');
    $(this).children().addClass('test');

  });

  $('.has-children').mouseleave(function(){
    $(this).removeClass('sidebar-box-active');
  });



  $('.arrow-next').click(function(){
    var currentVideo = $('.active-video');
    var nextVideo = currentVideo.next();

    var currentDot = $('.active-dot');
    var nextDot = currentDot.next();

    if (nextVideo.length === 0)
    {
      nextVideo = $('.video').first();
      nextDot = $('.dot').first();
    }
    currentVideo.fadeOut(600).removeClass('active-video');
    nextVideo.fadeIn(600).addClass('active-video');

    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot');
  });

  $('.arrow-prev').click(function(){
    var currentVideo = $('.active-video');
    var prevVideo = currentVideo.prev();

    var currentDot = $('.active-dot');
    var prevDot = currentDot.prev();

    if (prevVideo.length === 0)
    {
      prevVideo = $('.video').last();
      prevDot = $('.dot').last();
    }
    currentVideo.fadeOut(600).removeClass('active-video');
    prevVideo.fadeIn(600).addClass('active-video');

    currentDot.removeClass('active-dot');
    prevDot.addClass('active-dot');
  });
*/




  $('.arrow-next').click(function () {
    
  });

  $('.arrow-prev').click(function(){
    var currentSlide = $('.active-slide');
    var prevSlide = currentSlide.prev();

    var currentDot = $('.active-dot');
    var prevDot = currentDot.prev();

    if (prevSlide.length === 0)
    {
      prevSlide = $('.slide').last();
      prevDot = $('.dot').last();
    }

    currentSlide.fadeOut(500).removeClass('active-slide');

    setTimeout(function(){ 
      prevSlide.fadeIn(500).addClass('active-slide');
    }, 500);

    currentDot.removeClass('active-dot');
    prevDot.addClass('active-dot');
  });




  $(document).keydown(function(event){
    if (event.which === 39)
    {
      $('.arrow-next').click();
    }
    else if (event.which === 37)
    {
      $('.arrow-prev').click();
    }
  });






  $('.experience-menu li').mouseover(function(){
    $(this).addClass('active-ds');
  });

  $('.experience-menu li').mouseleave(function(){
    $(this).removeClass('active-ds');
  });


  $('.experience-menu li').click(function(){
    $('.experience-menu li').removeClass('bold');
    $(this).addClass('bold');
  });








  $('.ds1').click(function(){
    var currentSubBlock = $('.active-subblock');
    var newSubBlock = $('.overview');

    if (currentSubBlock !== newSubBlock)
    {
      currentSubBlock.fadeOut(500).removeClass('active-subblock');
      setTimeout(function(){ 
        newSubBlock.fadeIn(500).addClass('active-subblock');
      }, 500);
    }
  });

  $('.ds2').click(function(){
    var currentSubBlock = $('.active-subblock');
    var newSubBlock = $('.summer2014');

    if (currentSubBlock !== newSubBlock)
    {
      currentSubBlock.fadeOut(500).removeClass('active-subblock');
      setTimeout(function(){ 
        newSubBlock.fadeIn(500).addClass('active-subblock');
      }, 500);
    }
  });

  $('.ds3').click(function(){
    var currentSubBlock = $('.active-subblock');
    var newSubBlock = $('.winter2014');

    if (currentSubBlock !== newSubBlock)
    {
      currentSubBlock.fadeOut(500).removeClass('active-subblock');
      setTimeout(function(){ 
        newSubBlock.fadeIn(500).addClass('active-subblock');
      }, 500);
    }
  });

  $('.ds4').click(function(){
    var currentSubBlock = $('.active-subblock');
    var newSubBlock = $('.summer2015');

    if (currentSubBlock !== newSubBlock)
    {
      currentSubBlock.fadeOut(500).removeClass('active-subblock');
      setTimeout(function(){ 
        newSubBlock.fadeIn(500).addClass('active-subblock');
      }, 500);
    }
  });

  $('.ds5').click(function(){
    var currentSubBlock = $('.active-subblock');
    var newSubBlock = $('.winter2015');

    if (currentSubBlock !== newSubBlock)
    {
      currentSubBlock.fadeOut(500).removeClass('active-subblock');
      setTimeout(function(){ 
        newSubBlock.fadeIn(500).addClass('active-subblock');
      }, 500);
    }
  });


};

$(document).ready(main);