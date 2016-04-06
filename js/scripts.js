jQuery(function () {

  $('img').load(function() {
    $('.slider').jcarousel();
    $('.slider__paginator').jcarouselPagination({
          item: function() {
              return '<li class="slider__paginator__item"></li>';
          }
      });

    var jcarWidth = {
      jcar: $('.slider').width(),
      pagin: $('.slider__paginator').outerWidth(),
      };

    $('.slider__paginator').css({
      'left': jcarWidth.jcar / 2 - jcarWidth.pagin / 2,
    });
    $('.slider__paginator__item:eq(0)').css({
      'background': '#001d1d'
    });
    

    $('.slider').on('click.color', function(event) {
      var $target = $(event.target);
      var $pages = $('.slider__paginator__item');

      if ($target.is('.slider__paginator__item')) {
        $pages.css({'background': ''});
        $target.css({
          'background': '#001d1d'
        });
      }
      return;
    });
  });


  $('.banners').click(function(event) {
    var $target = $(event.target);
    var $panels = $('.banners__accordion-panel');
    var $panelIcons = $('.banners__accordion-panel-icon');
    var $panelOpened = $('.banners__accordion-panel--opened');
    var $panelOpenedIcon = $('.banners__accordion-panel-icon--opened');

    if ( !$target.is('.banners__accordion-panel') ||
        $target.is('.banners__accordion-panel--opened') ) return;

    $panels.removeClass('banners__accordion-panel--opened');
    $panelOpenedIcon.text('+');
    $panelIcons.removeClass('banners__accordion-panel-icon--opened');

    
  });

});