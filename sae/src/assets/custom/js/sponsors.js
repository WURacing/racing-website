var inFixedPos = false;
$(document).scroll(function () {
    if ($(document).scrollTop() > 80 && inFixedPos == false) {
        inFixedPos = true;
        $('#sponsorship-packet').css({
            "position": "fixed",
            "marginTop": "-40px",
            "transition": "none",
            "-webkit-transition": "none"
        });
        $('.content').css({
            "margin-top": "100px"
        });
        $('#sponsorship-packet').animate({ marginTop: '0px' }, {
            duration: 150, complete: function () {
                $('#sponsorship-packet').css({
                    "transition": ".1s",
                    "-webkit-transition": ".1s"
                });
            }
        });
    }
    else if ($(document).scrollTop() == 0 && inFixedPos == true) {
        $('#sponsorship-packet').css({
            "position": "relative"
        });
        $('.content').css({
            "margin-top": "60px"
        });
        inFixedPos = false;
    }
});

// $('#sponsorship-packet').hover(function () {
//     $('#sponsorship-packet').animate({ height: '50px' }, {
//         duration: 300, complete: function () {

//         }
//     });
// });