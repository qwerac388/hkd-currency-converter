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
