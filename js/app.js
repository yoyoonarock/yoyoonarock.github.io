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

  /* For synchronization purposes */
  





/* Home Page - index.html */

  $('#developer').mouseover(function() {
    $(this).text("Coming Soon!");
  });

  $('#developer').mouseleave(function() {
    $(this).text("Meet the Developer");
  });

  $('#performer').mouseover(function() {
    $(this).text("Coming Soon!");
  });

  $('#performer').mouseleave(function() {
    $(this).text("Meet the Performer");
  });



/* Developer About Me - developer.html */

  $('.slider ul li').click(function(){

    var currentSlide = $('.active-slide');
    var newSlide = $(this);

    if (newSlide.hasClass('slider-aboutme'))
    {
      if (currentSlide.hasClass('aboutme-slide'))
      {
        return;
      }
      else
      {
        currentSlide.fadeOut(500).removeClass('active-slide');

        setTimeout(function(){ 
          $('.aboutme-slide').fadeIn(500).addClass('active-slide');
        }, 500);
      }
    }

    else if (newSlide.hasClass('slider-education'))
    {
      if (currentSlide.hasClass('education-slide'))
      {
        return;
      }
      else
      {
        currentSlide.fadeOut(500).removeClass('active-slide');

        setTimeout(function(){ 
          $('.education-slide').fadeIn(500).addClass('active-slide');
        }, 500);
      }
    }

    else if (newSlide.hasClass('slider-coursework'))
    {
      if (currentSlide.hasClass('coursework-slide'))
      {
        return;
      }
      else
      {
        currentSlide.fadeOut(500).removeClass('active-slide');

        setTimeout(function(){ 
          $('.coursework-slide').fadeIn(500).addClass('active-slide');
        }, 500);
      }
    }

    else if (newSlide.hasClass('slider-skills'))
    {
      if (currentSlide.hasClass('skills-slide'))
      {
        return;
      }
      else
      {
        currentSlide.fadeOut(500).removeClass('active-slide');

        setTimeout(function(){ 
          $('.skills-slide').fadeIn(500).addClass('active-slide');
        }, 500);
      }
    }

    $('.slider ul li').removeClass('active-block');
    $(this).addClass('active-block');

    count = 0;
  });





  $(document).keydown(function(event){

    if (event.which === 39)
    {
      var currentSlide = $('.active-slide');
      var nextSlide = currentSlide.next();

      var currentBlock = $('.active-block');
      var nextBlock = currentBlock.next();

      if (nextSlide.length === 0)
      {
        nextSlide = $('.slide').first();
        nextBlock = $('.slider ul li').first();
      }

      currentSlide.fadeOut(500).removeClass('active-slide');

      setTimeout(function(){ 
        nextSlide.fadeIn(500).addClass('active-slide');
      }, 500);

      currentBlock.removeClass('active-block');
      nextBlock.addClass('active-block');
    }
    else if (event.which === 37)
    {
      var currentSlide = $('.active-slide');
      var prevSlide = currentSlide.prev();

      var currentBlock = $('.active-block');
      var prevBlock = currentBlock.prev();

      if (prevSlide.length === 0)
      {
        prevSlide = $('.slide').last();
        prevBlock = $('.slider ul li').last();
      }

      currentSlide.fadeOut(500).removeClass('active-slide');

      setTimeout(function(){ 
        prevSlide.fadeIn(500).addClass('active-slide');
      }, 500);

      currentBlock.removeClass('active-block');
      prevBlock.addClass('active-block');
    }

  });















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




  



/* Work Experience - experience.html*/


  $('.side-menu ul li').mouseover(function(){
    $(this).addClass('active-ds');
  });

  $('.side-menu ul li').mouseleave(function(){
    $(this).removeClass('active-ds');
  });


  $('.side-menu ul li').click(function(){
    $('.side-menu ul li').removeClass('bold');
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