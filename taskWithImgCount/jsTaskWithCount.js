let images = document.getElementsByTagName('img');
let imagesCount = images.length;
console.log(imagesCount);

let text = document.getElementById('uuid');
text.innerHTML = "Siame puslapyje yra " + imagesCount + " paveiksleliai";

document.getElementById("myBtn").addEventListener("click", function() {
    alert("Siame puslapyje yra " + imagesCount + " paveiksleliai");
});

let imagesWithAlt =
    document.getElementsByClassName("galerijos_foto");

for (let i = 0; i < imagesWithAlt.length; i++) {
    if (i % 2 === 0) {
        imagesWithAlt[i].alt = 'test';
    }
}

document.getElementById('uuid').style.backgroundColor = "green";
document.getElementById('uuid').style.fontSize = "24px";
document.getElementById('uuid').style.width = "200px";
document.getElementById('uuid').style.height = "200px";

