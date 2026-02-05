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

$(".found-tab-item").on("click", function(){
  $(this).toggleClass("active");
})

const thumbsSwiper = new Swiper('.thumbs-slider', {
  slidesPerView: 4,
  spaceBetween: 12,
  watchSlidesProgress: true,
});

const mainSwiper = new Swiper('.main-slider', {
  spaceBetween: 10,
  thumbs: {
    swiper: thumbsSwiper,
  },
});

$(".options .info").on("click", function(e){
  e.stopPropagation();

  // Закрыть все открытые tooltip кроме текущего
  $(".tooltip2.open").not($(this).find(".tooltip2")).removeClass("open").appendTo(".info");

  let tooltip = $(this).find(".tooltip2");

  // Если tooltip уже открыт — просто закрываем
  if (tooltip.hasClass("open")) {
    tooltip.removeClass("open").appendTo(".info");
    return;
  }

  // Переносим в body
  $("body").append(tooltip);

  let offset = $(this).offset();
  let tooltipWidth = tooltip.outerWidth();
  let windowWidth = $(window).width();

  let left = offset.left;

  // Проверка, чтобы tooltip не уходил за правый край
  if (left + tooltipWidth > windowWidth - 10) { 
    left = windowWidth - tooltipWidth - 10;
  }

  tooltip.css({
    position: "absolute",
    top: offset.top + $(this).outerHeight() + 5,
    left: left,
    zIndex: 9999
  });

  tooltip.addClass("open");
});

// Клик вне tooltip закрывает его
$(document).on("click", function(){
  $(".tooltip2.open").removeClass("open").appendTo(".info");
});


});
