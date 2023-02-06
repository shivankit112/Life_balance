document.querySelector(".submit").addEventListener("click", () => {
    console.log("clicked");
    let name = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    emailjs.send("service_mmczqir", "template_hdmrcxx", {
        fullname: name,
        email: email,
        phone: phone

    }).then((res) => {
        console.log(res);
        window.location.href = "/";
    }).catch((error) => console.log(error));
})
