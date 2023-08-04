let products = JSON.parse(localStorage.getItem('products')) ||[];

const ui = (products) => {
    document.getElementById("ui").innerHTML = "";
    let temp = ``;
    products.map((ele,index) => {
        temp += `<div>
        <img src=${ele.img} alt="" class="img">
        <h2>title : ${ele.title}</h2>
        <h4>price : ${ele.price}</h4>
        <h4>category : ${ele.category}</h4>
        </div>`;
    })
    document.getElementById("ui").innerHTML = temp;
};
ui(products)

const productdata = (e) => {
    e.preventDefault();
    let product = {
        img: document.getElementById("img").value,
        title: document.getElementById("title").value,
        price: document.getElementById("price").value,
        category: document.getElementById("category").value,
    };
    products.push(product);
    localStorage.setItem("products",JSON.stringify(products));
    ui(products);
};

document.querySelector("form").addEventListener("submit", productdata);
 

// sorting by price

const hendlelth =() =>{

    let data =products.sort((a,b) => a.price - b.price);
    ui(data);
    console.log(data);
}
document.getElementById("lth").addEventListener("click", hendlelth);

const hendlelth1 =() =>{

    let data =products.sort((a,b) => b.price - a.price);
    ui(data);
    console.log(data);
}
document.getElementById("htl").addEventListener("click", hendlelth1);

// filter products by category

const hendlecategory =(cat) => {
    let data = products.filter((value)=> value.category === cat)
    ui(data);
    console.log(data);
}

document.getElementById("car").addEventListener("click",() => hendlecategory("car"));

document.getElementById("scooter").addEventListener("click",() => hendlecategory("scooter"));

const find =() => {
    let value = document.getElementById("value").value;
    let data = products.filter((val)=> val.category.includes(value.toLowerCase()));
     console.log(data);
     console.log(value);
     ui(data);
}

document.getElementById("value").addEventListener("keypress",(e) => {
    if (e.key=="Enter") {
        find();
    }
})

document.getElementById("search").addEventListener("click",find);