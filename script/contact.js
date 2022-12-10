$("#submit").click(function(){

    let name = $("#name").val();
    let lastname = $("#lastname").val();
    let email = $("#email").val();
    let phone = $("#phone").val();
    let subject = $("#subject").val();
    let message = $("#message").val();

    if(name == '' || lastname == '' || email == '' || phone == '' || subject == '' || message == ''){
        swal({
            title: "Fields Empty!!!",
            text: "Please fill in the name, lastname, email, phone, subject and message fields.",
            icon: "warning",
            button: "Ok",
          });
    } else {
        swal({
            title: "Succesfully sent!",
            text: "Your message has been sent by mail, you will soon receive an answer through your contacts.",
            icon: "success",
            button: "Ok",
          });
    }
});