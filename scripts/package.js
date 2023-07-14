
import { navbar } from "../Components/navbar.js";
let nav=document.getElementById('navbar')
nav.innerHTML=navbar();

import { nav2 } from "../Components/navbar.js";
let nav3=document.getElementById("nav2")
nav3.innerHTML = nav2();

import { sort, last, footer } from "../Components/footer.js";
const sort_div = document.getElementById("footer");
sort_div.innerHTML = sort();
footer();

const last_div = document.getElementById("last_portion");
last_div.innerHTML = last();





