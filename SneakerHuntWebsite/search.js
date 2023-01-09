var searchShoes = window.location.search.substring(9);
searchShoes = searchShoes.toUpperCase();

var elements = document.querySelectorAll("[id*='" + searchShoes + "']");

if (elements) {
    for (var element of elements) {
        element.style.display = "block";
    }
} else {
    console.log("Element with ID '" + searchShoes + "' not found.");
}

function search() {
    var adidas = document.getElementById("adidas");
    var nike = document.getElementById("nike");
    var vans = document.getElementById("vans");
    var puma = document.getElementById("puma");

    var black = document.getElementById("black");
    var white = document.getElementById("white");
    var red = document.getElementById("red");
    var blue = document.getElementById("blue");
    var grey = document.getElementById("grey");
    var yellow = document.getElementById("yellow");
    var all = document.getElementById("all");

    var men = document.getElementById("men");
    var women = document.getElementById("women");

    var highRating = document.getElementById("highRating");
    var hot = document.getElementById("hot")

    var sneakerElements = [];
    var brand = "";
    var colour = "";
    var gender = "";
    if (adidas.checked == true) {
        sneakerElements = sneakerElements.concat(Array.from(document.getElementsByClassName("adidas")));
        brand = adidas;
    }
    if (nike.checked == true) {
        sneakerElements = sneakerElements.concat(Array.from(document.getElementsByClassName("nike")));
        brand = nike;
    }
    if (vans.checked == true) {
        sneakerElements = sneakerElements.concat(Array.from(document.getElementsByClassName("vans")));
        brand = vans;
    }
    if (puma.checked == true) {
        sneakerElements = sneakerElements.concat(Array.from(document.getElementsByClassName("puma")));
        brand = puma;
    }

    if (black.checked == true) {
        if (Boolean(brand) == true && Boolean(colour) == false) {
            sneakerElements = sneakerElements.filter(element => element.classList.contains("black"));
        } else {
            sneakerElements = sneakerElements.concat(Array.from(document.getElementsByClassName("black")));
        }
        colour = black;
    }

    if (white.checked == true) {
        if (Boolean(brand) == true && Boolean(colour) == false) {
            sneakerElements = sneakerElements.filter(element => element.classList.contains("white"));
        } else {
            sneakerElements = sneakerElements.concat(Array.from(document.getElementsByClassName("white")));
        }
        colour = white;
    }
    if (red.checked == true) {
        if (Boolean(brand) == true && Boolean(colour) == false) {
            sneakerElements = sneakerElements.filter(element => element.classList.contains("red"));
        } else {
            sneakerElements = sneakerElements.concat(Array.from(document.getElementsByClassName("red")));
        }
        colour = red;
    }
    if (blue.checked == true) {
        if (Boolean(brand) == true && Boolean(colour) == false) {
            sneakerElements = sneakerElements.filter(element => element.classList.contains("blue"));
        } else {
            sneakerElements = sneakerElements.concat(Array.from(document.getElementsByClassName("blue")));
        }
        colour = blue;
    }
    if (grey.checked == true && Boolean(colour) == false) {
        if (Boolean(brand) == true && Boolean(colour) == false) {
            sneakerElements = sneakerElements.filter(element => element.classList.contains("grey"));
        } else {
            sneakerElements = sneakerElements.concat(Array.from(document.getElementsByClassName("grey")));
        }
        colour = grey;
    }
    if (yellow.checked == true) {
        if (Boolean(brand) == true && Boolean(colour) == false) {
            sneakerElements = sneakerElements.filter(element => element.classList.contains("yellow"));
        } else {
            sneakerElements = sneakerElements.concat(Array.from(document.getElementsByClassName("yellow")));
        }
        colour = yellow;
    }
    if (all.checked == true) {
        if (Boolean(brand) == true && Boolean(colour) == false) {
            sneakerElements = sneakerElements.filter(element => element.classList.contains("all"));
        } else {
            sneakerElements = sneakerElements.concat(Array.from(document.getElementsByClassName("all")));
        }
        colour = all;
    }

    if (men.checked == true) {
        if (Boolean(brand) == true || Boolean(colour) == true) {
            sneakerElements = sneakerElements.filter(element => element.classList.contains("male"));
        } else {
            sneakerElements = sneakerElements.concat(Array.from(document.getElementsByClassName("male")));
        }
        gender = men;
    }

    if (women.checked == true) {
        if ((Boolean(brand) == true || Boolean(colour) == true) && Boolean(gender) == false) {
            sneakerElements = sneakerElements.filter(element => element.classList.contains("female"));
        } else {
            sneakerElements = sneakerElements.concat(Array.from(document.getElementsByClassName("female")));
        }
        gender = women;
    }

    if (highRating.checked == true) {
        if (Boolean(brand) == true || Boolean(colour) == true || Boolean(gender) == true) {
            sneakerElements = sneakerElements.filter(element => element.classList.contains("highRating"));
        } else {
            sneakerElements = sneakerElements.concat(Array.from(document.getElementsByClassName("highRating")));
        }
    }

    if (hot.checked == true) {
        if (Boolean(brand) == true || Boolean(colour) == true || Boolean(gender) == true) {
            sneakerElements = sneakerElements.filter(element => element.classList.contains("hot"));
        } else {
            sneakerElements = sneakerElements.concat(Array.from(document.getElementsByClassName("hot")));
        }
    }

    var allElements = document.getElementsByClassName("sneaker");
    for (var i = 0; i < allElements.length; i++) {
        allElements[i].style.display = "none";
    }

    for (var i = 0; i < sneakerElements.length; i++) {
        sneakerElements[i].style.display = "block";
    }
}