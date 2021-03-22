let element = document.getElementsByClassName("img")[0];
let element2 = document.getElementsByClassName("info")[0];
let element3 = document.getElementsByClassName("klor")[0];
const elem = document.getElementById("image");
let lists = [
    document.getElementById("li1"),
    document.getElementById("li2"),
    document.getElementById("li3"),
    document.getElementById("li4"),
];
element.classList.add("animacia1");
element2.classList.add("hiddenBlock");
element3.classList.add("poqrKlor");
const wait = (timeout => new Promise(resolve => setTimeout(resolve, timeout)));

elem.addEventListener("mouseover", () => {

    element.classList.remove("animacia1");
    element.classList.add("animacia");
    element2.classList.remove("hiddenBlock");
    element2.classList.add("blochNoHidden");
    element3.classList.remove("poqrKlor");
    element3.classList.add("metsKlor");
    console.log("waiting");
});
elem.addEventListener("mouseleave", () => {

    element.classList.remove("animacia");
    element.classList.add("animacia1");
    element2.classList.remove("blochNoHidden");
    element2.classList.add("hiddenBlock");
    element3.classList.remove("metsKlor");
    element3.classList.add("poqrKlor");

});
let isActivate = false;
console.log(lists);
lists.forEach((elements) => {
    elements.style.backgroundColor = "#fcfbfc";
    elements.addEventListener("click", () => {
        elements.style.backgroundColor = elements.style.backgroundColor == "#A0D727" ? "#fcfbfc" : "#A0D727";
        isActivate = true;
        if (isActivate) {
            isActivate = false;
            lists.forEach((naxordElements) => {
                if (naxordElements == elements) {
                    console.log(naxordElements, elements);
                    console.log("sas");
                    return 0;
                }
                naxordElements.style.backgroundColor = "#fcfbfc";
            });
        }
        console.log(isActivate, !isActivate);
    });
});

let shoosColor = Array.prototype.slice.call(document.getElementsByClassName("guyner"));
console.log(shoosColor[0]);
console.log(shoosColor[1]);
console.log(shoosColor[2]);
shoosColor.forEach((elements) => {
    elements.style.borderColor = "#fcfbfc";
    elements.addEventListener("click", () => {
        elements.style.borderColor = elements.style.borderColor == "#A0D727" ? "#fcfbfc" : "#A0D727";
        isActivate = true;
        if (isActivate) {
            isActivate = false;
            shoosColor.forEach((naxordElements) => {
                if (naxordElements == elements) {
                    console.log(naxordElements, elements);
                    console.log("sas");
                    return 0;
                }
                naxordElements.style.borderColor = "#fcfbfc";
            });
        }
        console.log(isActivate, !isActivate);
    });
});
let x = 50;


console.log((x * 100) / window.innerWidth);
console.log((x * 100) / window.innerHeight);

// console.log(a);
