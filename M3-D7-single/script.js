//DOM ELEMENTS
  let selector = document.querySelector("select");


window.onload = async () => {
  let users = await fetch("https://jsonplaceholder.typicode.com/users");
  let users_parsed = await users.json();

  let row = document.querySelector(".row");
  users_parsed.forEach((user) => {
    let col = `<div class="col col-6"> 
     <div class="card" style="width: 18rem">
             <div class="card-header">Users</div>
             <ul class="list-group list-group-flush">
                 <li class="list-group-item">${user.name}</li>
                 <li class="list-group-item">${user.username}</li>
                 <li class="list-group-item">${user.email}</li>
             </ul>
         </div> 
     </div>`;
    row.innerHTML += col;
  })

let category;

const getSelectedCategory = () => {
    selector.addEventListener("change", (event) => {
      category = event.target.value;
    });
  }

  getSelectedCategory();

const filter = (category = "name") => {
  let input = document.getElementById("field").value;
  console.log(category);
  switch(category) {
    case (category === "name") : 
        {let filtered = users_parsed.filter(user => user.username.include(input) )}
  }

}
filter();




  //   let name = document.querySelector("option:nth-of-type(1)").value;
  //   let username = document.querySelector("option:nth-of-type(2)").value;
  //   let email = document.querySelector("option:nth-of-type(3)").value;
  //   let filter = document.getElementById("filter").value;
  //   let searchInput = document.querySelector("input:nth-of-type(1)").value;
  //   let submitBtn = document.getElementById("submit");

  //   const filterByUserName = () => {
  //     let filtered = users_parsed.filter((found) =>
  //       found.username.includes(searchInput)
  //     );
  //     console.log(filtered);
  //     row.innerHTML = "";
  //     let cardFilered = `<div class="col col-6">
  //         <div class="card" style="width: 18rem;">
  //             <div class="card-header">
  //                 Featured
  //             </div>
  //             <ul class="list-group list-group-flush">
  //                 <li class="list-group-item">${filtered[0].name}</li>
  //                 <li class="list-group-item">${filtered[0].username} in</li>
  //                 <li class="list-group-item">${filtered[0].email}</li>
  //             </ul>
  //         </div>
  //         </div>`;
  //     row.innerHTML = row.innerHTML + cardFilered;
  //     filtered = [];
  //   };

  //   const filterByEmail = () => {
  //     let filtered = users_parsed.filter((found) =>
  //       found.email.includes(searchInput)
  //     );
  //     console.log(filtered);
  //     row.innerHTML = "";
  //     let cardFilered = `<div class="col col-6">
  //         <div class="card" style="width: 18rem;">
  //             <div class="card-header">
  //                 Featured
  //             </div>
  //             <ul class="list-group list-group-flush">
  //                 <li class="list-group-item">${filtered[0].name}</li>
  //                 <li class="list-group-item">${filtered[0].username} in</li>
  //                 <li class="list-group-item">${filtered[0].email}</li>
  //             </ul>
  //         </div>
  //         </div>`;
  //     row.innerHTML = row.innerHTML + cardFilered;
  //     filtered = [];
  //   };

  //   const filterByName = () => {
  //     let filtered = users_parsed.filter((found) =>
  //       found.name.includes(searchInput)
  //     );
  //     console.log(filtered);
  //     row.innerHTML = "";
  //     let cardFilered = `<div class="col col-6">
  //         <div class="card" style="width: 18rem;">
  //             <div class="card-header">
  //                 USER
  //             </div>
  //             <ul class="list-group list-group-flush">
  //                 <li class="list-group-item">${filtered[0].name}</li>
  //                 <li class="list-group-item">${filtered[0].username}</li>
  //                 <li class="list-group-item">${filtered[0].email}</li>
  //             </ul>
  //         </div>
  //         </div>`;
  //     row.innerHTML = row.innerHTML + cardFilered;
  //     filtered = [];
  //   };

  //   if (filter === name) {
  //     submitBtn.addEventListener("click", filterByName);
  //   } else if (filter === username) {
  //     submitBtn.addEventListener("click", filterByUserName);
  //   } else if (filter === email) {
  //     submitBtn.addEventListener("click", filterByEmail);
  //   }
  //   console.log(users_parsed);

  //   const extractName = () => {
  //       let name = users_parsed.map((n) => n.name);
  //       return name;
  //     };

  //   console.log(extractName());

  const createAddress = () => {
    users_parsed.forEach((user) => {
      const { city, street, suite, zipcode } = user.address;
      let personal_address = city + " " + street + " " + suite + " " + zipcode;
      console.log(personal_address);
    });
  };
  createAddress();
}
