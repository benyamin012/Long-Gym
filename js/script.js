// document.getElementById("forhead-menuid").addEventListener("mouseover", () => {
//   document.getElementById("menu-homedambble-img").style.marginRight = "15px";
//   document.getElementById("span").style.marginRight = "105px";
//   document.getElementById("span").style.marginTop = "-63px";
//   document.getElementById("span").style.display = "block";
// });
// document.getElementById("forhead-menuid").addEventListener("mouseout", () => {
//   document.getElementById("menu-homedambble-img").style.marginRight = "-29px";
//   document.getElementById("span").style.marginRight = "105px";
//   document.getElementById("span").style.marginTop = "-65px";
//   document.getElementById("span").style.display = "none";
// });
// ///////////////////////////////////////////////////////////////////////////////////////
// document.getElementById("forhead-menuid1").addEventListener("mouseover", () => {
//   document.getElementById("menu-homedambble-img1").style.marginRight = "120px";
//   document.getElementById("span1").style.display = "block";
// });
// document.getElementById("forhead-menuid1").addEventListener("mouseout", () => {
//   document.getElementById("menu-homedambble-img1").style.marginRight = "50px";
//   document.getElementById("span1").style.marginRight = "85px";
//   document.getElementById("span1").style.marginTop = "-1px";
//   document.getElementById("span1").style.display = "none";
// });
// ////////////////////////////////////////////////////////////////////////////
// document.getElementById("forhead-menuid2").addEventListener("mouseover", () => {
//   document.getElementById("menu-homedambble-img2").style.marginRight = "140px";
//   document.getElementById("span2").style.display = "block";
// });
// document.getElementById("forhead-menuid2").addEventListener("mouseout", () => {
//   document.getElementById("menu-homedambble-img2").style.marginRight = "78px";
//   document.getElementById("span2").style.marginRight = "95px";
//   document.getElementById("span2").style.marginTop = "-1px";
//   document.getElementById("span2").style.display = "none";
// });
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////<for login>///////////////////////////////////
let cartbadge = document.getElementById("cart-badge");
let userinf = document.getElementById("username");
let localinf = JSON.parse(localStorage.getItem("loginUser"));
let cartimg = document.getElementById("cart-img");
let loginBtn = document.getElementById("login");
let logoutBtn = document.getElementById("logout");
let logincart = document.getElementById("login-cart");
let dashbord = document.getElementById("dashbord");
const setuserinf = () => {
  if (localinf) {
    userinf.innerHTML = `سلام، ${localinf}`;
    loginBtn.style.display = "none";
    logoutBtn.style.display = "block";
    logincart.style.marginRight = "1400px";
  } else {
    userinf.innerHTML = "لطفا ثبت نام کنید !";
    loginBtn.style.display = "block";
    logoutBtn.style.display = "none";
    dashbord.style.display = "none";
    cartbadge.style.display = "none";
    cartimg.style.display = "none";
  }
};

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("loginUser"); // پاک کردن اطلاعات
  setuserinf(); // آپدیت کردن وضعیت
  window.location.href = "index.html"; // انتقال به صفحه اصلی
});
dashbord.addEventListener("click", () => {
  window.location.href = "login/new project/index.html";
});

setuserinf();

// let userinf =document.getElementById('username')
// let localinf =JSON.parse(localStorage.getItem('loginUser'))
// setuserinf=()=>{
//   userinf.innerHTML=`سلام، ${localinf}`
//   if (localinf) {
//   document.getElementById('login').style.display='none';
// }
// else{
//   document.getElementById('login').style.display='block';
// }
// }
// setuserinf()

// // _______________________________________________________
// let logout = document.getElementById('logout')
// logout.addEventListener('click' ,()=>{
//   userinf.innerHTML=`لطفا ثبت نام کنید ! `
//   localStorage.removeItem('loginUser')
//   window.location.href='index.html'
// })

//   document.getElementById('login').style.display='block';
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////<drop down>///////////////////////////////////
const userToggle = document.getElementById("user-toggle");
const dropdownMenu = document.getElementById("dropdown-menu");

userToggle.addEventListener("click", () => {
  dropdownMenu.style.display =
    dropdownMenu.style.display === "block" ? "none" : "block";
});

// اگر بیرون از منو کلیک شد، بسته شود
document.addEventListener("click", function (e) {
  if (!document.querySelector(".user-dropdown").contains(e.target)) {
    dropdownMenu.style.display = "none";
  }
});
// _________________________________________________________________________________________________________________________________<shoping cart>____________________________________//
let addToCartBtns = document.querySelectorAll(".cart-a-tag"); // همه دکمه‌های افزودن

let count = 0;

addToCartBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (localinf) {
    } else {
      alert("شما حتما باید ثبت نام کنید");
    }
    count++;
    cartbadge.innerHTML = count;
  });
});
// ___________________________________________________________________________________________________________________<add to shopin cart item>___________________________________________
// let prodact = document.getElementById('product-div')

