let currencyDataList = [];

const api =
  "https://raw.githubusercontent.com/jymahar/jymahar.github.io/refs/heads/main/currencyData.json";

let fromList = [];
let toList = [];

const fromCountrySelectTag = document.querySelector("#fromCountry");
const toCountrySelectTag = document.querySelector("#toCountry");

//Handles add new rate
document.getElementById("addRateForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const from = document.getElementById("fromCurrency").value.toUpperCase();
  const to = document.getElementById("toCurrency").value.toUpperCase();
  const rate = parseFloat(document.getElementById("rate").value);

  if (from && to && rate) {
    let currencyRateObj = currencyDataList.find((data) => data.base === from);
    if (!currencyRateObj) {
      currencyRateObj = {
        timestamp: Date.now(),
        base: from,
        date: new Date().toISOString().split("T")[0],
        rates: {},
      };
      console.log(currencyRateObj);
      currencyDataList.push(currencyRateObj);
    }
    currencyRateObj.rates[to] = rate;
  }

  alert(`Exchange rate added: 1 ${from} = ${rate} ${to}`);

  //based on fromList and toList array trying to add new currency options
  if (!fromList.includes(from)) {
    fromList.push(from);
    toList.push(from);
    updateCurrencyOptions(from);
  }
  if (!toList.includes(to)) {
    toList.push(to);
    updateCurrencyOptions(to);
  }
  document.getElementById("addRateForm").reset();
});

function updateCurrencyOptions(currency) {
  const newElement = document.createElement("option");
  newElement.value = currency;
  newElement.textContent = `${currency}`;
  fromCountrySelectTag.append(newElement);
  const newElement1 = document.createElement("option");
  newElement1.value = currency;
  newElement1.textContent = `${currency}`;
  toCountrySelectTag.append(newElement1);
}

fromCountrySelectTag.addEventListener("change", (event) => {
  const fromValue = fromCountrySelectTag.value;
  const toCountry = toCountrySelectTag;
  const options = toList;

  // Clear existing options in the toCountry select
  toCountry.innerHTML = "";
  toCountry.innerHTML = '<option value="">Select Currency</option>';

  // Filter and add options excluding the selected fromCountry value
  options.forEach((option) => {
    if (option !== fromValue) {
      let newOption = document.createElement("option");
      newOption.value = option;
      newOption.textContent = option;
      toCountry.appendChild(newOption);
    }
  });
});

//handles convert rate
document.getElementById("convertRate").addEventListener("submit", (event) => {
  event.preventDefault();
  const from = document.getElementById("fromCountry").value.toUpperCase();
  const to = document.getElementById("toCountry").value.toUpperCase();
  let finalValue = document.querySelector(".finalValue");
  const amount = parseFloat(document.getElementById("amount").value);
  let exchangeRate;
  if (currencyDataList.length == 0) {
    finalValue.innerHTML = "No Exchange rate is not found.Please add new rate";
    finalValue.style = "font-size:15px";
    return;
  }
  for (let i = 0; i < currencyDataList.length; i++) {
    if (currencyDataList[i].base === from) {
      let rateList = currencyDataList[i].rates;
      exchangeRate = rateList[to];
      if (!exchangeRate) {
        finalValue.innerHTML =
          "Exchange rate is not found. Please add new rate";
        finalValue.style = "font-size:15px";
      } else {
        finalValue.innerHTML = (exchangeRate * amount).toFixed(2);
        break;
      }
    } else if (currencyDataList[i].base == to) {
      let rateList = currencyDataList[i].rates;
      exchangeRate = rateList[from];
      finalValue.innerHTML = (amount / exchangeRate).toFixed(2);
      break;
    } else {
      finalValue.innerHTML = "Exchange rate is not found. Please add new rate";
      finalValue.style = "font-size:15px";
    }
  }
});

//Handles reset
document.getElementById("reset").addEventListener("click", (event) => {
  document.getElementById("convertRate").reset();
  document.querySelector(".finalValue").innerHTML = "";
});

function searchCurrencyRate(from, to) {
  from = from.toUpperCase().trim();
  to = to.toUpperCase().trim();
  let results = [];
  if (!from && !to) {
    console.info("From and To currency input is empty");
    return "Please enter From or To currency.";
  }

  currencyDataList.forEach((data) => {
    const baseCurrency = data.base;

    // Check if query matches base currency
    if (baseCurrency.includes(from)) {
      Object.entries(data.rates).forEach(([toCurrency, rate]) => {
        if (to == toCurrency || !to) {
          results.push(` 1 ${baseCurrency} = ${rate} ${toCurrency}`);
        }
      });
    }
  });

  return results.length > 0 ? results.join("<br>") : "No matching rates found.";
}

document.getElementById("searchRate").addEventListener("submit", (event) => {
  event.preventDefault();
  const from = document.getElementById("fromCountrySearch").value.toUpperCase();
  const to = document.getElementById("toCountrySearch").value.toUpperCase();
  document.querySelector(".searchResults").innerHTML = searchCurrencyRate(
    from,
    to
  );
});

document.getElementById("searchRate").addEventListener("reset", (event) => {
  document.getElementById("searchRate").reset();
  document.querySelector(".searchResults").innerHTML = "";
});

function checkMarketStatus() {
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  const marketStatusEl = document.getElementById("marketStatus");

  if (currentHour >= 9 && currentHour < 17) {
    marketStatusEl.textContent = "📈 The market is OPEN.";
    marketStatusEl.style.color = "greenyellow";
  } else {
    marketStatusEl.textContent = "📉 The market is CLOSED.";
    marketStatusEl.style.color = "red";
  }
}

function setMarketAnnouncements() {
  const now = new Date();
  const currentTime = now.getTime();

  const openingTime = new Date();
  openingTime.setHours(9, 0, 0, 0);

  const closingTime = new Date();
  closingTime.setHours(17, 0, 0, 0);

  const timeUntilOpen = openingTime.getTime() - currentTime;
  const timeUntilClose = closingTime.getTime() - currentTime;

  if (timeUntilOpen > 0) {
    setTimeout(() => {
      alert("📢 The market is now OPEN!");
      checkMarketStatus();
    }, timeUntilOpen);
  }

  if (timeUntilClose > 0) {
    setTimeout(() => {
      alert("📢 The market is now CLOSED!");
      checkMarketStatus();
    }, timeUntilClose);
  }
}

// Initial check and schedule announcements
checkMarketStatus();
setMarketAnnouncements();

// Update status every minute
setInterval(checkMarketStatus, 60000);

function displayCurrencyRates() {
  const rateListContainer = document.getElementById("currencyRateList");
  rateListContainer.innerHTML = ""; // Clear existing items

  currencyDataList.forEach((currency) => {
    Object.entries(currency.rates).forEach(([toCurrency, rate]) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${currency.base}</td>
        <td>${toCurrency}</td>
        <td>${rate}</td>
        <td>${currency.date}</td>
      `;
      rateListContainer.appendChild(row);
    });
  });
}

// Call display function whenever a new rate is added
document.getElementById("addRateForm").addEventListener("submit", () => {
  displayCurrencyRates();
});

async function fetchCurrencyData() {
  try {
    const result = await fetch(api);
    const data = await result.json();
    for (let i = 0; i < data.length; i++) {
      currencyDataList.push(data[i]);
      if (!fromList.includes(data[i].base)) {
        fromList.push(data[i].base);
        updateCurrencyOptions(data[i].base);
        toList.push(data[i].base);
      }
    }
    displayCurrencyRates();
  } catch (err) {
    throw "Error found fetching currency data";
  }
}

fetchCurrencyData();
