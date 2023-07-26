
import { navbar } from "../Components/navbar.js";
let nav=document.getElementById('navbar')
nav.innerHTML=navbar();

import { nav2 } from "../Components/navbar.js";
let nav3=document.getElementById("nav2")
nav3.innerHTML = nav2();



const appliances = async()=>{
  let res = await fetch(`http://localhost:3000/appliances`);
  let data = await res.json();
  // console.log(data);
  localStorage.setItem("appliances",JSON.stringify(data))
  let appliances_data =  localStorage.getItem("appliances") || [];
  // console.log(appliances_data)
}

appliances()

const electronics = async()=>{
  let res = await fetch(`http://localhost:3000/electronics`);
  let data = await res.json();
  // console.log(data);
  localStorage.setItem("electronics",JSON.stringify(data))
  let electronics_data =  localStorage.getItem("electronics") || [];
  // console.log(electronics_data)
}

electronics()

const packages = async()=>{
  let res = await fetch(`http://localhost:3000/packages`);
  let data = await res.json();
  // console.log(data);
  localStorage.setItem("packages",JSON.stringify(data))
let packages_data =  localStorage.getItem("packages") || [];
//   console.log(packages_data)
}

packages()

const WFHEssentials = async()=>{
  let res = await fetch(`http://localhost:3000/WFHEssentials`);
  let data = await res.json();
  // console.log(data);
  localStorage.setItem("WFHEssentials",JSON.stringify(data))
  let wfh_data =  localStorage.getItem("WFHEssentials") || [];
  // console.log(wfh_data)

}

WFHEssentials()

const furniture = async()=>{
  let res = await fetch(`http://localhost:3000/furniture`);
  let data = await res.json();
  // console.log(data);
  localStorage.setItem("furniture",JSON.stringify(data))
  let furniture_data =  localStorage.getItem("furniture") || [];
  // console.log(furniture_data)

}

furniture()

const fitness = async()=>{
  let res = await fetch(`http://localhost:3000/fitness `);
  let data = await res.json();
  // console.log(data);
  localStorage.setItem("fitness",JSON.stringify(data))
  let fitness_data =  localStorage.getItem("fitness") || [];
  // console.log(fitness_data)

}

fitness()

// import {appliances, electronics, packages,WFHEssentials,furniture,fitness} from "../Components/data.js"
//   console.log(packages);
 let data=packages;
 let bedroomscount=packages.length;
 let WFHEssentialscount=WFHEssentials.length;
 let electronicscount=electronics.length;
 let furniturecount=furniture.length;
 let appliancescount=appliances.length;
 let fitnesscount=fitness.length;
// console.log(bedroomscount,WFHEssentialscount,electronicscount,furniturecount,appliancescount,fitnesscount);

 let data1;
 

//  console.log(productservice)
// let arr=JSON.parse(localStorage.getItem("products")) || [];
let productCard=(el)=>{
  let div=document.createElement('div');
  div.setAttribute("class","product");
  div.onclick=()=>{
    console.log(el)
    window.location.href="proview.html";
    localStorage.setItem("products",JSON.stringify(el))
  }
  let img=document.createElement('img');
  img.setAttribute("class","productimage");
  img.src=el.productimage;
  let h2=document.createElement('h2');
  h2.innerText=el.title;
  let div1=document.createElement('div');
  div1.setAttribute("class","productprice");
  let rentp=document.createElement('h2');
  rentp.setAttribute("class","productprice");
  
  var slider=document.getElementById("myRange");
  var output=document.getElementById("value");
  output.innerHTML=slider.value ;
  slider.oninput=function(){
    output.innerHTML=this.value;
  }
  let resetbtn=document.getElementById("resert")
  resetbtn.addEventListener("click",function(){
    output.innerHTML=1;
    slider.value=1;
  })
  slider.addEventListener("mousemove",function(){
    var x=slider.value*10;
    var y=slider.value/10;
    rentp.innerText=`${(el.rent)*y}/mon`;
    var color='linear-gradient(90deg,rgb(1,134,179)'+ x +'%,rgb(214,214,214)'+x+'%)';
    slider.style.background=color;
  })

  rentp.innerText=`${(el.rent)}/mon`;
  div1.append(rentp)
  div.append(img,h2,div1);
  return div;
}


let renderDom=(data1)=>{
  let cont=document.getElementById('packagecontainer');
  data1.forEach((el)=>{
    console.log(el)
      let card=productCard(el);
      cont.append(card);
  });
};

for(let i=0; i<packages.length; i++){
  data1=packages[i].product
  renderDom(data1);
 }
 let renderDom1=(data)=>{
  let cont=document.getElementById('packagecontainer');
  data && data.forEach((el)=>{
    console.log(el)
      let card=productCard(el);
      cont.append(card);

  });
};
renderDom1();


document.getElementById("itemcount1").innerText=bedroomscount;

document.getElementById("itemcount2").innerText=electronicscount;
document.getElementById("itemcount3").innerText=appliancescount;

document.getElementById("itemcount4").innerText=WFHEssentialscount;
document.getElementById("itemcount5").innerText=furniturecount;
document.getElementById("itemcount6").innerText=fitnesscount;

 
let productitem=(index)=>{
  localStorage.setItem("products",JSON.stringify(index));
  window.location.href="productview.html";
  console.log(index)
};
let btnvalue=document.getElementById("whatpage")
if (data.length==4){
  btnvalue.innerText="Packages"
} else if (data.length==22){
  btnvalue.innerText="Electronics"
} else if (data.length==15){
  btnvalue.innerText="Appliances"
} else if (data.length==20){
  btnvalue.innerText="Furniture"
} else if (data.length==5){
  btnvalue.innerText="WFHEssentials"
} else {
  btnvalue.innerText="Fitness"
}


// import { sort, last, footer } from "../Components/footer.js";
// const sort_div = document.getElementById("footer");
// sort_div.innerHTML = sort();
// footer();

// const last_div = document.getElementById("last_portion");
// last_div.innerHTML = last();



