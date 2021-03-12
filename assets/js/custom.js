// equal heights
/*var maxHeight = 0;

$("div.oe1").each(function(){
    if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
});

$("div.oe1").height(maxHeight);*/




/*  water ripple */

$(".rippleContent").ripples({
    resolution: 1024,
    dropRadius: 20,
    interactive: true,
    perturbance: 0.02,
});

$(document).ready(function(){
    $("#sendEmail").on('click', function(){
        Email.send({
            SecureToken : "c6c3c7b6-887a-49f4-ae50-bba7332c2014",
            To : 'maheshkcot95@gmail.com',
            From : "info@delightwatersolutions.com",
            Subject : "This is the subject",
            Body : "And this is the body"
        }).then(
            message => alert(message)
        );
    })
})