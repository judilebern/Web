
let input = document.getElementsByTagName("form");

input[0].addEventListener("keydown", function (event) {

    if (event.which == "13") {
        let text = document.querySelector("div > input").value;
        console.log(text);
    }
});

