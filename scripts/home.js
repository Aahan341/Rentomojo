
// coursel code here 



function sliderShow() {
    let coursel_data = [
        "https://s.rmjo.in/Referral%20banner%20Web.jpg",
        "https://s.rmjo.in/RO-web-banner-web-.jpg",
        "https://s.rmjo.in/Fitness-offer-banner-for-Web--2.jpg",
        "https://s.rmjo.in/Paytm-Payments-Bank-web-.jpg",
    ];

    let div = document.getElementById("carousel");
    let img = document.createElement("img");
    img.setAttribute("class", "image");
    img.src = coursel_data[0];
    div.append(img);

    let i = 0;
    setInterval(function () {
        if (i == coursel_data.length) {
            i = 0;
        }
        img.src = coursel_data[i];
        i = i + 1;
        div.append(img);
    }, 3000);


}
sliderShow();

// product data here 

const product_data = [
    {
        name: "Air Purifier",
        image: "https://p.rmjo.in/productSquare/eoynt3bs-500x500.jpg",
        price: "Rent ₹ 469/mo",
        button: "See More",
    },
    {
        name: "Atticus Wooden Single Platform Bed",
        image: "https://p.rmjo.in/productSquare/hc4dc706-500x500.jpg",
        price: "Rent ₹ 339/mo",
        button: "See More",
    },
    {
        name: "Morris Officer Chair",
        image: "https://p.rmjo.in/productSquare/esf6ag3q-500x500.jpg",
        price: "Rent ₹ 199/mo",
        button: "See More",
    },
    {
        name: "Microwave Solo 20L",
        image: "https://p.rmjo.in/productSquare/n97vj5on-500x500.jpg",
        price: "Rent ₹ 259/mo",
        button: "See More",
    },
    {
        name: "Single Door Fridge (210 Litre)",
        image: "https://p.rmjo.in/productSquare/t9nfjx7q-500x500.jpg",
        price: "Rent ₹ 689/mo",
        button: "See More",
    },
    {
        name: "Rowling Bookshelf Medium",
        image: "https://p.rmjo.in/productSquare/dwp7yb0x-500x500.jpg",
        price: "Rent ₹ 139/mo",
        button: "See More",
    },
    {
        name: "LED-TV-40",
        image: "https://p.rmjo.in/productSquare/v308sv6p-500x500.jpg",
        price: "Rent ₹ 789/mo",
        button: "See More",
    },
    {
        name: "OnePlus 7 Pro (Mirror Gray)",
        image: "https://p.rmjo.in/productSquare/mxzy0xf9-500x500.jpg",
        price: "Rent ₹ 1479/mo",
        button: "See More",
    },
    {
        name: "Auto Inclination Treadmill T-501",
        image: "https://p.rmjo.in/productSquare/jsxcydcf-500x500.jpg",
        price: "Rent ₹ 1269/mo",
        button: "See More",
    },

]
 localStorage.setItem("prod_data",JSON.stringify(product_data));

 let data = JSON.parse(localStorage.getItem("prod_data"));
 console.log(data)


function display(data){
    console.log(data)
    const product_Item= document.getElementById("product_Item");
    product_Item.innerHTML = null;
   
   da && da.map((item,i)=>{
        let div = document.createElement("div");
        div.setAttribute("class","product_dataCard");

        let img = document.createElement("img");
        img.setAttribute("class","card_image")
        img.src= item.image;

        let p_tag= document.createElement("p");
        p_tag.setAttribute("class" ,"p_tagcard");
        p_tag.innerText = item.name;

        let p1_tag= document.createElement("p");
        p1_tag.setAttribute("class" ,"p_tagcard");
        p1_tag.innerText = item.price;

        let btn = document.createElement("button");
        btn.setAttribute("id","btnCard");
        btn.innerText= item.button;

        div.append(img, p_tag, p1_tag, btn);

        console.log(div);

        product_Item.append(div);
     
})

};


