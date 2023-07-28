function SendEmail(body)
{
    console.log("asd")
    var sub = document.getElementById("subject").value;
    var name = document.getElementById("name").value;
    var mail = document.getElementById("email").value;
    var msg = document.getElementById("message").value;

   // window.location.href = "mailto:mikolajpotera@gmail.com?subject=" + sub + "&body" + body;
    window.location.href = "mailto:mikolajpotera@gmail.com?subject=qwe";
}