let list = [
  {
    name: "Waffle with Berries",
    secondName: "Waffle",
    id: "Waffle",
    price: 6.5,
    img: "../assets/images/image-waffle-desktop.jpg",
    mobileImg: "../assets/images/image-waffle-mobile.jpg",
    tabletImg: "../assets/images/image-waffle-tablet.jpg",
    cardImg: "../assets/images/image-waffle-thumbnail.jpg",
    count: 0,
  },
  {
    name: "Vanilla Bean Crème Brûlée",
    secondName: "Crème Brûlée",
    id: "CremeBrulee",
    price: 7.0,
    img: "../assets/images/image-creme-brulee-desktop.jpg",
    mobileImg: "../assets/images/image-creme-brulee-mobile.jpg",
    tabletImg: "../assets/images/image-creme-brulee-tablet.jpg",
    cardImg: "../assets/images/image-creme-brulee-thumbnail.jpg",
    count: 0,
  },
  {
    name: "Macaron Mix of Five",
    secondName: "Macaron",
    id: "Macaron",
    price: 8.0,
    img: "../assets/images/image-macaron-desktop.jpg",
    mobileImg: "../assets/images/image-macaron-mobile.jpg",
    tabletImg: "../assets/images/image-macaron-tablet.jpg",
    cardImg: "../assets/images/image-macaron-thumbnail.jpg",
    count: 0,
  },
  {
    name: "Classic Tiramisu",
    secondName: "Tiramisu",
    id: "Tiramisu",
    price: 5.5,
    img: "../assets/images/image-tiramisu-desktop.jpg",
    mobileImg: "../assets/images/image-tiramisu-mobile.jpg",
    tabletImg: "../assets/images/image-tiramisu-tablet.jpg",
    cardImg: "../assets/images/image-tiramisu-thumbnail.jpg",
    count: 0,
  },
  {
    name: " Pistachio Baklava",
    secondName: "Baklava",
    price: 4.0,
    img: "../assets/images/image-baklava-desktop.jpg",
    mobileImg: "../assets/images/image-baklava-mobile.jpg",
    tabletImg: "../assets/images/image-baklava-tablet.jpg",
    cardImg: "../assets/images/image-baklava-thumbnail.jpg",
    count: 0,
  },
  {
    name: "Lemon Meringue Pie",
    secondName: "Pie",
    price: 5.0,
    img: "../assets/images/image-meringue-desktop.jpg",
    mobileImg: "../assets/images/image-meringue-mobile.jpg",
    tabletImg: "../assets/images/image-baklava-tablet.jpg",
    cardImg: "../assets/images/image-baklava-thumbnail.jpg",
    count: 0,
  },
  {
    name: "Red Velvet Cake",
    secondName: "Cake",
    id: "Cake",
    price: 4.5,
    img: "../assets/images/image-cake-desktop.jpg",
    mobileImg: "../assets/images/image-cake-mobile.jpg",
    tabletImg: "../assets/images/image-cake-tablet.jpg",
    cardImg: "../assets/images/image-cake-thumbnail.jpg",
    count: 0,
  },
  {
    name: "Salted Caramel Brownie",
    secondName: "Brownie",
    id: "Brownie",
    price: 4.5,
    img: "../assets/images/image-brownie-desktop.jpg",
    mobileImg: "../assets/images/image-brownie-mobile.jpg",
    tabletImg: "../assets/images/image-brownie-tablet.jpg",
    cardImg: "../assets/images/image-brownie-thumbnail.jpg",
    count: 0,
  },
  {
    name: "Vanilla Panna Cotta",
    secondName: "Panna Cotta",
    id: "PannaCotta",
    price: 6.5,
    img: "../assets/images/image-panna-cotta-desktop.jpg",
    mobileImg: "../assets/images/image-panna-cotta-mobile.jpg",
    tabletImg: "../assets/images/image-panna-cotta-tablet.jpg",
    cardImg: "../assets/images/image-panna-cotta-thumbnail.jpg",
    count: 0,
  },
];
// ? create cards
list.forEach((ele) => {
  document.querySelector("body > main > section").innerHTML += `
  <div class="card" id="${ele.id}">
        <div>
          <img src="${ele.img}" class="desktop" />
          <img src="${ele.tabletImg}" class="tablet" />
          <img src="${ele.mobileImg}" class="mobile" />
        </div>
        <button>
          <div class="open" >
            <img data-id = ${ele.id} class = "decrement"src="./assets/images/icon-decrement-quantity.svg" />
            <p class="regular">${ele.count}</p>
            <img data-id = ${ele.id} class = "increment" src="./assets/images/icon-increment-quantity.svg" />
          </div>
          <div class="close flex-center" data-id = ${ele.id}>
            <img src="./assets/images/icon-add-to-cart.svg" />
            <p class="font-semi">Add to Card</p>
          </div>
        </button>
        <article>
          <p class="font-regular">${ele.name}</p>
          <p class="font-bold">${ele.secondName}</p>
          <p class="font-semi">$${ele.price}</p>
        </article>
      </div>
  `;
});
// ? function
function countChange(id, number) {
  let returnValue = 0;
  list.forEach((ele) => {
    if (id === ele.id) {
      ele.count += number;
      if (ele.count < 0) ele.count = 0;
      returnValue = ele.count;
    }
  });
  return returnValue;
}
function changeCountEvent(e, number) {
  // * change count of item
  const id = e.target.getAttribute("data-id");
  const resultCount = countChange(id, number);
  // * hundle button state
  document.querySelector(`#${id} .open p`).innerText = resultCount;
  if (resultCount == 0)
    document.getElementById(id).classList.remove("selected");
  else document.getElementById(id).classList.add("selected");
  // * hundle aside
  let items = list.filter((ele) => ele.count !== 0);
  hundleListItem(items);
}

