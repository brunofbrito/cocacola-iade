document.addEventListener('DOMContentLoaded', function () {
  $('[data-toggle="popover"]').popover({
    trigger: 'focus',
    placement: 'top',
  });

  if (document.getElementById('glide')) {
    const glide = new Glide('#glide', {
      type: 'carousel',
      perView: 3,
      focusAt: 'center',
      breakpoints: {
        480: {
          perView: 1,
        },
      },
    });

    glide.mount();
  }
});
