// Fetch currency exchange rates from an API (e.g., Open Exchange Rates)
const apiEndpoint = "https://api.exchangerate-api.com/v4/latest/USD"; // Replace with your API endpoint
fetch(apiEndpoint)
    .then((response) => response.json())
    .then((data) => {
        const currencies = Object.keys(data.rates);
        const fromCurrencySelect = document.getElementById("fromCurrency");
        const toCurrencySelect = document.getElementById("toCurrency");

        currencies.forEach((currency) => {
            const option1 = document.createElement("option");
            option1.value = currency;
            option1.textContent = currency;
            fromCurrencySelect.appendChild(option1);

            const option2 = document.createElement("option");
            option2.value = currency;
            option2.textContent = currency;
            toCurrencySelect.appendChild(option2);
        });
    });

function convertCurrency() {
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;

    // Fetch real-time exchange rates from the API (you'll need to modify this)
    fetch(apiEndpoint)
        .then((response) => response.json())
        .then((data) => {
            const exchangeRate = data.rates[toCurrency] / data.rates[fromCurrency];
            const convertedAmount = (amount * exchangeRate).toFixed(2);
            document.getElementById("convertedAmount").value = convertedAmount + " " + toCurrency;
        });
}
