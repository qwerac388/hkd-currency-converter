const currencyList = {
  HKD: { symbol: "HKD", name: "Hong Kong Dollar" },
  AUD: { symbol: "AUD", name: "Australian Dollar" },
  CAD: { symbol: "CAD", name: "Canadian Dollar" },
  CHF: { symbol: "CHF", name: "Swiss Franc" },
  CNY: { symbol: "CNY", name: "Chinese Yuan" },
  DKK: { symbol: "DKK", name: "Danish Krone" },
  EUR: { symbol: "EUR", name: "Euro" },
  GBP: { symbol: "GBP", name: "British Pound" },
  JPY: { symbol: "JPY", name: "Japanese Yen" },
  KRW: { symbol: "KRW", name: "South Korean Won" },
  PLN: { symbol: "PLN", name: "Polish Zloty" },
  TRY: { symbol: "TRY", name: "Turkish New Lira" },
  USD: { symbol: "USD", name: "United States Dollar" },
};

//original currency
const select1 = document.getElementById("original-currency");
for (let key in currencyList) {
  const option = document.createElement("option");
  option.textContent = `${currencyList[key].symbol} (${currencyList[key].name})`;
  option.value = currencyList[key].symbol;
  select1.appendChild(option);
}

//convert currency
const select2 = document.getElementById("currency");
for (let key in currencyList) {
  const option = document.createElement("option");
  option.textContent = `${currencyList[key].symbol} (${currencyList[key].name})`;
  option.value = currencyList[key].symbol;
  select2.appendChild(option);
}

//swap button
function swapCurrencies() {
  const temp = select1.value;
  select1.value = select2.value;
  select2.value = temp;
}

const swapButton = document.getElementById("swap");
swapButton.addEventListener("click", swapCurrencies);

const convert = document.getElementById("convert");
const result = document.querySelector(".result");

//popular currencies buttons
function setConversionCurrency(currencyValue) {
  select2.value = currencyValue;
  select1.value = "HKD";
}

const popularCurrencuButtons = document.querySelectorAll(
  ".popular-currency-button"
);

popularCurrencuButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const currency = this.getAttribute("data-currency");
    setConversionCurrency(currency);
  });
});

//convert button
convert.addEventListener("click", function () {
  result.innerHTML = "";
  const input = document.querySelector("input");
  console.log(`Initial Input Value: ${input.value}`);

  //input Validation
  if (input.value <= 0) {
    errorMsg();
    input.value = "";
    console.log(`Invalid input reset: ${input.value}`);
    result.style.display = "none";
  } else {
    hideError();
    showPending();
    result.style.display = "block";
    console.log(`Valid input : ${input.value}`);
  }

  const dropdown1Value = select1.value;
  const dropdown2Value = select2.value;
  console.log(`Dropdown1 value : ${dropdown1Value}`);
  console.log(`Dropdown2 value : ${dropdown2Value}`);
  fetchData(input.value, dropdown1Value, dropdown2Value);
});

async function fetchData(inputValue, dropdown1Value, dropdown2Value) {
  try {
    const response = await fetch(
      `https://api.api-ninjas.com/v1/convertcurrency?want=${dropdown2Value}&have=${dropdown1Value}&amount=${inputValue}`,
      {
        method: "GET",
        headers: { "X-Api-Key": "8shmkmy3KkvULZ75astEag==35ewYVYXu1rMDZy2" },
        contentType: "application/json",
      }
    );

    const data = await response.json();

    console.log(data);
    const convertedCurrency = document.createElement("p");
    const lastUpdatedTime = document.createElement("p");
    convertedCurrency.textContent = `${inputValue} ${currencyList[dropdown1Value].symbol} = ${data.new_amount} ${currencyList[dropdown2Value].symbol}`;
    lastUpdatedTime.textContent = `Last Updated : ${new Date()}`;
    lastUpdatedTime.classList.add("time");
    result.appendChild(convertedCurrency);
    result.appendChild(lastUpdatedTime);
    hidePending();
  } catch (error) {
    console.error("Error:", error);
  }
}

function errorMsg() {
  const error = document.querySelector(".error");
  error.style.display = "block";
}

function hideError() {
  const error = document.querySelector(".error");
  error.style.display = "none";
}

function showPending() {
  const pending = document.querySelector(".pending");
  pending.style.display = "block";
}

function hidePending() {
  const pending = document.querySelector(".pending");
  pending.style.display = "none";
}
