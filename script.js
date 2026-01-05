function scrollToForm() {
    document.getElementById("register").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("registrationForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let course = document.getElementById("course").value;

    if (name && email && mobile && course) {
        document.getElementById("successMessage").innerText =
            "✅ Registration successful! Our team will contact you soon.";

        this.reset();
    } else {
        alert("Please fill all details");
    }
});