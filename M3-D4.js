let arrayofBooks = [];
let cart_container;
let card_array = [];
let btns = [];
let skip_btns = [];
let display_container;

const get_products = (query) => {
  fetch(`https://striveschool-api.herokuapp.com/${query}`)
    .then((result) => result.json())
    .then((items) => {
      console.log(items);
      arrayofBooks = items;
      display_container = document.querySelector(".display");
      cart_container = document.querySelector(".cart");

      //let cart_cards_array = [];
      let card;

      arrayofBooks.forEach((element) => {
        card = `<div class="col-md-4 book" id="${element.asin}">
        <div class="card mb-4 shadow-sm">
            <img class="card-img-top" src="${element.img}" alt="Card image cap">
            <div class="card-body">
            <ul class="list-group list-group-flush">
    <li class="list-group-item">${element.title}</li>
    <li class="list-group-item">${element.price}</li>
    <li class="list-group-item">${element.category}</li>
  </ul>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" class="btn add btn-sm btn-outline-secondary">
                            Add to Cart
                        </button>
                        <button type="button" class="btn skip btn-sm btn-outline-secondary">
                        Skip
                        </button>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>`;

        card_array.push(card);
      });
      display_container.innerHTML = card_array.join("");
      btns = document.querySelectorAll(".add");
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
                  ul class="list-group list-group-flush">
    <li class="list-group-item">${bookinArray.title}</li>
    <li class="list-group-item">${bookinArray.price}</li>
    <li class="list-group-item">${bookinArray.category}</li>
  </ul>
                      
                  </div>
              </div>
          </div>
      </div>`;

          cart_container.innerHTML += cart_card;
        });
      }
    });

  //   skip_btns = document.querySelectorAll(".skip");
  //   console.log(skip_btns);

  //   for (let i = 0; i < skip_btns.length; i++) {
  //     skip_btns[i].addEventListener("click", function () {
  //       console.log("SKIPPED");
  //       let book_id = books[i].id;
  //       let bookinArray = arrayofBooks.find((book) => book.asin === book_id);
  //       bookinArray.innerHTML = "";
  //     });
  //   }
};

const empty_cart = () => {
  console.log("EMPTY");
  cart_container.innerHTML = "";
};

window.onload = function () {
  get_products("books");
  let empty_btn = document.getElementById("empty-btn");
  console.log(empty_btn);
  empty_btn.addEventListener("click", empty_cart);
  let form = document.querySelector(".form-inline");
  let filtered_card;
  form.addEventListener("submit", function (event) {
    //console.log(event.target[0].value);
    let entry = event.target[0].value;
    if (entry.length > 3) {
      let result = arrayofBooks.filter(
        (book) => book.title[(0, 3)] === entry[(0, 3)]
      );

      display_container.innerHTML = "";
      result.forEach((element) => {
        filtered_card = `<div class="col-md-4 book" id="${element.asin}">
              <div class="card mb-4 shadow-sm">
                  <img class="card-img-top" src="${element.img}" alt="Card image cap">
                  <div class="card-body">
                  <ul class="list-group list-group-flush">
          <li class="list-group-item">${element.title}</li>
          <li class="list-group-item">${element.price}</li>
          <li class="list-group-item">${element.category}</li>
        </ul>
                      <div class="d-flex justify-content-between align-items-center">
                          <div class="btn-group">
                              <button type="button" class="btn add btn-sm btn-outline-secondary">
                                  Add to Cart
                              </button>
                              <button type="button" class="btn skip btn-sm btn-outline-secondary">
                              Skip
                              </button>

                          </div>
                      </div>
                  </div>
              </div>
          </div>`;
        display_container.innerHTML += filtered_card;
      });
    }
  });
};
