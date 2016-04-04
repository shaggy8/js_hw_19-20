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
      'width': '9px',
      'height': '9px',
      'border': '3px solid white',
      'background': '#001d1d',
    });
    

    $('.slider').on('click.color', function(event) {
      var $target = $(event.target);
      var $pages = $('.slider__paginator__item');

      if ($target.is('.slider__paginator__item')) {
        $pages.css({'background': ''});
        $target.css({
          'width': '9px',
          'height': '9px',
          'border': '3px solid white',
          'background': '#001d1d',
        });
      }
      return;
    });
  });

});