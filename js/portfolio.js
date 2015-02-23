$(function() {

  var projects = ['les_trois_sports',
  'ptero',
  'i_talk_fast',
  'portland_826',
  'feeling_blue',
  'no339',
  'woodward_dream_cruise',
  'lets_meet',
  'very',
  'exquisite_maeda',
  '52_by_68',
  'draw_click_loop'];

  var pathName = window.location.pathname;
  console.log(pathName);


  for(var i=0; i<projects.length; i++) {
    if(pathName.indexOf(projects[i]) != -1) {

      var next = projects[(i + 1) % projects.length]
      var indexPrev = i-1;
      if(i-1 < 0) {
        indexPrev = projects.length - 1;
      }
      var prev = projects[indexPrev]
      console.log(next);
      console.log(prev);
      $('.left-nav a').attr('href', '../' + prev);
      $('.right-nav a').attr('href','../' + next);
    }

  }



  $(".cover_photos .post-thumbnail").each(function(){
    console.log($(this).css("width"))
    $(this).css("height", $(this).css("width"));
  }); 


  if(pathName.indexOf('projects') == -1) {

    var links = $('.col-md-3 a');
    console.log("links length: ");
    console.log(links.length);
    for(var i = 0; i<links.length; i++) {
      $(links[i]).attr('href', 'projects/' + projects[i]);
      $(links[i]).children('img').attr('src', 'projects/homepage_cover/' +projects[i] +'.jpg');
    }
  }

  var scrollSpeed = 5000;

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, scrollSpeed);
        return false;
      }
    }});

});
