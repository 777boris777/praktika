let element = document.getElementsByClassName("img")[0];
let element2 = document.getElementsByClassName("info")[0];
let element3 = document.getElementsByClassName("klor")[0];
const elem = document.getElementById("image")
let lists = [document.getElementById("li1"), document.getElementById("li2"), document.getElementById("li3"), document.getElementById("li4")]
element.classList.add("animacia1");
element2.classList.add("hiddenBlock");
element3.classList.add("poqrKlor");

elem.addEventListener("mouseover", () => {
    element.classList.remove("animacia1");
    element.classList.add("animacia");
    element2.classList.remove("hiddenBlock");
    element2.classList.add("blochNoHidden");
    element3.classList.remove("poqrKlor");
    element3.classList.add("metsKlor");
});

elem.addEventListener("mouseleave", () => {
    element.classList.remove("animacia");
    element.classList.add("animacia1");
    element2.classList.remove("blochNoHidden");
    element2.classList.add("hiddenBlock");
    element3.classList.remove("metsKlor");
    element3.classList.add("poqrKlor");
});

let isActivate = true;
lists.forEach(element => {
    element.addEventListener("click", () => {
        isActivate = !isActivate;
        element.style.backgroundColor = element.style.backgroundColor == "#A0D727" ? "#fcfbfc" : "A0D727";
        if (element.style.backgroundColor == "#A0D727") {
            element.style.backgroundColor = "#fcfbfc";
        }
        if (isActivate) {
            lists.forEach(naxordElement => {
                naxordElement.style.backgroundColor = "fcfbfc";
                if (naxordElement == element) {
                    // chi ashxatum
                    console.log("sas");
                    return 0;
                }
            });
        }
        console.log(isActivate, !isActivate);
    });
});

let shoosColor = document.getElementsByClassName("guyner");
shoosColor.forEach(element => {
    element.addEventListener("click", () => {
        element.style.backgroundColor = element.style.backgroundColor == "#A0D727" ? "A0D727" : "A0D727";
        if (element.style.backgroundColor == "#A0D727") {
            element.style.backgroundColor
        }
        isActivate = !isActivate;
        console.log(isActivate, !isActivate);
    });
});

let x = 50;
console.log((x * 100) / window.innerWidth);
console.log((x * 100) / window.innerHeight);

console.log(a);
