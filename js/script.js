var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var imgList = document.getElementsByClassName("img-slide");
    if (n > imgList.length) {
        slideIndex = 1
    } else if (n < 1) {
        slideIndex = imgList.length
    };

    for (i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none";
    }

    imgList[slideIndex - 1].style.display = "block";
}

setInterval(() => {
    plusDivs(1);
}, 2000);

function validateForm() {
    const name = document.forms["contactForm"]["name"].value;
    const email = document.forms["contactForm"]["email"].value;
    const options = document.forms["contactForm"]["options"].value;

    const isEmail = email.match(/[\w.]+@\w+.\w{2,3}(.\w{2,})?/);

    if (!name) {
        const errorName = document.getElementById("name-error");

        errorName.style.display = "block";
        errorName.style.visibility = "visible";
    }

    if ((email && !isEmail) || !email) {
        const errorEmail = document.getElementById("email-error");

        errorEmail.style.display = "block";
        errorEmail.style.visibility = "visible";
    }

    if (options === "") {
        const errorOpt = document.getElementById("options-error");

        errorOpt.style.display = "block";
        errorOpt.style.visibility = "visible";
    }

    if (name && email && isEmail && options !== "") {
        alert(`Terima kasih telah melakukan reservasi ${name}, Data anda telah kami terima`)

        return false;
    }
    return false;
}

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    validateForm();
})