const currency_list = [
  ["AED", "United Arab Emirates Dirhams"],
  ["AFN", "Afghan Afghani"],
  ["ALL", "Albanian Lek"],
  ["AMD", "Armenian Dram"],
  ["ANG", "Netherlands Antillean Guilder"],
  ["AOA", "Angolan Kwanza"],
  ["ARS", "Argentine Peso"],
  ["AUD", "Australian Dollar"],
  ["AWG", "Aruban Florin"],
  ["AZN", "Azerbaijani Manat"],
  ["BAM", "Bosnia Herzegovina Convertible Mark"],
  ["BBD", "Barbadian Dollar"],
  ["BGN", "Bulgarian Lev"],
  ["BHD", "Bahraini Dinar"],
  ["BIF", "Burundian Franc"],
  ["BMD", "Bermudan Dollar"],
  ["BOB", "Bolivian Boliviano"],
  ["BRL", "Brazilian Real"],
  ["BSD", "Bahamian Dollar"],
  ["BWP", "Botswanan Pula"],
  ["BYN", "Belarusian Ruble"],
  ["BZD", "Belize Dollar"],
  ["CDF", "Congolese Franc"],
  ["CHF", "Swiss Franc"],
  ["CLP", "Chilean Peso"],
  ["CNY", "Chinese Yuan"],
  ["COP", "Colombian Peso"],
  ["CRC", "Costa Rican Colón"],
  ["CUP", "Cuban Peso"],
  ["CZK", "Czech Koruna"],
  ["DJF", "Djiboutian Franc"],
  ["DKK", "Danish Krone"],
  ["DOP", "Dominican Peso"],
  ["DZD", "Algerian Dinar"],
  ["EGP", "Egyptian Pound"],
  ["ERN", "Eritrean Nakfa"],
  ["EUR", "Euro"],
  ["FJD", "Fijian Dollar"],
  ["FKP", "Falkland Islands Pound"],
  ["GBP", "British Pound"],
  ["GEL", "Georgian Lari"],
  ["GHS", "Ghanaian Cedi"],
  ["GIP", "Gibraltar Pound"],
  ["GMD", "Gambian Dalasi"],
  ["GNF", "Guinean Franc"],
  ["GTQ", "Guatemalan Quetzal"],
  ["GYD", "Guyanaese Dollar"],
  ["HKD", "Hong Kong Dollar"],
  ["HNL", "Honduran Lempira"],
  ["HRK", "Croatian Kuna"],
  ["HTG", "Haitian Gourde"],
  ["HUF", "Hungarian Forint"],
  ["IDR", "Indonesian Rupiah"],
  ["ILS", "Israeli New Shekel"],
  ["INR", "Indian Rupee"],
  ["IQD", "Iraqi Dinar"],
  ["IRR", "Iranian Rial"],
  ["ISK", "Icelandic Króna"],
  ["JMD", "Jamaican Dollar"],
  ["JOD", "Jordanian Dinar"],
  ["JPY", "Japanese Yen"],
  ["KES", "Kenyan Shilling"],
  ["KGS", "Kyrgystani Som"],
  ["KHR", "Cambodian Riel"],
  ["KMF", "Comorian Franc"],
  ["KRW", "South Korean Won"],
  ["KWD", "Kuwaiti Dinar"],
  ["KYD", "Cayman Islands Dollar"],
  ["KZT", "Kazakhstani Tenge"],
  ["LAK", "Laotian Kip"],
  ["LBP", "Lebanese Pound"],
  ["LKR", "Sri Lankan Rupee"],
  ["LRD", "Liberian Dollar"],
  ["LSL", "Lesotho Loti"],
  ["LYD", "Libyan Dinar"],
  ["MAD", "Moroccan Dirham"],
  ["MDL", "Moldovan Leu"],
  ["MGA", "Malagasy Ariary"],
  ["MKD", "Macedonian Denar"],
  ["MMK", "Myanmar Kyat"],
  ["MNT", "Mongolian Tugrik"],
  ["MOP", "Macanese Pataca"],
  ["MRU", "Mauritanian Ouguiya"],
  ["MUR", "Mauritian Rupee"],
  ["MVR", "Maldivian Rufiyaa"],
  ["MWK", "Malawian Kwacha"],
  ["MXN", "Mexican Peso"],
  ["MYR", "Malaysian Ringgit"],
  ["MZN", "Mozambican Metical"],
  ["NAD", "Namibian Dollar"],
  ["NGN", "Nigerian Naira"],
  ["NIO", "Nicaraguan Córdoba"],
  ["NOK", "Norwegian Krone"],
  ["NPR", "Nepalese Rupee"],
  ["NZD", "New Zealand Dollar"],
  ["OMR", "Omani Rial"],
  ["PAB", "Panamanian Balboa"],
  ["PGK", "Papua New Guinean Kina"],
  ["PHP", "Philippine Peso"],
  ["PKR", "Pakistani Rupee"],
  ["PLN", "Polish Zloty"],
  ["PYG", "Paraguayan Guarani"],
  ["QAR", "Qatari Riyal"],
  ["RON", "Romanian Leu"],
  ["RSD", "Serbian Dinar"],
  ["RUB", "Russian Ruble"],
  ["RWF", "Rwandan Franc"],
  ["SAR", "Saudi Riyal"],
  ["SBD", "Solomon Islands Dollar"],
  ["SCR", "Seychellois Rupee"],
  ["SDG", "Sudanese Pound"],
  ["SEK", "Swedish Krona"],
  ["SGD", "Singapore Dollar"],
  ["SHP", "St. Helena Pound"],
  ["SLL", "Sierra Leonean Leone (1964—2022)"],
  ["SOS", "Somali Shilling"],
  ["SRD", "Surinamese Dollar"],
  ["SSP", "South Sudanese Pound"],
  ["STN", "São Tomé Príncipe Dobra"],
  ["SYP", "Syrian Pound"],
  ["SZL", "Swazi Lilangeni"],
  ["THB", "Thai Baht"],
  ["TJS", "Tajikistani Somoni"],
  ["TMT", "Turkmenistani Manat"],
  ["TND", "Tunisian Dinar"],
  ["TOP", "Tongan Paanga"],
  ["TRY", "Turkish Lira"],
  ["TTD", "Trinidad Tobago Dollar"],
  ["TWD", "New Taiwan Dollar"],
  ["TZS", "Tanzanian Shilling"],
  ["UAH", "Ukrainian Hryvnia"],
  ["UGX", "Ugandan Shilling"],
  ["USD", "US Dollar"],
  ["UYU", "Uruguayan Peso"],
  ["UZS", "Uzbekistani Som"],
  ["VES", "Venezuelan Bolívar"],
  ["VND", "Vietnamese Dong"],
  ["VUV", "Vanuatu Vatu"],
  ["WST", "Samoan Tala"],
  ["XAF", "Central African CFA Franc"],
  ["XCD", "East Caribbean Dollar"],
  ["XOF", "West African CFA Franc"],
  ["XPF", "CFP Franc"],
  ["YER", "Yemeni Rial"],
  ["ZAR", "South African Rand"],
  ["ZMW", "Zambian Kwacha"],
  ["ZWL", "Zimbabwean Dollar (2009)"],
];
let currencyDataList = [];

