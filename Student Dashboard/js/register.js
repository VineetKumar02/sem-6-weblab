const pass = document.getElementById("pass1");
const confirm_pass = document.getElementById("pass2");
const pass_toggle = document.getElementById("pass-toggle1");
const confirm_pass_toggle = document.getElementById("pass-toggle2");


pass_toggle.addEventListener("click", () => {
    if (pass.type === "password") {
        pass.type = "text";
        pass_toggle.style.color = "#0d4ba0";
    } else {
        pass.type = "password";
        pass_toggle.style.color = "grey";
    }
    pass_toggle.classList.toggle("fa-eye");
})

confirm_pass_toggle.addEventListener("click", () => {
    if (confirm_pass.type === "password") {
        confirm_pass.type = "text";
        confirm_pass_toggle.style.color = "#0d4ba0";
    } else {
        confirm_pass.type = "password";
        confirm_pass_toggle.style.color = "grey";
    }
    confirm_pass_toggle.classList.toggle("fa-eye");
})