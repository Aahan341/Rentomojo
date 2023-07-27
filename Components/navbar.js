
const navbar = ()=>{
    return ` <div class="navbar">
    <div id="logo-div">
        <a href="index.html"> <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-_EBNx0delHQ4Bg4-VDwno4msVSYZ2QHW6A&usqp=CAU"
                alt="Rentomojo"></a>
    </div>
    <div class="select-tag">
        <span>Delhi<select name="" id=""></select></span>
    </div>
    <div class="searchBar">
        <input type="text" id="searchBar" placeholder="Search of Products">
    </div>
    <button id="card"><a href="./checkout.html"><i class="fa-solid fa-cart-shopping"></i>Cart</a></button>

    <div class="div-button">
        <button id="button"><a href="login.html">LOGIN/SIGNUP</a></button>
    </div>
</div>
    ` 
};
export  {navbar};


const nav2=()=>{
    return `
    <div id="main">
    <div id="part1">
        <a href="index.html">Home</a>
        <p>&gt;</p>
        <p> Packages</p>
     </div>
     <div id="part2">
        <ul>
            <li class="pack"><a href="packages.html">Packages</a></li>
            <li><a href="furniture.html">Furniture</a></li>
            <li><a href="appliance.html">Appliances</a></li>
            <li><a href="electronics.html">Electronics</a></li>
            <li><a href="fitness.html">Fitness</a></li>
        </ul>
    </div>       
    </div>
    `
}
export {nav2};


