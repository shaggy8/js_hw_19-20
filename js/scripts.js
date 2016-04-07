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


    if ( $target.is('.opened') ||
        !$target.is('.banners__accordion-panel, .banners__accordion-panel-icon') ) return;


    var $panels = $('.banners__accordion-panel');
    var $panelIcons = $('.banners__accordion-panel-icon');
    var $textBlocks = $('.banners__accordion-text');
    var $panelOpened = $('.banners__accordion-panel.opened');
    var $panelIconOpened = $('.banners__accordion-panel-icon.opened');
    var targetNum;
    var openedNum = $panels.index($panelOpened);
    var easing;

    if ($target.hasClass('banners__accordion-panel')) {
      targetNum = $panels.index($target);
    } else {
      targetNum = $panelIcons.index($target);
    }

    if (targetNum < openedNum) {
      easing = 'easeOutBounce';
    } else {
      easing = 'easeOutQuart';
    }


    $panelIconOpened.text('+');
    $panels.removeClass('opened');
    $panelIcons.removeClass('opened');
    $textBlocks.slideUp('slow', easing);

    $panelIcons.eq(targetNum).text('-');
    $panels.eq(targetNum).addClass('opened');
    $panelIcons.eq(targetNum).addClass('opened');
    $textBlocks.eq(targetNum).slideDown('slow', easing);
  });

});