function hundleListItem(items) {
  // * hundle informations
  let totalItems = 0;
  let totalPrice = 0;
  items.forEach((item) => {
    totalItems += item.count;
    totalPrice += item.count * item.price;
  });
  if (totalItems === 0) {
    document.querySelector("aside .empty").classList.remove("hidden");
    document.querySelector("aside .not-empty").classList.add("hidden");
    return;
  }
  document.querySelector("aside .empty").classList.add("hidden");
  document.querySelector("aside .not-empty").classList.remove("hidden");
  let aside = document.querySelector("aside .not-empty ");
  aside.innerHTML = `<h1 class="font-semi">Your Cart (${totalItems})</h1>`;
  items.forEach((item) => {
    aside.innerHTML += `
    <section>
    <div>
      <p class="font-semi">${item.name}</p>
      <p>
      <span class="font-bold">${item.count}x</span>
      <span class="font-regular">@$${item.price}</span>
      <span class="font-semi">$${item.price * item.count}</span>
      </p>
    </div>
    <div>
      <img src="./assets/images/icon-remove-item.svg" class="remove-item" data-id ="${
        item.id
      }" alt="">
    </div>
    </section>
    `;
  });
  aside.innerHTML += `
  <div class="total"><span class="font-regular">Order Total:</span><span class="font-bold">$${totalPrice}</span></div>
  <div class="footer" >
  <img src="./assets/images/icon-carbon-neutral.svg" alt="">
  <p class="font-regular">This is a <span class="font-bold">carbon-neutral</span> delivery</p> 
  </div>
  <button class="confirm-button font-semi">Confirm Order</button>
  `;
  document.querySelectorAll(".remove-item").forEach((ele) => {
    ele.addEventListener("click", (e) => {
      let id = e.target.getAttribute("data-id");
      list.forEach((ele) => {
        if (ele.id === id) ele.count = 0;
      });
      hundleListItem(list.filter((ele) => ele.count > 0));
    });
  });
  document.querySelector(".confirm-button").addEventListener("click", () => {
    // * scrolling page and show alert
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    document.body.classList.add("confirm-order");
    // * hundle alert elements
    const confirmAlert = document.getElementsByClassName("confirm-alert")[0];
    confirmAlert.innerHTML = `
    <div class="content">
      <img src="assets/images/icon-order-confirmed.svg"/>
      <h1 class="font-bold"> Order Confirmed</h1>
      <p class="font-regular">We hope you enjoy your food</p>
      <div class ="container" ></div>
    </div>
  `;
  // * hundle order list and create cards 
    const orderList = list.filter((ele) => ele.count > 0);
    let total = 0;
    const container = document.querySelector(
      ".confirm-alert > .content > .container"
    );
    orderList.forEach((ele) => {
      total += ele.count * ele.price;
      container.innerHTML += `
      <div>
        <img src="${ele.cardImg}"/>
        <div>
          <p class="font-bold">${ele.name}</p>
          <p><span class="font-bold">${
            ele.count
          }x</span><span class="font-regular">@$${ele.price}</span></p>
        </div>
        <p class="font-semi">$${ele.count * ele.price}</p>
      </div>
      `;
    });
    container.innerHTML += `
    <section class="total" > 
      <span class="font-regular">Order Total</span>
      <span class="font-bold">$ ${total}</span>
    </section>
    `;
    // * events
    document.querySelector(".confirm-alert > .content").innerHTML += `
    <button id="resetOrder">Get New Order</button>
    `;
    document.getElementById("resetOrder").addEventListener("click", (ele) => {
      document.body.classList.remove("confirm-order");
      document.getElementsByClassName("content")[0].innerHTML = "";
      list.forEach((ele) => {
        if (ele.count > 0)
          document.getElementById(ele.id).classList.remove("selected");
        ele.count = 0;
      });
      hundleListItem([]);
    });
  });
}
// ? events
document.querySelectorAll(".decrement").forEach((ele) =>
  ele.addEventListener("click", (e) => {
    changeCountEvent(e, -1);
  })
);
document.querySelectorAll(".increment").forEach((ele) =>
  ele.addEventListener("click", (e) => {
    changeCountEvent(e, 1);
  })
);
document.querySelectorAll(".close").forEach((ele) =>
  ele.addEventListener("click", (e) => {
    changeCountEvent(e, 1);
  })
);
