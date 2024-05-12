const checkbox = document.getElementById("toggle");
let pricingcards = document.querySelectorAll(".pricing-card");

function priceUpdate() {
    pricingcards.forEach(card => {
        let priceElement = card.querySelector(".price");
        let initialPrice = parseFloat(priceElement.dataset.initial);
        if (checkbox.checked) {
            priceElement.textContent = '$' + (initialPrice *1.8 ).toFixed(2);        
          } else {
            priceElement.textContent = '$' + initialPrice.toFixed(2);
        }
    });
}

checkbox.addEventListener('change', priceUpdate);
function setInitialPrices() {
    pricingcards.forEach(card => {
        let priceElement = card.querySelector(".price");
        let initialPrice = parseFloat(priceElement.textContent.slice(1)); 
        priceElement.dataset.initial = initialPrice;
    });
}

setInitialPrices();


function updateCurrency() {
  const currencySelect = document.getElementById("currency-select").value;

  pricingcards.forEach(card => {
    let priceElement = card.querySelector(".price");
    let initialPrice = parseFloat(priceElement.dataset.initial);

    switch (currencySelect) {
      case "usd":
        priceElement.textContent = '$' + initialPrice.toFixed(2);
        break;
      case "inr":
        priceElement.textContent = '₹' + (initialPrice * 75.5).toFixed(2);
        break;
      case "aed":
        priceElement.textContent = 'د.إ' + (initialPrice * 3.67).toFixed(2);
        break;
      default:
        priceElement.textContent = '$' + initialPrice.toFixed(2);
    }
  });
}

const currencySelect = document.getElementById("currency-select");
currencySelect.addEventListener('change', updateCurrency);
