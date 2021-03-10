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