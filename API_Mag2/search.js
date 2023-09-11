function search() {
  let input = document.getElementById("input").value;
  const searchfor = document.getElementById("searchfor");
  const empty = document.getElementById('empty')

  if (input.length == 0) {
    searchfor.innerText = ''
    document.getElementById("card_area").innerHTML = "";
    empty.innerText = 'Search box is Empty'
  }

  else {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
      .then((res) => res.json())
      .then((data) => display(data.meals));
  }
}

function display(data) {
  console.log(data)
  if (data != null) {
    const cardArea = document.getElementById("card_area");

    data.forEach((meal) => {
      const card = document.createElement("div");

      card.innerHTML = ` 
  <div class="col">
    <div class="card border-danger border-2">
      <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p style="height: 300px;" class="card-text overflow-auto">${meal.strInstructions}</p>
      </div>
    </div>
  </div>`;

      cardArea.appendChild(card);
    });
  }

  document.getElementById("spinner").style.display = "none";
}