// Маска ввода
$(() => {
	$('input[type=tel]').inputmask('+7 (999) 999-99-99')


	$('body').on('click', '.modal_link', function (e) {
	    e.preventDefault()
        let text  = $(this).text();
        $("#callback_modal .modal_title").text(text);
	    $.fancybox.close(true)

	    $.fancybox.open({
	        src: $(this).data('content'),
	        type: 'inline',
	        touch: false
	    })
	})


  	$("form").submit(function() {
        // Получение ID формы
        var formID = $(this).attr('id');
        // Добавление решётки к имени ID
        var formNm = document.getElementById(formID);
        $.ajax({
            type: "POST",
            url: 'send.php',
            data: new FormData(formNm),
            processData: false,
            contentType: false,
            beforeSend: function() {
                // Вывод текста в процессе отправки
                //$(formNm).html('<p style="text-align:center">Отправка...</p>');
            },
            success: function(data) {
                // Вывод текста результата отправки
                //$(formNm).html('<p style="text-align:center">' + data + '</p>');
                 $.fancybox.close(true)
			    $.fancybox.open({
			        src: "#callback__modal2",
			        type: 'inline',
			        touch: false
			    })
			    $(formNm).trigger('reset');

            },
            error: function(jqXHR, text, error) {
                // Вывод текста ошибки отправки
                //$(formNm).html(error);
            }
        });
        return false;
    });


})


function handleFiles(file) {
    const fileList = file;
    $(".upload-file__text").text(fileList[0]["name"]);
}