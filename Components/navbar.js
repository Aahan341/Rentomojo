
const navbar = ()=>{
    return ` <div class="navbar">
    <div id="logo-div">
        <a href="home.html"> <img
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
        <button id="button">LOGIN/SINGUP</button>
    </div>
</div>
    ` 
};

export  {navbar};