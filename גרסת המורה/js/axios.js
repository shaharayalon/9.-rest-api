const getWithAxios = async () => {
  try {
    let response = await axios.get("https://rickandmortyapi.com/api");
    console.log("axios response", response);
    console.log("axios data", response.data);
  } catch (err) {}
};
// getWithAxios();

const getWithFetch = async () => {
  try {
    let response = await fetch("https://rickandmortyapi.com/api");
    let data = await response.json();
    console.log("fetch response", response);
    console.log("fetch data", data);
  } catch (err) {}
};
// getWithFetch();

const postData = async (url = "", data = {}) => {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
};

const postWithFetch = async () => {
  try {
    let data = await postData("https://jsonplaceholder.typicode.com/posts", {
      title: "dfsgdfsgsdfgsdfgsdfgdsgf",
    });
    console.log("data from fetch", data);
  } catch (err) {}
};
postWithFetch();

const postWithAxios = async () => {
  try {
    let response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      {
        title: "dfsgdfsgsdfgsdfgsdfgdsgf",
      }
    );
    console.log("response from axios", response);
  } catch (err) {}
};
postWithAxios();
