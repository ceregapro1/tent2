
$(document).ready(function(){

// mob nav
    $('.open-menu').click(function(){
        $('.aside--lk').addClass('active');
        $('.overlay--lk').addClass('active');
    });
    $('.overlay--lk').click(function(){
        $('.aside--lk').removeClass('active');
        $('.overlay--lk').removeClass('active');
    });


// niceSelect
    $('select').niceSelect();


    // $('select').niceSelect();
    $.fn.allTheClasses = function() {
        return this[0].className.split(' ').slice(1,this[0].length);
    }
    $('.nice-select .option').click(function () {
        var newClass = $(this).allTheClasses();
        $(this).parents('.nice-select').find('.current').attr('class', 'current ' + newClass);
    });


    tippy('[data-tippy-content]', {
        theme: 'light',
        animation: 'scale',
        maxWidth: 220
    });

    tippy('.social-list__btn--other', {
        theme: 'light',
        animation: 'scale',
        maxWidth: 275,
        trigger: 'click',
        placement: 'left-start',
        content(reference) {
            const id = reference.getAttribute('data-template');
            const template = document.getElementById(id);
            return template.innerHTML;
        },
        allowHTML: true,
    });

    // $('.social-list__btn--other').click(function(){
    //     $('.social-list__drop').toggleClass('active');
    // });

    if (is_touch_device()) {
        let ts

        $('body').on('touchstart', (e) => { ts = e.originalEvent.touches[0].clientX; })

        $('body').on('touchend', (e) => {
            let te = e.originalEvent.changedTouches[0].clientX    

            if (ts > te + 50) {               
                $('.aside--lk').removeClass('active');
                $('.overlay--lk').removeClass('active');
            } else if (ts < te - 50) {

            }
        })
    }

});


const is_touch_device = () => !!('ontouchstart' in window)