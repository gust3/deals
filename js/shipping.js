$(function(){

    // Не советую тут ничего трогать, все написанно с умом, и при вмешательстве может поламаться!

    $('.pagSmall').children('ol').children('li').click(function(e){

        var clicked = $(e.target);          // Учимся делегировать события... =), Это полезно =)

        if(!clicked.hasClass('nonClick')){
            $('.pagSmall').children('ol').children('li').removeClass('activePoint');
            $(clicked).addClass('activePoint')
        }
    });

    $('.slct').click(function (e) {
        /* Заносим выпадающий список в переменную */
        var dropBlock = $(e.target).parent().find('.drop');

        /* Делаем проверку: Если выпадающий блок скрыт то делаем его видимым*/
        if (dropBlock.is(':hidden')) {
            dropBlock.slideDown(80);

            /* Выделяем ссылку открывающую select */
            $(this).addClass('active');

            /* Работаем с событием клика по элементам выпадающего списка */
            $('.drop').find('li').click(function () {

                /* Заносим в переменную HTML код элемента
                 списка по которому кликнули */
                var selectResult = $(this).html();
                var selectValue  = $(this).children('a').attr('href');

                /* Находим наш скрытый инпут и передаем в него
                 значение из переменной selectResult */
                $(this).parent().parent().find('input').val(selectValue);

                /* Передаем значение переменной selectResult в ссылку которая
                 открывает наш выпадающий список и удаляем активность */
                $(this).parent().parent().find('.slct').removeClass('active').html(selectResult);

                /* Скрываем выпадающий блок */
                dropBlock.slideUp(100);
                return false;
            });

            /* Продолжаем проверку: Если выпадающий блок не скрыт то скрываем его */
        } else {
            $(this).removeClass('active');
            dropBlock.slideUp(100);
        }

        /* Предотвращаем обычное поведение ссылки при клике */
        return false;
    });

    //$('.innerWrapperOne').hide();

    $("#panels").children('li:even').css("background","rgba(223,190,242,.8)");

    $('#success').click(function(){
        $('.innerWrapperOne').hide();
        $('.innerWrapperTwo').hide();
        $('.innerWrapperFour').hide();
        $('.innerWrapperFive').hide();
        $('.innerWrapperThree').show();
        $('.innerWrapperSix').hide();
    });
    $('#order').click(function(){
        $('.innerWrapperOne').hide();
        $('.innerWrapperTwo').show();
        $('.innerWrapperFour').hide();
        $('.innerWrapperFive').hide();
        $('.innerWrapperThree').hide();
        $('.innerWrapperSix').hide();
    });

    $('#shipping').click(function(){
        $('.innerWrapperOne').hide();
        $('.innerWrapperTwo').hide();
        $('.innerWrapperFour').show();
        $('.innerWrapperFive').hide();
        $('.innerWrapperThree').hide();
        $('.innerWrapperSix').hide();
    });
    $('#reserve').click(function(){
        $('.innerWrapperOne').hide();
        $('.innerWrapperTwo').hide();
        $('.innerWrapperFour').hide();
        $('.innerWrapperFive').show();
        $('.innerWrapperThree').hide();
        $('.innerWrapperSix').hide();
    });
    $('#payment').click(function(){
        $('.innerWrapperOne').hide();
        $('.innerWrapperTwo').hide();
        $('.innerWrapperFour').hide();
        $('.innerWrapperFive').hide();
        $('.innerWrapperThree').hide();
        $('.innerWrapperSix').show();
    });

});