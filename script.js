console.log("Hallo, ich bin Wilhelmina.")
const schwein = document.querySelector(".schwein");
const herz = document.querySelector(".herz");
const zh = document.querySelector(".zh");

let anzahl = 0;

function aktualisiereAnzahl() {
    zh.textContent = anzahl;
}
aktualisiereAnzahl();

function miau() {
    new Audio("cat-meow-14536.mp3").play();
}

function zeigeHerz() {
    miau();
    herz.style.display = "block";
    anzahl++;
    aktualisiereAnzahl();
}

function verschwindeHerz(e) {
    e.stopPropagation();
    herz.style.display = "none";
}

schwein.addEventListener("click", zeigeHerz);
herz.addEventListener("click", verschwindeHerz);

const besen = document.querySelector(".besen");

function bewegeBesen() {
   const rect = besen.getBoundingClientRect();
   console.log(rect);
   besen.style.left = `${rect.left + 10}px`;
}

besen.addEventListener("click", bewegeBesen);

