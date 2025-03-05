const currencyRates = [];

function addCurrenyObject(fromCurrency, toCurrency, rate, date, timestamp) {
  const currencyObj = {
    timestamp: timestamp,
    base: fromCurrency,
    date: date,
    toCurrency: toCurrency,
    rates: {},
    addRate: function () {
      if (rate != undefined) {
        this.rates[toCurrency] = rate;
      }
    },
  };

  currencyRates.push(currencyObj);
  currencyObj.addRate();

  console.log(currencyObj);
}

function addRate(fromCurrency, toCurrency, rate, date, timestamp) {
  for (let item in currencyRates) {
    if (item.base === fromCurrency) {
      item.addRate(toCurrency, rate);
    }
  }
}

document
  .getElementById("addRateForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const from = document.getElementById("fromCurrency").value.toUpperCase();
    const to = document.getElementById("toCurrency").value.toUpperCase();
    const rate = parseFloat(document.getElementById("rate").value);
    const timestamp = Date.now();
    addCurrenyObject(
      from,
      to,
      rate,
      new Date().toLocaleDateString(),
      timestamp
    );

    alert(`Exchange rate added: 1 ${from} = ${rate} ${to}`);
    document.getElementById("addRateForm").reset();
    console.log(currencyRates);
  });

document
  .getElementById("convertRate")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const from = document.getElementById("fromCountry").value.toUpperCase();
    const to = document.getElementById("toCountry").value.toUpperCase();
    let finalValue = document.querySelector(".finalValue");
    const amount = parseFloat(document.getElementById("amount").value);
    let exchangeRate;
    for (let i = 0; i < currencyRates.length; i++) {
      if (currencyRates[i].base === from) {
        let rateList = currencyRates[i].rates;
        exchangeRate = rateList[to];
      }
    }

    finalValue.innerHTML = (exchangeRate * amount).toFixed(2);
    finalAmount.style.display = "block";
  });
