// const getWithAxios = async () => {
//   try {
//     let response = await axios.get("https://rickandmortyapi.com/api");
//     console.log("axios response", response);
//     console.log("axios data", response.data);
//   } catch (err) {}
// };
// getWithAxios();

// const getWithFetch = async () => {
//   try {
//     let response = await fetch("https://rickandmortyapi.com/api");
//     let data = await response.json();
//     console.log("fetch response", response);
//     console.log("fetch data", data);
//   } catch (err) {}
// };
// getWithFetch();

const axiosTargil1 = async () => {
  try {
    let targil1Response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    console.log("the targil axios response is: ", targil1Response);
    console.log("the targil axios data is: ", targil1Response.data);
  } catch (err) {}
};

axiosTargil1();

// const postWithAxios = async () => {
//   try {
//     let response = await axios.post(
//       "https://jsonplaceholder.typicode.com/posts",
//       {
//         title: "dfsgdfsgsdfgsdfgsdfgdsgf",
//       }
//     );
//     console.log("response from axios", response);
//   } catch (err) {}
// };
// postWithAxios();

const targilAxiosPost = async () => {
  try {
    let axiosPost = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      { title: "shahar", body: "gagi", userId: 23 }
    );
    console.log("the response after the post in axios is: ", axiosPost);
  } catch (err) {}
};

targilAxiosPost();

let howMuch = document.querySelector("#howMuch");
let conversionBtn = document.querySelector("#conversionBtn");
let euro;
let dollar;
let result = document.querySelector("#result");

const convertILStoUSDandEURO = async (num) => {
  try {
    let convertresponse = await axios.get(
      "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_mVVag0Uqnd50fHezHf1S1TFTz6fb1GLF7dnEsxu7&base_currency=ILS&currencies=EUR,USD"
    );
    euro = convertresponse.data.data.EUR * num;
    dollar = convertresponse.data.data.USD * num;
    console.log(convertresponse);
    console.log("your euro is ", euro);
    console.log("your dollar is ", dollar);
    result.innerHTML =
      //   "your euro is: " + euro + " and your dollar is: " + dollar;
      `your euro is: ${euro} and your dollar is: ${dollar}`;
  } catch (err) {}
};

window.addEventListener("load", () => {
  conversionBtn.addEventListener("click", () => {
    convertILStoUSDandEURO(howMuch.value);
  });
});
