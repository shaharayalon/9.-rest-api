let theInfoGrid = document.querySelector("#theInfoGrid");
let nextPage = document.querySelector("#nextPage");
let page;
let divs = document.querySelectorAll(".divs");
let prevPage = document.querySelector("#prevPage");

const createDiv = (infoArr) => {
  console.log("current page is: ", page);
  console.log(infoArr);
  let i = 0;
  for (let div of divs) {
    div.style.backgroundImage = "";
  }
  for (let div of divs) {
    div.style.backgroundImage = `url(${infoArr[i].image})`;
    div.style.backgroundSize = "100% 100%";
    i++;
  }
};

// createDiv();

const apiAsk = async (url) => {
  console.log("start");
  console.log("the url is: ", url);
  try {
    let rickAndMortyAsking = await axios.get(url);
    console.log(rickAndMortyAsking.data.results);
    createDiv(rickAndMortyAsking.data.results);
  } catch (err) {}
};

window.addEventListener("load", () => {
  page = 1;
  apiAsk("https://rickandmortyapi.com/api/character/");

  nextPage.addEventListener("click", () => {
    if (page == 42) {
      alert("end");
      return;
    } else {
      page++;
      console.log(page);
      apiAsk(`https://rickandmortyapi.com/api/character/?page=${page}`);
    }
  });
  prevPage.addEventListener("click", () => {
    if (page == 1) {
      alert("start");
      page = 1;
    } else if (page == 2) {
      page--;
      console.log(page);
      apiAsk("https://rickandmortyapi.com/api/character/");
    } else {
      page--;
      apiAsk(`https://rickandmortyapi.com/api/character/?page=${page}`);
    }
  });
});
