document.addEventListener('DOMContentLoaded', () => {
    //Navbar js
    !(function (e) {
        e.fn.menumaker = function (n) {
            var s = e(this),
                i = e.extend({ format: 'dropdown', sticky: !1 }, n);
            return this.each(function () {
                return (
                    s.find('li ul').parent().addClass('has-sub'),
                    (multiTg = function () {
                        s
                            .find('.has-sub')
                            .prepend('<span class="submenu-button"></span>'),
                            s.find('.has-sub a').on('click', function () {
                                e(this)
                                    .siblings('.submenu-button')
                                    .toggleClass('submenu-opened'),
                                    (e(this).siblings('ul').hasClass('open')
                                        ? e(this)
                                              .siblings('ul')
                                              .removeClass('open')
                                        : e(this)
                                              .siblings('ul')
                                              .addClass('open')
                                    ).slideToggle();
                            });
                        s.find('.submenu-button').on('click', function () {
                            e(this).toggleClass('submenu-opened'),
                                (e(this).siblings('ul').hasClass('open')
                                    ? e(this).siblings('ul').removeClass('open')
                                    : e(this).siblings('ul').addClass('open')
                                ).slideToggle();
                        });
                    }),
                    'multitoggle' === i.format
                        ? multiTg()
                        : s.addClass('dropdown'),
                    !0 === i.sticky && s.css('position', 'fixed'),
                    (resizeFix = function () {
                        1e3 < e(window).width() && s.find('ul').show(),
                            e(window).width() <= 1e3 &&
                                s.find('ul').hide().removeClass('open');
                    }),
                    resizeFix(),
                    e(window).on('resize', resizeFix)
                );
            });
        };
    })(jQuery),
        (function (n) {
            n(document).ready(function () {
                n('#cssmenu').menumaker({ format: 'multitoggle' });
            });
        })(jQuery);
    // Footer js
    $(document).on('click', '.showmore_list', function () {
        var s = $(this).children();
        console.log(s),
            $(this).hasClass('extraHidden')
                ? ($(this).removeClass('extraHidden').addClass('extraVisible'),
                  $(this).find('a').html('Show less'),
                  $(this)
                      .prevAll('li.read-more-target')
                      .css('display', 'block'))
                : ($(this).removeClass('extraVisible').addClass('extraHidden'),
                  $(this).find('a').html('Show more'),
                  $(this)
                      .prevAll('li.read-more-target')
                      .css('display', 'none'));
    });
    //Lazy loading js
    var lazyImages = [].slice.call(document.querySelectorAll('img.lazy'));
    if ('IntersectionObserver' in window) {
        let t = new IntersectionObserver(function (e, r) {
            e.forEach(function (r) {
                if (r.isIntersecting) {
                    let e = r.target;
                    (e.src = e.dataset.src),
                        e.classList.remove('lazy'),
                        t.unobserve(e);
                }
            });
        });
        lazyImages.forEach(function (e) {
            t.observe(e);
        });
    }
    //Navbar toggle js
    function classToggle() {
        const e = document.querySelector('.navbar nav'),
            o = document.querySelector('#navbar-toggle');
        e.classList.toggle('navbar__ToggleShow'),
            o.classList.toggle('hamburger');
    }
    document
        .querySelector('.navbar__Link-toggle')
        .addEventListener('click', classToggle);
});
//Navbar sticky
$(window).on('scroll', function () {
    if ($(this).scrollTop() > 100) {
        $('.navbar').addClass('is-sticky');
    } else {
        $('.navbar').removeClass('is-sticky');
    }
});
// Scroll-to-top
$(window).on('scroll', function () {
    var scrolled = $(window).scrollTop();
    if (scrolled > 300) $('.go-top').addClass('active');
    if (scrolled < 300) $('.go-top').removeClass('active');
});
$('.go-top').on('click', function () {
    $('html, body').animate({ scrollTop: '0' }, 500);
});
$('.accordion')
    .find('.accordion-title')
    .on('click', function () {
        $(this).toggleClass('active');
        $(this).next().slideToggle('fast');
        $('.accordion-content').not($(this).next()).slideUp('fast');
        $('.accordion-title').not($(this)).removeClass('active');
    });
// const counterStart = () => {
//     const counters = document.querySelectorAll('.counting');
//     const speed = 200;

//     counters.forEach((counter) => {
//         const animate = () => {
//             const value = +counter.getAttribute('counter_value');
//             const data = +counter.innerText;

//             const time = value / speed;
//             if (data < value) {
//                 counter.innerText = Math.ceil(data + time);
//                 setTimeout(animate, 1);
//             } else {
//                 counter.innerText = value;
//             }
//         };

//         animate();
//     });
// };
// define an observer instance
// var observer = new IntersectionObserver(onIntersection, {
//     root: null, // default is the viewport
//     threshold: 0.5, // percentage of target's visible area. Triggers "onIntersection"
// });

// // callback is called on intersection change
// function onIntersection(entries, opts) {
//     entries.forEach((entry) =>
//         entry.target.classList.add('visible', entry.isIntersecting)
//     );
// }

// // Use the observer to observe an element
// observer.observe(document.querySelector('#counter'));

// // To stop observing:
// // observer.unobserve(entry.target)
class CountUp {
    constructor(triggerEl, counterEl) {
        const counter = document.querySelector(counterEl);
        const trigger = document.querySelector(triggerEl);
        let num = 0;

        const countUp = () => {
            if (num <= counter.dataset.stop) ++num;
            counter.textContent = num;
        };

        const observer = new IntersectionObserver(
            (el) => {
                if (el[0].isIntersecting) {
                    const interval = setInterval(() => {
                        num < counter.dataset.stop
                            ? countUp()
                            : clearInterval(interval);
                    }, counter.dataset.speed);
                }
            },
            { threshold: [0] }
        );

        observer.observe(trigger);
    }
}

new CountUp('#counter_start1', '#count_one_1');
new CountUp('#counter_start1', '#count_one_2');
new CountUp('#counter_start1', '#count_one_3');
new CountUp('#counter_start1', '#count_one_4');

$(document).on('click', '.services_read', function () {
    var s = $(this).children();
    $(this).hasClass('extraHidden')
        ? ($(this).removeClass('extraHidden').addClass('extraVisible'),
          $(this).find('span').html('Read less'),
          $(this)
              .prev('p')
              .find('.services_more')
              .css('display', 'inline-block'))
        : ($(this).removeClass('extraVisible').addClass('extraHidden'),
          $(this).find('span').html('Read more'),
          $(this).prev('p').find('.services_more').css('display', 'none'));
});
