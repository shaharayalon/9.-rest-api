const createCard = (name, img) => {
  return `
    <div class="col">
        <div class="card text-bg-dark">
            <img
            src="${img}"
            class="card-img"
            alt="..."
            />
            <div class="card-img-overlay">
                <h5 class="card-title">${name}</h5>
            </div>
        </div>
    </div>`;
};

const getCharacter = async () => {
  let { data } = await axios.get("https://rickandmortyapi.com/api/character");
  return data;
};

const createCards = async () => {
  let data = await getCharacter();
  let charsContainerDiv = document.getElementById("charsContainerDiv");
  let i = 0;
  console.log("i % 3", i % 3);
  let str = "";
  for (let character of data.results) {
    // if(i%3===0)
    if (!(i % 3)) {
      str += `</div><div class="row">`;
    }
    str += createCard(character.name, character.image);
    i++;
  }
  str = str.slice(6);
  str += "</div>";
  charsContainerDiv.innerHTML = str;
  console.log(str);
};

window.addEventListener("load", () => {
  createCards();
});
