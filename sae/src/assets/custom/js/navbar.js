import * as $ from 'jquery';

$('#logoText').hover(
    function () {
        $(this).attr('src', 'assets/images/logoText-black.png');
    },
    function () {
        $(this).attr('src', 'assets/images/logoText-white.png');
    }
);

var dropDownHidden = true;
$('.dropdown-links').click(function () {
    if (dropDownHidden) {
        $('#nav').animate({ height: '300px' }, {
            duration: 100, complete: function () {
                $('#hidden-links').css({ 'display': 'block' });
                $('#hidden-links').animate({ opacity: '1' }, 250);
            }
        });
        $('#hamburger').animate({ top: '15px' }, { duration: 100, queue: false });
        dropDownHidden = false;
    } else {
        $('#hidden-links').animate({ opacity: '0' }, {
            duration: 50, complete: function () {
                $('#hidden-links').css({ 'display': 'none' });
                $('#hamburger').animate({ top: '-3px' }, { duration: 100, queue: false });
                $('#nav').animate({ height: '60px' }, 100);
            }
        });

        dropDownHidden = true;
    }
});

$(document).ready(function () {
    $('body').animate({ opacity: "1" }, { duration: 500 });
});
