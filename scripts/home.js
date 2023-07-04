
// coursel code here 



function sliderShow() {
   let  coursel_data=[
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
sliderShow()