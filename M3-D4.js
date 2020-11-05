window.onload = function () {
  console.log("HELLO");
  get_products("books");
};

const get_products = (query) => {
  //query = "books";
  fetch(`https://striveschool-api.herokuapp.com/${query}`)
    .then((result) => result.json())
    .then((items) => {
      console.log(items.length);
      //   let custom_card = document.querySelector(".custom-card");
      let display_container = document.querySelector(".display");
      let card_array = [];
      let card;

      items.forEach((element) => {
        //console.log(element);
        card = `<div class="col-md-4">
        <div class="card mb-4 shadow-sm">
            <img class="card-img-top" src="${element.img}" alt="Card image cap">
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>`;

        card_array.push(card);
        //console.log(card_array);
      });
      display_container.innerHTML = card_array.join("");
    });
};
