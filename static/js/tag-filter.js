$(function () {
  var $switches = $('.tag-switch');
  var $items = $('.portfolio-item');

  $switches.on('click', function () {
    var tag = $(this).data('tag');
    $switches.removeClass('tag-switch--active');
    $(this).addClass('tag-switch--active');

    if (tag === 'all') {
      $items.show();
    } else {
      $items.each(function () {
        var tags = ($(this).data('tags') || '').toString().split(',');
        $(this).toggle(tags.indexOf(tag) !== -1);
      });
    }
  });
});
