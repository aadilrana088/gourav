$(document).ready(function () {
    $('#contact-form').on('submit', function (e) {
        e.preventDefault();
        if ($("#contact-form [name='txtName']").val() === '') {
            $("#contact-form [name='txtName']").css(
                'border',
                '1px solid red'
            );
        } else if ($("#contact-form [name='txtEmail']").val() === '') {
            $("#contact-form [name='txtEmail']").css(
                'border',
                '1px solid red'
            );
        } else if ($("#contact-form [name='txtPhone']").val() === '') {
            $("#contact-form [name='txtPhone']").css(
                'border',
                '1px solid red'
            );
        } else {
            $('#loading-img').css('display', 'block');
            var sendData = $(this).serialize();
            $.ajax({
                type: 'POST',
                url: 'get_response.php',
                data: sendData,
                success: function (data) {
                    $('#loading-img').css('display', 'none');
                    $('.response_msg').text(data);
                    $('.response_msg').slideDown().fadeOut(3000);
                    $('#contact-form')
                        .find('input[type=text], input[type=email],input[type=number], textarea')
                        .val('');
                },
            });
        }
    });
    $('#contact-form input').blur(function () {
        var checkValue = $(this).val();
        if (checkValue != '') {
            $(this).css('border', '1px solid #eeeeee');
        }
    });
});
