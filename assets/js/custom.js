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
            SecureToken : "29cf02a9-f6a1-4668-b9ae-b693a6d22893",
            To : 'maheshkcot95@gmail.com',
            From : "noreply@delightwatersolutions.com",
            Subject : "This is the subject",
            Body : "And this is the body"
        }).then(
            message => alert(message)
        );
    })
})