// addToCartBtns.forEach(btn => {
//   btn.addEventListener('click', (e) => {
//     e.preventDefault() // چون a هست، نذاره صفحه ریفرش بشه

//     let product = e.target.closest('.product1-div')   // کارت محصول
//     let title = product.querySelector('.product1-h4').innerText
//     let price = product.querySelector('.product1-h6').innerText
//     let imgSrc = product.querySelector('.product1').src

//     // شیء محصول
//     let item = { title, price, imgSrc }

//     // ذخیره در localStorage
//     let cart = JSON.parse(localStorage.getItem('cart')) || []
//     cart.push(item)
//     localStorage.setItem('cart', JSON.stringify(cart))

//     alert(`${title} به سبد خرید اضافه شد ✅`)
//   })
// })

// let cart = JSON.parse(localStorage.getItem('cart')) || []
// let container = document.querySelector('.all-product-cart')

// cart.forEach(item => {
//   let div = document.createElement('div')
//   div.classList.add('product-cart')

//   div.innerHTML = `
//     <img class="product1-cart" src="${item.imgSrc}" alt="">
//     <h4 class="product1-h4-cart">${item.title}</h4>
//     <h6 class="product1-h6-cart">${item.price}</h6>
//     <a>
//         <img class="del-item" src="img/delete.png">
//     </a>
//     <input type="number" min="1" value="1" class="quantity">
//   `
//   container.appendChild(div);

// })

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// // برای صفحه index.html
// let container = document.querySelector(".all-product-cart");
// if (addToCartBtns.length > 0) {
//   addToCartBtns.forEach((btn) => {
//     btn.addEventListener("click", (e) => {
//       e.preventDefault();

//       let product = e.target.closest(".product-div");
//       let title = product.querySelector(".product1-h4").innerText;
//       let price = product.querySelector(".product1-h6").innerText;
//       let imgSrc = product.querySelector("img").src;

//       let item = { title, price, imgSrc };

//       let cart = JSON.parse(localStorage.getItem("cart")) || [];
//       cart.push(item);
//       localStorage.setItem("cart", JSON.stringify(cart));

//       alert(`${title} به سبد خرید اضافه شد ✅`);
//     });
//   });
// }
let container = document.querySelector(".all-product-cart");
addToCartBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    // اگر لاگین نیست
    if (!localinf) {
      alert("برای افزودن به سبد خرید، ابتدا وارد حساب کاربری شوید");
      return; // ⛔ این خط کلید حل مشکله
    }

    let product = e.target.closest(".product-div");
    let title = product.querySelector(".product1-h4").innerText;
    let price = product.querySelector(".product1-h6").innerText;
    let imgSrc = product.querySelector("img").src;

    let item = { title, price, imgSrc };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));

    // آپدیت badge
    cartbadge.innerText = cart.length;

    alert(`${title} به سبد خرید اضافه شد ✅`);
  });
});
////////////////////////////////////////////////////////////////////////////////////Shopping Cart Summary///////////////////////////////////////////////
// =======================
// Shopping Cart Summary
// =======================

const totalCountEl = document.getElementById("total-count");
const totalPriceEl = document.getElementById("total-price");

function parsePrice(priceText) {
  // "850,000 : تومان" => 850000
  return Number(priceText.replace(/[^\d]/g, ""));
}

function updateCartSummary() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let totalCount = 0;
  let totalPrice = 0;

  container.querySelectorAll(".product-cart").forEach((product) => {
    const priceText = product.querySelector(".product1-h6-cart").innerText;
    const quantity = product.querySelector(".quantity").value;

    const price = parsePrice(priceText);

    totalCount += Number(quantity);
    totalPrice += price * quantity;
  });

  totalCountEl.innerText = totalCount;
  totalPriceEl.innerText = totalPrice.toLocaleString();
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////
// برای صفحه shoping-cart.html

if (container) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.forEach((item) => {
    let div = document.createElement("div");
    div.classList.add("product-cart");

    div.innerHTML = `
      <img class="product1-cart" src="${item.imgSrc}" alt="">
      <h4 class="product1-h4-cart">${item.title}</h4>
      <h6 class="product1-h6-cart">${item.price}</h6>
      <a>
        <img class="del-item" src="img/delete.png">
      </a>
      <input type="number" min="1" value="1" class="quantity">
    `;
    container.appendChild(div);
  });

  // هندل کردن حذف محصول
  container.addEventListener("click", (e) => {
    if (e.target.classList.contains("del-item")) {
      let product = e.target.closest(".product-cart");
      let title = product.querySelector(".product1-h4-cart").innerText;

      product.remove();

      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart = cart.filter((item) => item.title !== title);
      localStorage.setItem("cart", JSON.stringify(cart));

      updateCartSummary();
    }
  });

  container.addEventListener("input", (e) => {
    if (e.target.classList.contains("quantity")) {
      updateCartSummary();
    }
  });
  updateCartSummary();
}

////////////////////////////////////////////////////////////////////////////////////////////////for card image onClick//////////////////////////////////
cartimg.addEventListener("click", () => {
  window.location.href = "shoping-cart.html";
});
