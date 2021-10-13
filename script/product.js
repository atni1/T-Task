var i1 = {
    imgSrc: "img/cat1.png",
    name: "Кот полосатый",
    color: "Коричневый окрас",
    age: "2 мес",
    footNumber: "4",
    price: 30000,
}
var i2 = {
    imgSrc: "img/cat2.png",
    name: "Кот полосатый",
    color: "Коричневый окрас",
    age: "2 мес",
    footNumber: "4",
    price: 40000,
}
var i3 = {
    imgSrc: "img/cat3.png",
    name: "Кот полосатый",
    color: "Коричневый окрас",
    age: "2 мес",
    footNumber: "4",
    price: 20000,
}
var i4 = {
    imgSrc: "img/cat1.png",
    name: "Кот полосатый",
    color: "Коричневый окрас",
    age: "2 мес",
    footNumber: "4",
    price: 25000,
}
var i5 = {
    imgSrc: "img/cat3.png",
    name: "Кот полосатый",
    color: "Коричневый окрас",
    age: "2 мес",
    footNumber: 4,
    price: 30000,
}
var i6 = {
    imgSrc: "img/cat2.png",
    name: "Кот полосатый",
    color: "Коричневый окрас",
    age: "2 мес",
    footNumber: "4",
    price: 10000,
}
var prodArray = [i1,i2,i3,i4,i5,i6];

var catalog = document.querySelector('.catalog');


for (let i = 0; i < prodArray.length; i++) {
    var product = document.createElement('article');
    product.setAttribute("class", "product");
    var prodMark = document.createElement("div");
    prodMark.setAttribute("class", "product__marker");
    if (i == 0 || i == 4 ) {
        for (let j = 0; j < 1; j++) {
            var prodSale = document.createElement("div");
            prodSale.setAttribute("class","product__sale")
            prodSale.innerText = "-40%";
            prodMark.append(prodSale);
        } 
    }

    var prodFavor = document.createElement("img");
    prodFavor.src = "img/favorite.svg";
    prodFavor.setAttribute("class","product__favor");
    prodMark.append(prodFavor);
    product.append(prodMark);  
    
    var prodImg = document.createElement("img");
    prodImg.setAttribute("id","product__picture");
    prodImg.src = prodArray[i].imgSrc;
    product.append(prodImg);
    var prodDescrip = document.createElement("div");
    prodDescrip.setAttribute("class","product__decription");
    
    var prodName = document.createElement("h3");
    prodName.innerText = prodArray[i].name;
    prodDescrip.append(prodName);

    var prodSpecif = document.createElement("div");
    prodSpecif.setAttribute("class", "product__specif");
    var prodColor = document.createElement("h4");
    prodColor.innerHTML = prodArray[i].color;
    prodSpecif.append(prodColor);
    var prodAge = document.createElement("div");
    prodAge.setAttribute("class", "product__age");
    prodAge.insertAdjacentHTML("beforeend", "<strong>"+prodArray[i].age+"</strong><span>Возраст</span>");
    prodSpecif.append(prodAge);
    var prodFootNumber = document.createElement("div");
    prodFootNumber.setAttribute("class", "product__foot__number");
    prodFootNumber.insertAdjacentHTML("beforeend", "<strong>"+prodArray[i].footNumber+"</strong><span>Кол-во лап</span>")
    prodSpecif.append(prodFootNumber);
    prodDescrip.append(prodSpecif);

    var prodPrice = document.createElement("strong");
    prodPrice.setAttribute("class", "product__price");
    prodPrice.innerText = prodArray[i].price+" руб.";
    prodDescrip.append(prodPrice);

    var prodBtn = document.createElement("button");
    prodBtn.setAttribute("id", "product__buy");
    prodBtn.innerText = "Купить"
    product.append(prodBtn);
    if (i == 1 || i == 5) {
        for (let k = 0; k < 1; k++) {
            product.remove(prodBtn);
            var prodSaleBtn = document.createElement("button");
            prodBtn.setAttribute("id", "product__sold");
            prodBtn.innerText = "Продан"
            product.append(prodSaleBtn);
        }
    }
    product.append(prodDescrip); 
    catalog.append(product);
}
