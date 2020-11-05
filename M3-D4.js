window.onload = function () {
  console.log("HELLO");
  get_products("books");
  let empty_btn = document.getElementById("empty-btn");
  console.log(empty_btn);
  empty_btn.addEventListener("click", empty_cart);
};
let arrayofBooks = [];
let cart_container;

const get_products = (query) => {
  //query = "books";
  fetch(`https://striveschool-api.herokuapp.com/${query}`)
    .then((result) => result.json())
    .then((items) => {
      console.log(items);
      arrayofBooks = items;
      let display_container = document.querySelector(".display");
      cart_container = document.querySelector(".cart");
      let card_array = [];
      //let cart_cards_array = [];
      let card;

      items.forEach((element) => {
        //console.log(element);
        card = `<div class="col-md-4 book" id="${element.asin}">
        <div class="card mb-4 shadow-sm">
            <img class="card-img-top" src="${element.img}" alt="Card image cap">
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" class="btn add btn-sm btn-outline-secondary">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>`;

        card_array.push(card);
      });
      display_container.innerHTML = card_array.join("");
      let btns = document.querySelectorAll(".add");
      let books = document.querySelectorAll(".book");
      for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
          let book_card = books[i];
          book_card.style.background = "grey";
          let book_id = books[i].id;

          //console.log(book_id);
          console.log(arrayofBooks);
          let bookinArray = arrayofBooks.find((book) => book.asin === book_id);
          console.log(bookinArray);
          let cart_card = `<div class="col-md-4 book" id="${bookinArray}">
          <div class="card mb-4 shadow-sm">
              <img class="card-img-top" src="${bookinArray.img}" alt="Card image cap">
              <div class="card-body">
                  <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                          <button type="button" class="btn add btn-sm btn-outline-secondary">
                              Add to Cart
                          </button>
                      </div>
                  </div>
              </div>
          </div>
      </div>`;

          cart_container.innerHTML += cart_card;
        });
      }
      //console.log(btns);
    });
};

const empty_cart = () => {
  console.log("EMPTY");
  cart_container.innerHTML = "";
};
