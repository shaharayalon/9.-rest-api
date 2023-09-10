// https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_mVVag0Uqnd50fHezHf1S1TFTz6fb1GLF7dnEsxu7&base_currency=ILS&currencies=EUR,USD
const convertToUSDAndEURO = async () => {
  try {
    let response = await axios.get(
      "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_mVVag0Uqnd50fHezHf1S1TFTz6fb1GLF7dnEsxu7&base_currency=ILS&currencies=EUR,USD"
    );
    let data = response.data.data;
    console.log("response", response);
    console.log("data", data);
    console.log("$", data.USD * 100);
  } catch (err) {}
};
convertToUSDAndEURO();



