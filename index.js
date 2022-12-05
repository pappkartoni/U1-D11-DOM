function changeH1(str) {
    let header = document.getElementsByTagName("h1");
    header[0].innerText = str;
}

function changeBackground() {
    document.body.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
}

function changeAddress(street, city, country) {
    let address = document.getElementById("address");
    address.children[0].innerText = street;
    address.children[1].innerText = city;
    address.children[2].innerText = country;
}

function addClassToLinks(cls) {
    let links = document.getElementsByClassName("shoplink");

    for (let i=0; i<links.length; i++) {
        links[i].classList.add(cls);
    }
}

function toggleClass(cls) {
    let images = document.getElementsByTagName("img");
    for (let i = 0; i < images.length; i++) {
        images[i].classList.toggle(cls)
    }
    }


function colorPrices() {
    let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    let prices = document.getElementsByClassName("price");
    for (let i=0; i<prices.length; i++) {
        prices[i].style.color = randomColor;
    }
}