const fromCurrencySelectTag = document.querySelector("#fromCurrency");
const toCurrencySelectTag = document.querySelector("#toCurrency");
const fromCountrySelectTag = document.querySelector("#fromCountry");
const toCountrySelectTag = document.querySelector("#toCountry");
currency_list.forEach((currency) => {
  const code = currency[0];
  const countryName = currency[1];

  const newElement1 = document.createElement("option");
  const newElement2 = document.createElement("option");
  newElement1.value = code;
  newElement1.textContent = `${code}`;
  newElement2.value = code;
  newElement2.textContent = `${code}`;

  fromCurrencySelectTag.append(newElement1);
  fromCountrySelectTag.append(newElement2);

  const newElementTo1 = newElement1.cloneNode(true);
  const newElementTo2 = newElement2.cloneNode(true);

  toCurrencySelectTag.append(newElementTo1);
  toCountrySelectTag.append(newElementTo2);
});

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
      currencyDataList.push(currencyRateObj);
    }
    currencyRateObj.rates[to] = rate;
  }

  alert(`Exchange rate added: 1 ${from} = ${rate} ${to}`);
  document.getElementById("addRateForm").reset();
  console.log(currencyDataList);
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
      finalValue.innerHTML = (exchangeRate * amount).toFixed(2);
    } else if (currencyDataList[i].base == to) {
      let rateList = currencyDataList[i].rates;
      exchangeRate = rateList[from];
      finalValue.innerHTML = (amount / exchangeRate).toFixed(2);
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
