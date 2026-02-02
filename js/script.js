$(document).ready(function () {

    const reviewSwiper = new Swiper('.review-slider', {
        spaceBetween: 30,
      
        slidesPerView: 3, // desktop по умолчанию
        loop: true,
        loopAdditionalSlides: 3,
        speed: 800,
        navigation: {
          nextEl: '.review-next',
          prevEl: '.review-prev',
        },
    
        breakpoints: {
          0: {
            slidesPerView: 1, // <768
          },
          768: {
            slidesPerView: 2, // 768–1023
          },
          1024: {
            slidesPerView: 3, // >=1024
          }
        }
      });

      const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const head = item.querySelector('.faq-head');
  const body = item.querySelector('.faq-body');

  head.addEventListener('click', () => {
    // закрываем все остальные
    faqItems.forEach(el => {
      if (el !== item) {
        el.classList.remove('active');
        el.querySelector('.faq-body').style.maxHeight = null;
      }
    });

    // переключаем текущий
    item.classList.toggle('active');

    if (item.classList.contains('active')) {
      body.style.maxHeight = body.scrollHeight + 'px';
    } else {
      body.style.maxHeight = null;
    }
  });
});

$(".drop-menu").click(function () {
  $(this).toggleClass("is-active");
  $(".menu-wrap").toggleClass("open");
  $("body, html").toggleClass("overflow");
  $(".header.header-bg").toggleClass("no-radius");
});

document.addEventListener('click', function (e) {
  const icon = e.target.closest('.tooltip-icon');
  const tooltips = document.querySelectorAll('.tooltip-info');


  tooltips.forEach(t => t.classList.remove('open'));

  if (icon) {
    const tooltip = icon.closest('.img-wrap').querySelector('.tooltip-info');

    if (tooltip) {
      tooltip.classList.add('open');
    }

    e.stopPropagation();
  }
});

});
