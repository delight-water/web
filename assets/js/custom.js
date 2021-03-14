// equal heights
/*var maxHeight = 0;

$("div.oe1").each(function(){
    if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
});

$("div.oe1").height(maxHeight);*/

//AOS.init();


/*  water ripple */

/*$(".rippleContent").ripples({
    resolution: 1024,
    dropRadius: 20,
    interactive: true,
    perturbance: 0.02,
});*/

$(document).ready(function(){
    /*$("#sendEmail").on('click', function(){
        Email.send({
            SecureToken : "29cf02a9-f6a1-4668-b9ae-b693a6d22893",
            To : 'maheshkcot95@gmail.com',
            From : "noreply@delightwatersolutions.com",
            Subject : "This is the subject",
            Body : "And this is the body"
        }).then(
            message => alert(message)
        );
    })*/

})



var form = document.getElementById("contactForm");

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        status.innerHTML = "<div class='alert alert-success'>Thanks for your submission!</div>";
        $('.formContent').addClass('hidden');
        form.reset()
    }).catch(error => {
        status.innerHTML = "<div class='alert alert-danger'>Oops, Something went wrong!</div>"
    });
}
form.addEventListener("submit", handleSubmit)

